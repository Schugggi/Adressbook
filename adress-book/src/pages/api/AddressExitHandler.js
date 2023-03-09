import prisma from '../PrismaClient'

export default async function handler(_, res){
    const content = await prisma.contacts.findMany()
    console.log("AddressExitHandler : Data: ", content)
    res.status(200).json({data: content})
}
