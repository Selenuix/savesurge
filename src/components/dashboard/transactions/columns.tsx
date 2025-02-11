"use client"

import {ColumnDef} from "@tanstack/react-table"
import {type Transaction} from "@/components/dashboard/transactions/trasanctions-dataset"
import {Badge} from "@/components/ui/badge"
import {cn} from "@/lib/utils"

export const getColumns = (locale: string, dateFormat: 'MM/DD/YYYY' | 'DD/MM/YYYY' | 'YYYY/MM/DD'): ColumnDef<Transaction>[] => {
  return [{
    accessorKey: "date",
    header: "Date",
    cell: ({row}) => {
      const date = new Date(row.getValue("date"))
      const day: string = date.getDate().toString().padStart(2, '0')
      const month: string = (date.getMonth() + 1).toString().padStart(2, '0')
      const year: number = date.getFullYear()

      const formatMap = {
        'DD/MM/YYYY': `${day}/${month}/${year}`,
        'MM/DD/YYYY': `${month}/${day}/${year}`,
        'YYYY/MM/DD': `${year}/${month}/${day}`
      }

      return formatMap[dateFormat]
    }
  }, {
    accessorKey: "description", header: "Description"
  }, {
    accessorKey: "amount", header: "Amount", cell: ({row}) => {
      const transaction = row.original
      const amount = transaction.amount
      const formatted = new Intl.NumberFormat(locale, {
        style: "currency", currency: transaction.currency
      }).format(amount)

      return <div className={cn("font-medium", amount < 0 ? "text-red-500" : "text-green-500")}>{formatted}</div>
    }
  }, {
    accessorKey: "status", header: "Status", cell: ({row}) => {
      const status = row.getValue("status") as string
      return <Badge variant={status === "PENDING" ? "outline" : "default"}>{status}</Badge>
    }
  }]
}
