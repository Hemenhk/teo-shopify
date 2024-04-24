import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Image from "next/image";
import TheCartTableQuantity from "./TheCartTableQuantity";

export default function TheCartTable({ cartItems }: { cartItems: any[] }) {
  const mappedCartItems =
    cartItems &&
    cartItems.map((item) => (
      <TableRow key={item.id}>
        <TableCell className="font-medium">
          <div className="flex gap-12 items-center">
            <Image
              src={item.merchandise.product.featuredImage.transformedSrc}
              alt="product image"
              width={300}
              height={300}
            />
            <h3></h3>
          </div>
        </TableCell>
        <TableCell>{item.merchandise.product.title}</TableCell>
        <TableCell>
          <TheCartTableQuantity cart={item} />
        </TableCell>
        <TableCell className="text-right">
          {item.cost.totalAmount.amount} {item.cost.totalAmount.currencyCode}
        </TableCell>
      </TableRow>
    ));

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Product</TableHead>
          <TableHead>Title</TableHead>
          <TableHead>Quantity</TableHead>
          <TableHead className="text-right">Total</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>{mappedCartItems}</TableBody>
    </Table>
  );
}
