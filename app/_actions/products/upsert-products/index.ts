"use server";

import { db } from "@/app/_lib/prisma";
import { revalidatePath } from "next/cache";
import { upsertProductSchema } from "./schema";
import { actionClient } from "@/app/_lib/safe-action";

export const upsertProducts = actionClient
  .schema(upsertProductSchema)
  .action(async ({ parsedInput }) => {
    const { id, ...data } = parsedInput;
    if (id) {
      await db.products.update({
        where: { id },
        data: data,
      });
    } else {
      await db.products.create({
        data: data,
      });
    }
    revalidatePath("/products");
  });
