"use client";
import { PlusIcon } from "lucide-react";
import { Button } from "../../_components/ui/button";
import {Dialog, DialogTrigger,} from "../../_components/ui/dialog";
import { useState } from "react";
import UpsertDialogContent from "./upsert-dialog-content";
import { toast } from "sonner";

const CreateProductsButton = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
      <DialogTrigger asChild>
        <Button variant="default">
          <PlusIcon size={16} />
          Cadastrar Produto
        </Button>
      </DialogTrigger>
      <UpsertDialogContent onSuccess={() =>{ setIsDialogOpen(false); toast.success("Produto criado com sucesso!",{position: "top-center"})}}/>
     
    </Dialog>
  );
};

export default CreateProductsButton;
