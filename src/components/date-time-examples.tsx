"use client"

import * as React from "react"
import { format } from "date-fns"
import { Calendar as CalendarIcon } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"


// --- Component Examples --- 

function CalendarExample() {
  const [date, setDate] = React.useState<Date | undefined>(new Date())

  return (
    <Card>
      <CardHeader className="p-3">
        <CardTitle className="text-sm">Calendar</CardTitle>
        <CardDescription className="text-xs">Standalone date selection</CardDescription>
      </CardHeader>
      <CardContent className="p-3 flex justify-center">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          className="rounded-md border"
        />
      </CardContent>
    </Card>
  )
}

function DatePickerExample() {
  const [date, setDate] = React.useState<Date | undefined>()

  return (
     <Card>
      <CardHeader className="p-3">
        <CardTitle className="text-sm">Date Picker</CardTitle>
        <CardDescription className="text-xs">Calendar within a popover</CardDescription>
      </CardHeader>
      <CardContent className="p-3">
        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant={"outline"}
              size="sm"
              className={cn(
                "w-[240px] justify-start text-left font-normal h-8",
                !date && "text-muted-foreground"
              )}
            >
              <CalendarIcon className="mr-2 h-4 w-4" />
              {date ? format(date, "PPP") : <span>Pick a date</span>}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0">
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              initialFocus
            />
          </PopoverContent>
        </Popover>
      </CardContent>
    </Card>
  )
}

// --- Main Export --- 

export default function DateTimeExamples() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
       <CalendarExample />
       <DatePickerExample />
    </div>
  )
} 