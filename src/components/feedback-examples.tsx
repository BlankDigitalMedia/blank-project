"use client"

import { toast } from "sonner"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Alert, 
  AlertDescription, 
  AlertTitle
} from "@/components/ui/alert"
import { Progress } from "@/components/ui/progress"
import { Skeleton } from "@/components/ui/skeleton"
import { Terminal } from "lucide-react"

// Re-exporting Toast examples from here now

// --- Component Examples --- 

// Basic Toast Examples (Moved from toast-examples.tsx)
function BasicToastExamples() {
  return (
    <Card>
      <CardHeader className="p-3">
        <CardTitle className="text-sm">Basic Toasts</CardTitle>
        <CardDescription className="text-xs">Simple toast notifications</CardDescription>
      </CardHeader>
      <CardContent className="p-3 space-y-2">
        <Button 
          size="sm"
          onClick={() => toast('Default toast notification')}
          className="w-full text-xs"
        >
          Show Default Toast
        </Button>
        
        <Button 
          size="sm"
          variant="outline"
          onClick={() => toast.success('Success toast notification')}
          className="w-full text-xs"
        >
          Show Success Toast
        </Button>
        
        <Button 
          size="sm"
          variant="outline"
          onClick={() => toast.error('Error toast notification')}
          className="w-full text-xs text-destructive"
        >
          Show Error Toast
        </Button>
      </CardContent>
    </Card>
  )
}

// Advanced Toast Examples (Moved from toast-examples.tsx)
function AdvancedToastExamples() {
  return (
    <Card>
      <CardHeader className="p-3">
        <CardTitle className="text-sm">Advanced Toasts</CardTitle>
        <CardDescription className="text-xs">Toasts with additional features</CardDescription>
      </CardHeader>
      <CardContent className="p-3 space-y-2">
        <Button 
          size="sm"
          onClick={() => 
            toast('Toast with action', {
              description: 'This toast has an action button',
              action: {
                label: 'Undo',
                onClick: () => toast.success('Action clicked')
              }
            })
          }
          className="w-full text-xs"
        >
          Toast with Action
        </Button>
        
        <Button 
          size="sm"
          variant="outline"
          onClick={() => 
            toast.promise(
              new Promise(resolve => setTimeout(resolve, 2000)),
              {
                loading: 'Loading...',
                success: 'Operation completed successfully',
                error: 'Something went wrong'
              }
            )
          }
          className="w-full text-xs"
        >
          Promise Toast
        </Button>
        
        <Button 
          size="sm"
          variant="outline"
          onClick={() => 
            toast('Custom duration toast', {
              duration: 5000,
              description: 'This toast will disappear after 5 seconds'
            })
          }
          className="w-full text-xs"
        >
          Custom Duration
        </Button>
      </CardContent>
    </Card>
  )
}

function AlertExamples() {
  return (
    <Card>
      <CardHeader className="p-3">
        <CardTitle className="text-sm">Alerts</CardTitle>
        <CardDescription className="text-xs">Displays a callout for user attention</CardDescription>
      </CardHeader>
      <CardContent className="p-3 space-y-3">
         <Alert>
          <Terminal className="h-4 w-4" />
          <AlertTitle>Heads up!</AlertTitle>
          <AlertDescription>
            You can add components to your app using the cli.
          </AlertDescription>
        </Alert>
         <Alert variant="destructive">
          <Terminal className="h-4 w-4" />
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>
            Your session has expired. Please log in again.
          </AlertDescription>
        </Alert>
      </CardContent>
    </Card>
  )
}

function ProgressExamples() {
  // For demo purposes
  const [progress, setProgress] = React.useState(13)
  React.useEffect(() => {
    const timer = setTimeout(() => setProgress(66), 500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <Card>
      <CardHeader className="p-3">
        <CardTitle className="text-sm">Progress</CardTitle>
        <CardDescription className="text-xs">Displays an indicator showing progress</CardDescription>
      </CardHeader>
      <CardContent className="p-3 space-y-3">
        <Progress value={progress} className="w-[60%]" />
        <Progress value={30} className="w-[60%] h-2" />
        <Progress value={90} className="w-[60%] h-1 bg-destructive" />
      </CardContent>
    </Card>
  )
}

function SkeletonExamples() {
  return (
     <Card>
      <CardHeader className="p-3">
        <CardTitle className="text-sm">Skeleton</CardTitle>
        <CardDescription className="text-xs">Used to show loading states</CardDescription>
      </CardHeader>
      <CardContent className="p-3">
         <div className="flex items-center space-x-4">
          <Skeleton className="h-12 w-12 rounded-full" />
          <div className="space-y-2">
            <Skeleton className="h-4 w-[250px]" />
            <Skeleton className="h-4 w-[200px]" />
          </div>
        </div>
      </CardContent>
    </Card>
  )
}


// --- Main Export --- 

// Import React for state management in Progress example
import React from 'react'

export default function FeedbackExamples() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <AlertExamples />
      <ProgressExamples />
      <SkeletonExamples />
      <BasicToastExamples /> 
      <AdvancedToastExamples /> 
    </div>
  )
} 