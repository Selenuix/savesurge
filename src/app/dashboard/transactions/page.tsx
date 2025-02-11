'use client'

import {DataTable} from "@/components/dashboard/transactions/data-table";
import {transactionsDataset} from "@/components/dashboard/transactions/trasanctions-dataset";
import {AppSettings} from "@/components/dashboard/settings/app-settings";
import {useLocalStorage} from "@uidotdev/usehooks";
import {getColumns} from "@/components/dashboard/transactions/columns";

export default function TransactionsPage() {
  const [settings] = useLocalStorage<AppSettings>("settings")
  const columns = getColumns(settings.language, settings.dateFormat)

  return <DataTable columns={columns} data={transactionsDataset}/>
}
