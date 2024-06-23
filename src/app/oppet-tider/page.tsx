import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import React from "react";
type HrType = {
  day: string;
  hrs: string;
};
const hrs = [
  { day: "Mån", hrs: "11:00 - 18:30" },
  { day: "Tis", hrs: "11:00 - 18:30" },
  { day: "Ons", hrs: "11:00 - 18:30" },
  { day: "Tor", hrs: "11:00 - 18:30" },
  { day: "Fre", hrs: "11:00 - 18:30" },
  { day: "Lör", hrs: "11:00 - 18:30" },
  { day: "Sön", hrs: "11:00 - 18:30" },
];

export default function OpeningHours() {
  const mappedHrs = hrs.map((hr: HrType) => (
    <TableRow key={hr.day} className="flex justify-between">
      <TableCell>
        <h2>{hr.day}</h2>
      </TableCell>
      <TableCell>
        <h2>{hr.hrs}</h2>
      </TableCell>
    </TableRow>
  ));
  return (
    <Table className="container my-10 w-2/4 lg:w-1/4">
      <TableHeader>
        <TableRow className="flex justify-between">
          <TableHead>Dag</TableHead>
          <TableHead>Öppettider</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>{mappedHrs}</TableBody>
    </Table>
  );
}
