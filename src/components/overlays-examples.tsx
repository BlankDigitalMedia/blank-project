"use client"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"


// --- Component Examples --- 

// Moved from dialog-examples.tsx
function BasicDialogExample() {
  return (
    <Card>
      <CardHeader className="p-3">
        <CardTitle className="text-sm">Basic Dialog</CardTitle>
        <CardDescription className="text-xs">A simple modal dialog</CardDescription>
      </CardHeader>
      <CardContent className="p-3">
        <Dialog>
          <DialogTrigger asChild>
            <Button size="sm" variant="outline">Open Dialog</Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Basic Dialog</DialogTitle>
              <DialogDescription>
                This is a simple dialog built with Radix UI Dialog primitive.
              </DialogDescription>
            </DialogHeader>
            <div className="py-4">
              <p className="text-sm">Dialog content goes here. This can contain any React components.</p>
            </div>
            <DialogFooter>
              <Button size="sm">Save Changes</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </CardContent>
    </Card>
  )
}

// Moved from dialog-examples.tsx
function FormDialogExample() {
  return (
    <Card>
      <CardHeader className="p-3">
        <CardTitle className="text-sm">Form Dialog</CardTitle>
        <CardDescription className="text-xs">Dialog with form inputs</CardDescription>
      </CardHeader>
      <CardContent className="p-3">
        <Dialog>
          <DialogTrigger asChild>
            <Button size="sm" variant="outline">Edit Profile</Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Edit Profile</DialogTitle>
              <DialogDescription>
                Make changes to your profile here. Click save when you're done.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name" className="text-right text-sm">
                  Name
                </Label>
                <Input
                  id="name"
                  defaultValue="Jane Smith"
                  className="col-span-3 h-8"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="email" className="text-right text-sm">
                  Email
                </Label>
                <Input
                  id="email"
                  defaultValue="jane.smith@example.com"
                  className="col-span-3 h-8"
                />
              </div>
            </div>
            <DialogFooter>
              <Button size="sm">Save Changes</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </CardContent>
    </Card>
  )
}

function PopoverExample() {
  return (
     <Card>
      <CardHeader className="p-3">
        <CardTitle className="text-sm">Popover</CardTitle>
        <CardDescription className="text-xs">Displays rich content in a portal</CardDescription>
      </CardHeader>
      <CardContent className="p-3">
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="outline" size="sm">Open popover</Button>
          </PopoverTrigger>
          <PopoverContent className="w-80">
            <div className="grid gap-4">
              <div className="space-y-2">
                <h4 className="font-medium leading-none">Dimensions</h4>
                <p className="text-sm text-muted-foreground">
                  Set the dimensions for the layer.
                </p>
              </div>
              <div className="grid gap-2">
                <div className="grid grid-cols-3 items-center gap-4">
                  <Label htmlFor="width">Width</Label>
                  <Input id="width" defaultValue="100%" className="col-span-2 h-8" />
                </div>
                <div className="grid grid-cols-3 items-center gap-4">
                  <Label htmlFor="maxWidth">Max. width</Label>
                  <Input id="maxWidth" defaultValue="300px" className="col-span-2 h-8" />
                </div>
                <div className="grid grid-cols-3 items-center gap-4">
                  <Label htmlFor="height">Height</Label>
                  <Input id="height" defaultValue="25px" className="col-span-2 h-8" />
                </div>
                <div className="grid grid-cols-3 items-center gap-4">
                  <Label htmlFor="maxHeight">Max. height</Label>
                  <Input id="maxHeight" defaultValue="none" className="col-span-2 h-8" />
                </div>
              </div>
            </div>
          </PopoverContent>
        </Popover>
      </CardContent>
    </Card>
  )
}

function TooltipExample() {
  return (
     <Card>
      <CardHeader className="p-3">
        <CardTitle className="text-sm">Tooltip</CardTitle>
        <CardDescription className="text-xs">Shows information on hover</CardDescription>
      </CardHeader>
      <CardContent className="p-3">
         <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="outline" size="sm">Hover Me</Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Add to library</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </CardContent>
    </Card>
  )
}


// --- Main Export --- 

export default function OverlaysExamples() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <BasicDialogExample />
      <FormDialogExample />
      <PopoverExample />
      <TooltipExample />
    </div>
  )
} 