import { PrismaClient } from '@prisma/client'
const prisma_client = require('@prisma/client');
const prisma = prisma_client();
// const prisma = new PrismaClient()

export async function model_data() {
    // const models = await prisma.models.findMany();
    const model = await prisma.models.create({data: {name: "car"}});
    const models = await prisma.models.findMany();
}