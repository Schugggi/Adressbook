import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

export default function handler(req, res) {
  const {name, number, email, description} = req.query

  console.log("data: ", name, number, email, description)

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  console.log("----------------------------------------")
  if(!name) return res.status(411).json({ error: "Name not valid" });
  console.log("Passed : Name")
  if(!Number.isInteger(parseInt(number))) return res.status(412).json({ error: "Number not valid" });
  console.log("Passed : number")
  if(!emailRegex.test(email)) return res.status(413).json({ error: "Email not valid" });
  console.log("Passed : email")


  writeDBEntry(name, number, email, description)
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error("Error in AddressHandler : Prisma Error: ", e)
    await prisma.$disconnect()
    process.exit(1)
  })

  res.status(200).json({message: "Success"})
}


async function writeDBEntry(name, number, email, description){
  await prisma.contacts.create({
    data: {
      name: name,
      number: parseInt(number),
      email: email,
      description: description
    }
  })
}