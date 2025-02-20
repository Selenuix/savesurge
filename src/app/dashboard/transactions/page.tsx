import {TransactionsWrapper} from "@/components/dashboard/transactions/transactions-wrapper";
import {ClientOnlyComponent} from "@/components/client-only-component";

export default function TransactionsPage() {
  return (<ClientOnlyComponent>
    <TransactionsWrapper/>
  </ClientOnlyComponent>)
}
