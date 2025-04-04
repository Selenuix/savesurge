'use client';

import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import {DataTable} from "@/components/dashboard/transactions/data-table";
import {getColumns} from "@/components/dashboard/transactions/columns";
import {transactionsDataset} from "@/components/dashboard/transactions/trasanctions-dataset";

export function RecentTransactions() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Transactions</CardTitle>
        <CardDescription>Your latest financial activities</CardDescription>
      </CardHeader>
      <CardContent>
        <DataTable
          columns={getColumns('en-GB', 'DD/MM/YYYY')}
          data={transactionsDataset.slice(0, 5)}
        />
      </CardContent>
    </Card>
  );
}
