import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

export default function handler(_, res){
    const content = getData()
    console.log("AddressExitHandler : Data: ", content)
    res.status(200).json({message: "hello"})
}


async function getData(){
    const dBdata = await prisma.contacts.findMany()
    return dBdata
}