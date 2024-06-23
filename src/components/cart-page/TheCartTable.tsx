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
import Link from "next/link";

export default function TheCartTable({ cartItems }: { cartItems: any[] }) {
  const mappedCartItems =
    cartItems &&
    cartItems.map((item) => {
      const sek = item.cost.totalAmount.currencyCode === "SEK" && "kr";
      return (
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
          <TableCell>
            <Link href={`/produkt/${item.merchandise.product.handle}`}>
              {item.merchandise.product.title}
            </Link>
            {item.merchandise?.selectedOptions.map((option: any, idx) => (
              <div
                key={idx}
                className="flex items-center gap-3 text-xs text-gray-500"
              >
                <p>
                  {option.name}: {option.value}
                </p>
              </div>
            ))}
          </TableCell>
          <TableCell>
            <TheCartTableQuantity cart={item} />
          </TableCell>
          <TableCell className="text-right">
            
            {item.cost.totalAmount.amount}{" "}{sek}
          </TableCell>
        </TableRow>
      );
    });

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Produkt</TableHead>
          <TableHead>Titel</TableHead>
          <TableHead>Kvantitet</TableHead>
          <TableHead className="text-right">Totalt</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>{mappedCartItems}</TableBody>
    </Table>
  );
}
