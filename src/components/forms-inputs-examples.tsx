"use client"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"

export default function FormsInputsExamples() {
  return (
    <div className="space-y-4 grid grid-cols-1 md:grid-cols-2 gap-4">
      {/* Input Examples (Moved from original page) */}
      <Card>
        <CardHeader className="p-3">
          <CardTitle className="text-sm">Text Inputs</CardTitle>
          <CardDescription className="text-xs">Various input field examples</CardDescription>
        </CardHeader>
        <CardContent className="p-3 space-y-3">
          <div className="space-y-1">
            <Label htmlFor="input-default" className="text-xs font-medium">
              Default Input
            </Label>
            <Input id="input-default" placeholder="Enter text here..." className="h-8" />
          </div>
          
          <div className="space-y-1">
            <Label htmlFor="input-disabled" className="text-xs font-medium">
              Disabled Input
            </Label>
            <Input id="input-disabled" placeholder="Disabled input" disabled className="h-8" />
          </div>
          
          <div className="space-y-1">
            <Label htmlFor="input-icon" className="text-xs font-medium">
              Input with Icon (Placeholder)
            </Label>
            <div className="relative">
              <Input id="input-icon" placeholder="Search..." className="h-8 pr-8" />
              {/* Placeholder for an actual icon */}
              <svg 
                className="absolute right-3 top-1/2 h-3 w-3 -translate-y-1/2 text-muted-foreground"
                fill="none" 
                height="24" 
                stroke="currentColor" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth="2" 
                viewBox="0 0 24 24" 
                width="24" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.3-4.3" />
              </svg>
            </div>
          </div>
           <div className="space-y-1">
            <Label htmlFor="input-email" className="text-xs font-medium">
              Email Input
            </Label>
            <Input id="input-email" type="email" placeholder="email@example.com" className="h-8" />
          </div>
          
          <div className="space-y-1">
            <Label htmlFor="input-password" className="text-xs font-medium">
              Password Input
            </Label>
            <Input id="input-password" type="password" placeholder="Enter password" className="h-8" />
          </div>
        </CardContent>
      </Card>

      {/* Textarea Example */}
       <Card>
        <CardHeader className="p-3">
          <CardTitle className="text-sm">Textarea</CardTitle>
          <CardDescription className="text-xs">Multi-line text input</CardDescription>
        </CardHeader>
        <CardContent className="p-3 space-y-3">
          <div className="space-y-1">
            <Label htmlFor="textarea-default" className="text-xs font-medium">
              Default Textarea
            </Label>
            <Textarea id="textarea-default" placeholder="Type your message here." />
          </div>
          <div className="space-y-1">
            <Label htmlFor="textarea-disabled" className="text-xs font-medium">
              Disabled Textarea
            </Label>
            <Textarea id="textarea-disabled" placeholder="Cannot type here." disabled />
          </div>
        </CardContent>
      </Card>

      {/* Checkbox Example */}
      <Card>
        <CardHeader className="p-3">
          <CardTitle className="text-sm">Checkbox</CardTitle>
           <CardDescription className="text-xs">Single selection toggle</CardDescription>
        </CardHeader>
        <CardContent className="p-3 space-y-3">
          <div className="flex items-center space-x-2">
            <Checkbox id="checkbox-terms" />
            <Label htmlFor="checkbox-terms" className="text-sm font-normal">
              Accept terms and conditions
            </Label>
          </div>
           <div className="flex items-center space-x-2">
            <Checkbox id="checkbox-disabled" disabled />
            <Label htmlFor="checkbox-disabled" className="text-sm font-normal text-muted-foreground">
              Disabled checkbox
            </Label>
          </div>
           <div className="flex items-center space-x-2">
            <Checkbox id="checkbox-checked-disabled" checked disabled />
            <Label htmlFor="checkbox-checked-disabled" className="text-sm font-normal text-muted-foreground">
              Checked disabled
            </Label>
          </div>
        </CardContent>
      </Card>

       {/* RadioGroup Example */}
      <Card>
        <CardHeader className="p-3">
          <CardTitle className="text-sm">Radio Group</CardTitle>
           <CardDescription className="text-xs">Select one from multiple options</CardDescription>
        </CardHeader>
        <CardContent className="p-3">
          <RadioGroup defaultValue="option-one">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="option-one" id="option-one" />
              <Label htmlFor="option-one" className="font-normal">Option One</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="option-two" id="option-two" />
              <Label htmlFor="option-two" className="font-normal">Option Two</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="option-three-disabled" id="option-three-disabled" disabled />
              <Label htmlFor="option-three-disabled" className="font-normal text-muted-foreground">Option Three (Disabled)</Label>
            </div>
          </RadioGroup>
        </CardContent>
      </Card>

       {/* Select Example */}
       <Card>
        <CardHeader className="p-3">
          <CardTitle className="text-sm">Select</CardTitle>
           <CardDescription className="text-xs">Dropdown selection</CardDescription>
        </CardHeader>
        <CardContent className="p-3 space-y-3">
          <div className="space-y-1">
            <Label htmlFor="select-food" className="text-xs font-medium">Favorite Food</Label>
            <Select>
              <SelectTrigger id="select-food" className="w-full h-8">
                <SelectValue placeholder="Select a fruit" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="apple">Apple</SelectItem>
                <SelectItem value="banana">Banana</SelectItem>
                <SelectItem value="blueberry">Blueberry</SelectItem>
                <SelectItem value="grapes">Grapes</SelectItem>
                <SelectItem value="pineapple">Pineapple</SelectItem>
              </SelectContent>
            </Select>
          </div>
           <div className="space-y-1">
            <Label htmlFor="select-disabled" className="text-xs font-medium">Disabled Select</Label>
             <Select disabled>
              <SelectTrigger id="select-disabled" className="w-full h-8">
                <SelectValue placeholder="Cannot select" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="option1">Option 1</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

       {/* Switch Example */}
       <Card>
        <CardHeader className="p-3">
          <CardTitle className="text-sm">Switch</CardTitle>
           <CardDescription className="text-xs">On/off toggle</CardDescription>
        </CardHeader>
        <CardContent className="p-3 space-y-3">
          <div className="flex items-center space-x-2">
            <Switch id="airplane-mode" />
            <Label htmlFor="airplane-mode">Airplane Mode</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Switch id="switch-disabled" disabled />
            <Label htmlFor="switch-disabled" className="text-muted-foreground">Disabled Switch</Label>
          </div>
           <div className="flex items-center space-x-2">
            <Switch id="switch-checked-disabled" checked disabled />
            <Label htmlFor="switch-checked-disabled" className="text-muted-foreground">Checked Disabled</Label>
          </div>
        </CardContent>
      </Card>

    </div>
  )
} 