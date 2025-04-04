import {AccountsWrapper} from "@/components/dashboard/accounts/accounts-wrapper";
import type {Metadata} from "next";

export const metadata: Metadata = {
  title: "SaveSurge - Accounts",
};

export default function AccountsPage() {
  return (
    <>
      <div className="pb-4">
        <h1 className="text-3xl md:text-4xl font-bold">Accounts</h1>
        <p className="text-muted-foreground">
          Manage your connected bank accounts and track balances
        </p>
      </div>
      <AccountsWrapper/>
    </>
  )
}
