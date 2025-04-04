import {UserInfo} from "@/components/dashboard/user-info";
import {createClient} from "@/utils/supabase/server";
import {redirect} from "next/navigation";
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import {Progress} from "@/components/ui/progress";
import {ArrowDown, ArrowUp, CreditCard, PiggyBank, TrendingUp, Wallet} from "lucide-react";
import {Budgets} from "@/components/dashboard/budgets/budgets";
import {DashboardCharts} from "@/components/dashboard/charts/dashboard-charts";
import {RecentTransactions} from "@/components/dashboard/transactions/recent-transactions";

// Mock data for charts - replace with actual data
const spendingTrends = [
  {month: 'Jan', income: 4500, expenses: 3200},
  {month: 'Feb', income: 4800, expenses: 3400},
  {month: 'Mar', income: 4600, expenses: 3300},
  {month: 'Apr', income: 5000, expenses: 3500},
  {month: 'May', income: 4700, expenses: 3100},
  {month: 'Jun', income: 4900, expenses: 3600},
];

const categoryData = [
  {name: 'Food & Dining', value: 1200},
  {name: 'Transportation', value: 800},
  {name: 'Entertainment', value: 600},
  {name: 'Shopping', value: 400},
  {name: 'Bills', value: 2000},
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884D8'];

export default async function Dashboard() {
  const supabase = await createClient()

  const {data, error} = await supabase.auth.getUser()
  if (error || !data?.user) {
    redirect('/signin')
  }

  // Mock data for the dashboard - replace with actual data fetching
  const totalBalance = 12500.50;
  const monthlyIncome = 4900.00;
  const monthlyExpenses = 3600.00;
  const savingsRate = ((monthlyIncome - monthlyExpenses) / monthlyIncome) * 100;

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl md:text-4xl font-bold">Overview</h1>
          <UserInfo user={data.user}/>
        </div>
      </div>

      {/* Financial Overview Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Balance</CardTitle>
            <Wallet className="h-4 w-4 text-muted-foreground"/>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              ${totalBalance.toLocaleString('en-US', {minimumFractionDigits: 2})}
            </div>
            <p className="text-xs text-muted-foreground">
              +2.1% from last month
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Monthly Income</CardTitle>
            <ArrowUp className="h-4 w-4 text-green-500"/>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              ${monthlyIncome.toLocaleString('en-US', {minimumFractionDigits: 2})}
            </div>
            <p className="text-xs text-muted-foreground">
              +12% from last month
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Monthly Expenses</CardTitle>
            <ArrowDown className="h-4 w-4 text-red-500"/>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              ${monthlyExpenses.toLocaleString('en-US', {minimumFractionDigits: 2})}
            </div>
            <p className="text-xs text-muted-foreground">
              -5% from last month
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Savings Rate</CardTitle>
            <PiggyBank className="h-4 w-4 text-blue-500"/>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {savingsRate.toFixed(1)}%
            </div>
            <Progress value={savingsRate} className="mt-2"/>
          </CardContent>
        </Card>
      </div>

      {/* Charts Section */}
      <DashboardCharts/>

      {/* Recent Transactions */}
      <RecentTransactions/>

      {/* Budget Overview */}
      <Card>
        <CardHeader>
          <CardTitle>Budget Overview</CardTitle>
          <CardDescription>Track your spending against budgets</CardDescription>
        </CardHeader>
        <CardContent>
          <Budgets/>
        </CardContent>
      </Card>
    </div>
  )
}
