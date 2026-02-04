import { deleteProduct } from "@/app/_actions/products/deleteProduct";
import {
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/app/_components/ui/alert-dialog";
import { toast } from "sonner";

interface DeleteProductProps{
    productID: string;
    name: string
}

const DeleteDialog = ({productID, name}: DeleteProductProps) => {
    const handleDelete = async ()=>{
        try{
            await deleteProduct({id: productID})
            toast.success("Produto deletado com sucesso",{position: "top-center"})
        }catch(error){
            console.error(error)
        }
    }

  return (
    <AlertDialogContent>
      <AlertDialogHeader>
        <AlertDialogTitle>
          Tem certeza que deseja excluir o produto?
        </AlertDialogTitle>
        <AlertDialogDescription>
          Você está prestes a excluir esse produto "<code>{name}</code>"
        . Esta ação não pode ser desfeita. Deseja continuar?
        </AlertDialogDescription>
      </AlertDialogHeader>
      <AlertDialogFooter>
        <AlertDialogCancel>Cancelar</AlertDialogCancel>
        <AlertDialogAction onClick={handleDelete}>Continuar</AlertDialogAction>
      </AlertDialogFooter>
    </AlertDialogContent>
  );
};

export default DeleteDialog;
