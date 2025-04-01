'use client'

import {useLocalStorage} from "@uidotdev/usehooks";
import {AppSettings} from "@/components/dashboard/settings/app-settings";
import {getColumns} from "@/components/dashboard/transactions/columns";
import {ClientOnlyComponent} from "@/components/client-only-component";
import {DataTable} from "@/components/dashboard/transactions/data-table";
import {transactionsDataset} from "@/components/dashboard/transactions/trasanctions-dataset";

export function TransactionsWrapper() {
  const [settings] = useLocalStorage<AppSettings>("settings")
  const columns = getColumns(settings.language, settings.dateFormat)

  return (<ClientOnlyComponent>
    <DataTable columns={columns} data={transactionsDataset}/>
  </ClientOnlyComponent>)
}
