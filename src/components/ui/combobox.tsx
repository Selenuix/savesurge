"use client"

import * as React from "react"
import { Check, ChevronsUpDown, Plus } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

interface ComboboxProps {
  options: string[]
  value: string
  onChange: (value: string) => void
  placeholder?: string
  emptyText?: string
  createText?: string
  className?: string
}

export function Combobox({
  options,
  value,
  onChange,
  placeholder = "Select an option...",
  emptyText = "No results found.",
  createText = "Create",
  className,
}: ComboboxProps) {
  const [open, setOpen] = React.useState(false)
  const [inputValue, setInputValue] = React.useState(value)

  React.useEffect(() => {
    setInputValue(value)
  }, [value])

  const filteredOptions = options.filter((option) =>
    option.toLowerCase().includes(inputValue.toLowerCase())
  )

  const handleSelect = (currentValue: string) => {
    onChange(currentValue)
    setOpen(false)
  }

  const handleCreate = () => {
    if (inputValue.trim()) {
      onChange(inputValue.trim())
      setOpen(false)
    }
  }

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className={cn("w-full justify-between", className)}
        >
          {value || placeholder}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-full p-0 z-[102] bg-background">
        <Command>
          <CommandInput
            placeholder={placeholder}
            value={inputValue}
            onValueChange={setInputValue}
            className="bg-background"
          />
          <CommandEmpty>
            <div className="flex items-center justify-between p-2 bg-background">
              <span>{emptyText}</span>
              {inputValue.trim() && (
                <Button
                  variant="ghost"
                  size="sm"
                  className="h-8 px-2"
                  onClick={handleCreate}
                >
                  <Plus className="mr-2 h-4 w-4" />
                  {createText}
                </Button>
              )}
            </div>
          </CommandEmpty>
          <CommandGroup className="bg-background">
            {filteredOptions.map((option) => (
              <CommandItem
                key={option}
                value={option}
                onSelect={handleSelect}
                className="bg-background hover:bg-accent"
              >
                <Check
                  className={cn(
                    "mr-2 h-4 w-4",
                    value === option ? "opacity-100" : "opacity-0"
                  )}
                />
                {option}
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  )
} 