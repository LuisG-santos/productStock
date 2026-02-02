"use server"

import { db } from "@/app/_lib/prisma"
import { revalidatePath } from "next/cache"
import { createProductSchema, CreateProductSchema } from "./schema"



export const createProducts = async (data: CreateProductSchema) => {

    createProductSchema.parse(data);
    await db.products.create({
        data,
    });
    revalidatePath("/products")
}