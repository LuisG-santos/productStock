"use client";

import { products } from "@prisma/client";
import { ColumnDef } from "@tanstack/react-table";
import { Badge } from "@/app/_components/ui/badge";
import { FaCircle } from "react-icons/fa";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
import { Button } from "@/app/_components/ui/button";
import {
  ClipboardCopyIcon,
  MoreHorizontalIcon,
  PencilIcon,
  TrashIcon,
} from "lucide-react";
import {
  DropdownMenuItem,
} from "@/app/_components/ui/dropdown-menu";

const translateStatus = (status: string) => {
  switch (status) {
    case "in_stock":
      return (
        <Badge className="bg-green-100 text-[#00A180] hover:bg-green-100">
          <FaCircle className="mr-1.5 inline" size={6} />
          Em estoque
        </Badge>
      );
    case "out_of_stock":
      return (
        <Badge className="bg-red-200 text-red-600 hover:bg-red-200">
          <FaCircle className="mr-1.5 inline" size={6} />
          Esgotado
        </Badge>
      );
    default:
      return status;
  }
};

export const productsTableCol: ColumnDef<products>[] = [
  {
    accessorKey: "name",
    header: "Nome",
  },
  {
    accessorKey: "price",
    header: "Preço",
  },
  {
    accessorKey: "stock",
    header: "Estoque",
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      const status = row.getValue("status") as string;
      return translateStatus(status);
    },
  },
  {
    accessorKey: "actions",
    header: "Ações",
    cell: (row) => {
      const product = row.row.original;
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost">
              <MoreHorizontalIcon size={16} />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="bg-white rounded-lg dark:bg-zinc-900 hover:bg-gray-700">

            <DropdownMenuItem
              className="gap-1.5"
              onClick={() => navigator.clipboard.writeText(product.id)}
            >
              <ClipboardCopyIcon size={16} />
              Copiar ID
            </DropdownMenuItem>

            <DropdownMenuItem className="gap-1.5">
              <PencilIcon size={16}/>
              Editar
              </DropdownMenuItem>
            <DropdownMenuSeparator />

            <DropdownMenuItem className="gap-1.5">
              <TrashIcon size={16}/>
              Deletar
              </DropdownMenuItem>
            <DropdownMenuSeparator />
            
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
