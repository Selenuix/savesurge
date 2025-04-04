'use client';

import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell} from 'recharts';

const spendingTrends = [
  { month: 'Jan', income: 4500, expenses: 3200 },
  { month: 'Feb', income: 4800, expenses: 3400 },
  { month: 'Mar', income: 4600, expenses: 3300 },
  { month: 'Apr', income: 5000, expenses: 3500 },
  { month: 'May', income: 4700, expenses: 3100 },
  { month: 'Jun', income: 4900, expenses: 3600 },
];

const categoryData = [
  { name: 'Food & Dining', value: 1200 },
  { name: 'Transportation', value: 800 },
  { name: 'Entertainment', value: 600 },
  { name: 'Shopping', value: 400 },
  { name: 'Bills', value: 2000 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884D8'];

export function DashboardCharts() {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      {/* Spending Trends Chart */}
      <Card>
        <CardHeader>
          <CardTitle>Spending Trends</CardTitle>
          <CardDescription>Monthly income vs expenses</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={spendingTrends}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="income" stroke="#22c55e" name="Income" />
                <Line type="monotone" dataKey="expenses" stroke="#ef4444" name="Expenses" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      {/* Category Breakdown Chart */}
      <Card>
        <CardHeader>
          <CardTitle>Category Breakdown</CardTitle>
          <CardDescription>Expenses by category</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={categoryData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                  label={({name, percent}) => `${name} ${(percent * 100).toFixed(0)}%`}
                >
                  {categoryData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
    </div>
  );
} 