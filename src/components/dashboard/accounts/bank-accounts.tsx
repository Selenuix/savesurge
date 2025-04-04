'use client';

import {Button} from "@/components/ui/button";
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import {Plus, Wallet} from "lucide-react";
import {motion} from "framer-motion";

interface BankAccount {
  id: string;
  name: string;
  bankName: string;
  balance: number;
  currency: string;
  type: 'checking' | 'savings' | 'credit';
  lastSync: string;
}

// Mock data - replace with actual data fetching
const mockAccounts: BankAccount[] = [
  {
    id: '1',
    name: 'Main Checking',
    bankName: 'Chase Bank',
    balance: 2500.75,
    currency: 'USD',
    type: 'checking',
    lastSync: '2024-02-04T15:30:00Z'
  },
  {
    id: '2',
    name: 'Savings Account',
    bankName: 'Bank of America',
    balance: 10000.00,
    currency: 'USD',
    type: 'savings',
    lastSync: '2024-02-04T15:30:00Z'
  }
];

export function BankAccounts() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <Button className="gap-2">
          <Plus className="h-4 w-4"/>
          Add Account
        </Button>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {mockAccounts.map((account) => (
          <motion.div
            key={account.id}
            initial={{opacity: 0, y: 20}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 0.3}}
          >
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <div className="space-y-1">
                  <CardTitle className="text-sm font-medium">
                    {account.name}
                  </CardTitle>
                  <CardDescription className="text-xs">
                    {account.bankName}
                  </CardDescription>
                </div>
                <Wallet className="h-4 w-4 text-muted-foreground"/>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">
                  {new Intl.NumberFormat('en-US', {
                    style: 'currency',
                    currency: account.currency
                  }).format(account.balance)}
                </div>
                <p className="text-xs text-muted-foreground">
                  Last synced {new Date(account.lastSync).toLocaleDateString()}
                </p>
              </CardContent>
            </Card>
          </motion.div>
        ))}

        <motion.div
          initial={{opacity: 0, y: 20}}
          animate={{opacity: 1, y: 0}}
          transition={{duration: 0.3}}
        >
          <Card className="border-2 border-dashed hover:border-primary/50 transition-colors cursor-pointer">
            <CardContent className="flex flex-col items-center justify-center h-[140px] space-y-2">
              <Plus className="h-8 w-8 text-muted-foreground"/>
              <p className="text-sm font-medium text-muted-foreground">Add New Account</p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
