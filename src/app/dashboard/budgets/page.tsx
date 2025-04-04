import {BudgetsWrapper} from "@/components/dashboard/budgets/budgets-wrapper";
import type {Metadata} from "next";

export default function BudgetPage() {
  return (
    <>
      <div className="pb-4">
        <h1 className="text-3xl md:text-4xl font-bold">Budgets</h1>
        <p className="text-muted-foreground">
          Manage your spending limits and track your progress
        </p>
      </div>
      <BudgetsWrapper/>
    </>
  )
}
