'use client';

import {Button} from "@/components/ui/button";
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import {Dialog, DialogContent, DialogTrigger, DialogTitle} from "@/components/ui/dialog";
import {Progress} from "@/components/ui/progress";
import {Plus, Pencil, Trash2} from "lucide-react";
import {motion} from "framer-motion";
import {useState} from "react";
import {Budget, BudgetFormData} from "./types";
import {BudgetForm} from "./budget-form";
import {useToast} from "@/hooks/use-toast";

// Mock data - replace with actual data fetching
const mockBudgets: Budget[] = [
  {
    id: '1',
    name: 'Groceries',
    amount: 500,
    currency: 'USD',
    period: 'monthly',
    category: 'Food & Dining',
    spent: 350,
    startDate: '2024-02-01',
    endDate: '2024-02-29',
    isActive: true,
    createdAt: '2024-02-01T00:00:00.000Z',
    updatedAt: '2024-02-01T00:00:00.000Z'
  },
  {
    id: '2',
    name: 'Entertainment',
    amount: 200,
    currency: 'USD',
    period: 'monthly',
    category: 'Entertainment',
    spent: 150,
    startDate: '2024-02-01',
    endDate: '2024-02-29',
    isActive: true,
    createdAt: '2024-02-01T00:00:00.000Z',
    updatedAt: '2024-02-01T00:00:00.000Z'
  }
];

export function Budgets() {
  const [budgets, setBudgets] = useState<Budget[]>(mockBudgets);
  const [selectedBudget, setSelectedBudget] = useState<Budget | undefined>();
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const {toast} = useToast();

  const handleCreateBudget = (data: BudgetFormData) => {
    const newBudget: Budget = {
      id: Math.random().toString(36).substring(2, 9),
      ...data,
      amount: parseFloat(data.amount),
      spent: 0,
      isActive: true,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
    setBudgets([...budgets, newBudget]);
    setIsDialogOpen(false);
    toast({
      title: "Budget created",
      description: "Your new budget has been created successfully.",
    });
  };

  const handleUpdateBudget = (data: BudgetFormData) => {
    if (!selectedBudget) return;

    setBudgets(budgets.map(budget =>
      budget.id === selectedBudget.id
        ? {
          ...budget,
          ...data,
          amount: parseFloat(data.amount),
          updatedAt: new Date().toISOString(),
        }
        : budget
    ));
    setIsDialogOpen(false);
    setSelectedBudget(undefined);
    toast({
      title: "Budget updated",
      description: "Your budget has been updated successfully.",
    });
  };

  const handleDeleteBudget = (id: string) => {
    setBudgets(budgets.filter(budget => budget.id !== id));
    toast({
      title: "Budget deleted",
      description: "Your budget has been deleted successfully.",
    });
  };

  const handleSubmit = (data: BudgetFormData) => {
    if (selectedBudget) {
      handleUpdateBudget(data);
    } else {
      handleCreateBudget(data);
    }
  };

  const handleEditBudget = (budget: Budget) => {
    setSelectedBudget(budget);
    setIsDialogOpen(true);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button className="gap-2">
              <Plus className="h-4 w-4"/>
              New Budget
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[600px]">
            <DialogTitle>{selectedBudget ? "Edit Budget" : "Create New Budget"}</DialogTitle>
            <BudgetForm
              initialData={selectedBudget ? {
                ...selectedBudget,
                amount: selectedBudget.amount.toString()
              } : undefined}
              onSubmit={handleSubmit}
              onCancel={() => {
                setIsDialogOpen(false);
                setSelectedBudget(undefined);
              }}
            />
          </DialogContent>
        </Dialog>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {budgets.map((budget) => (
          <motion.div
            key={budget.id}
            initial={{opacity: 0, y: 20}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 0.3}}
          >
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <div className="space-y-1">
                  <CardTitle className="text-sm font-medium">
                    {budget.name}
                  </CardTitle>
                  <CardDescription className="text-xs">
                    {budget.category}
                  </CardDescription>
                </div>
                <div className="flex items-center space-x-2">
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => handleEditBudget(budget)}
                  >
                    <Pencil className="h-4 w-4"/>
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => handleDeleteBudget(budget.id)}
                  >
                    <Trash2 className="h-4 w-4"/>
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Spent</span>
                    <span className="font-medium">
                      {new Intl.NumberFormat('en-US', {
                        style: 'currency',
                        currency: budget.currency
                      }).format(budget.spent)}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Budget</span>
                    <span className="font-medium">
                      {new Intl.NumberFormat('en-US', {
                        style: 'currency',
                        currency: budget.currency
                      }).format(budget.amount)}
                    </span>
                  </div>
                  <Progress
                    value={(budget.spent / budget.amount) * 100}
                    className="h-2"
                  />
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
