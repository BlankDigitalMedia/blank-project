"use client"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Avatar, 
  AvatarFallback, 
  AvatarImage
} from "@/components/ui/avatar"
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"


// --- Component Examples --- 

function AvatarExamples() {
  return (
    <Card>
      <CardHeader className="p-3">
        <CardTitle className="text-sm">Avatar</CardTitle>
        <CardDescription className="text-xs">Image representation of a user or entity</CardDescription>
      </CardHeader>
      <CardContent className="p-3 flex gap-4 items-center">
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
         <Avatar>
          <AvatarImage src="/invalid-path.png" alt="@placeholder" />
          <AvatarFallback>JD</AvatarFallback>
        </Avatar>
        <Avatar>
          {/* No src, just fallback */}
          <AvatarFallback>??</AvatarFallback>
        </Avatar>
      </CardContent>
    </Card>
  )
}

const invoices = [
  {
    invoice: "INV001",
    paymentStatus: "Paid",
    totalAmount: "$250.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV002",
    paymentStatus: "Pending",
    totalAmount: "$150.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV003",
    paymentStatus: "Unpaid",
    totalAmount: "$350.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV004",
    paymentStatus: "Paid",
    totalAmount: "$450.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV005",
    paymentStatus: "Paid",
    totalAmount: "$550.00",
    paymentMethod: "PayPal",
  },
]

function TableExample() {
  return (
     <Card>
      <CardHeader className="p-3">
        <CardTitle className="text-sm">Table</CardTitle>
        <CardDescription className="text-xs">Basic table structure for data</CardDescription>
      </CardHeader>
      <CardContent className="p-3">
        <Table>
          <TableCaption>A list of your recent invoices.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Invoice</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Method</TableHead>
              <TableHead className="text-right">Amount</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {invoices.map((invoice) => (
              <TableRow key={invoice.invoice}>
                <TableCell className="font-medium">{invoice.invoice}</TableCell>
                <TableCell>{invoice.paymentStatus}</TableCell>
                <TableCell>{invoice.paymentMethod}</TableCell>
                <TableCell className="text-right">{invoice.totalAmount}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}


// --- Main Export --- 

export default function DataDisplayExamples() {
  return (
    <div className="space-y-4">
      <AvatarExamples />
      <TableExample />
    </div>
  )
} 