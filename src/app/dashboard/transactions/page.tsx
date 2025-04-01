import {TransactionsWrapper} from "@/components/dashboard/transactions/transactions-wrapper";
import {ClientOnlyComponent} from "@/components/client-only-component";
import type {Metadata} from "next";

export const metadata: Metadata = {
  title: "SaveSurge - Transactions",
};

export default function TransactionsPage() {
  return (<ClientOnlyComponent>
    <TransactionsWrapper/>
  </ClientOnlyComponent>)
}
