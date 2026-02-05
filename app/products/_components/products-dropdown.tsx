import { Button } from "@/app/_components/ui/button";
import {
  AlertDialog,
  AlertDialogTrigger,
} from "../../_components/ui/alert-dialog";
import { Dialog, DialogTrigger } from "../../_components/ui/dialog";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "../../_components/ui/dropdown-menu";
import {
  MoreHorizontalIcon,
  ClipboardCopyIcon,
  PencilIcon,
  TrashIcon,
} from "lucide-react";
import DeleteDialog from "./deleteDialog";
import UpsertDialogContent from "./upsert-dialog-content";
import { useState } from "react";
import { products } from "@prisma/client";
import { toast } from "sonner";

interface ProductsDropdownProps {
  product: products;
}

const ProductsDropdown = ({ product }: ProductsDropdownProps) => {
  const [editDialogOpen, setEditDialogOpen] = useState(false);
  

  async function handleCopy() {
    await navigator.clipboard.writeText(product.id)
    toast.success("ID copiado!",{position: "top-center"})

  }

  return (
    <AlertDialog>
      <Dialog open={editDialogOpen} onOpenChange={setEditDialogOpen}>
        <DropdownMenu>

          <DropdownMenuTrigger asChild>
            <Button variant="ghost">
              <MoreHorizontalIcon size={16} />
            </Button>
          </DropdownMenuTrigger>

          <DropdownMenuContent className="rounded-lg bg-white dark:bg-zinc-900">
            <DropdownMenuItem
              className="gap-1.5"
              onClick={handleCopy}
            >
              <ClipboardCopyIcon size={16} />
              Copiar ID
            </DropdownMenuItem>

            <DropdownMenuSeparator />

            <DropdownMenuItem className="gap-1.5">
              <DialogTrigger className="flex cursor-default gap-1.5">
                <PencilIcon size={16} />
                Editar
              </DialogTrigger>
            </DropdownMenuItem>

            <DropdownMenuSeparator />

            <AlertDialogTrigger asChild>
              <DropdownMenuItem className="gap-1.5">
                <TrashIcon size={16} />
                Deletar
              </DropdownMenuItem>
            </AlertDialogTrigger>

          </DropdownMenuContent>
        </DropdownMenu>
        <UpsertDialogContent
          defaultValues={{
            id: product.id,
            name: product.name,
            price: Number(product.price),
            stock: product.stock,
          }}
          onSuccess={() => setEditDialogOpen(false)}
        />
        <DeleteDialog productID={product.id} name={product.name} />
      </Dialog>
    </AlertDialog>
  );
};

export default ProductsDropdown;
