import { DataTable } from "../_components/ui/data-table";
import { productsTableCol } from "./_components/table-colums";
import CreateProductsButton from "./_components/createProductButton";

export const dynamic = "force-dynamic";

const ProductsPage = async () => {
  const response = await fetch("http://localhost:3000/api/products", {
    method: "GET",
    next: { revalidate: 5 },
  });
  const products = await response.json();

  return (
    <div className="h-full space-y-8 rounded-xl bg-white p-5 dark:bg-black">
      <div className="flex items-center justify-between">
        <div className="space-y-1">
          <span className="text-xs font-semibold text-slate-500">
            Gestão de produtos
          </span>
          <h2 className="text-2xl font-semibold">Produtos</h2>
        </div>

        <CreateProductsButton/>
      </div>
      <DataTable columns={productsTableCol} data={products} />
    </div>
  );
};

export default ProductsPage;
