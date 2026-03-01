"use client";

import { Sheet, SheetTrigger } from "@/app/_components/ui/sheet";
import UpsertSheet from "./upsert-sheet";
import { Button } from "@/app/_components/ui/button";
import { ComboboxOption } from "@/app/_components/ui/combobox";
import { products } from "@prisma/client";
import { useState } from "react";

interface CreateSaleButtonProps {
    products: products[];
    productOption: ComboboxOption[];
}

const CreateSaleButton = (props: CreateSaleButtonProps) => {
    const [isOpen, setIsOpen] = useState(false);
  
    return ( 
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button>Nova venda</Button>
          </SheetTrigger>
          <UpsertSheet onSubmitSuccess={() => setIsOpen(false)} {...props}/>
        </Sheet>
     );
}
 
export default CreateSaleButton;