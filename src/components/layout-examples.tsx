"use client"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function LayoutExamples() {
  return (
    <div className="space-y-4">
      {/* Example Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* User Profile Card */}
        <Card>
          <CardHeader className="p-3">
            <CardTitle className="text-sm">User Profile</CardTitle>
            <CardDescription className="text-xs">User information card example</CardDescription>
          </CardHeader>
          <CardContent className="p-3 flex items-center gap-2">
            <Avatar className="h-8 w-8">
              <AvatarImage src="https://github.com/shadcn.png" alt="Avatar" />
              <AvatarFallback>SC</AvatarFallback>
            </Avatar>
            <div>
              <p className="text-sm font-medium">Jane Smith</p>
              <p className="text-xs text-muted-foreground">Product Designer</p>
            </div>
          </CardContent>
          <CardFooter className="p-3 pt-0">
            <Button size="sm" variant="outline" className="w-full text-xs">View Profile</Button>
          </CardFooter>
        </Card>

        {/* Project Summary Card */}
        <Card>
          <CardHeader className="p-3">
            <CardTitle className="text-sm">Project Summary</CardTitle>
            <CardDescription className="text-xs">Project stats and metrics</CardDescription>
          </CardHeader>
          <CardContent className="p-3">
            <div className="space-y-1 text-sm">
              <div className="flex items-center justify-between">
                <span className="text-xs">Tasks Completed</span>
                <span className="font-medium">24/36</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-xs">Progress</span>
                <span className="font-medium">67%</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-xs">Status</span>
                {/* Consider using a Badge component here later if added */}
                <span className="font-medium text-primary">In Progress</span> 
              </div>
            </div>
          </CardContent>
          <CardFooter className="p-3 pt-0">
            <Button size="sm" className="w-full text-xs">View Details</Button>
          </CardFooter>
        </Card>

        {/* Feature Update Card */}
        <Card>
          <CardHeader className="p-3">
            <CardTitle className="text-sm">Feature Update</CardTitle>
            <CardDescription className="text-xs">New features available</CardDescription>
          </CardHeader>
          <CardContent className="p-3">
            <p className="text-xs">We&#39;ve just released a new update with several improvements:</p>
            <ul className="list-disc list-inside mt-1 space-y-0.5 text-xs">
              <li>Improved performance</li>
              <li>New dark mode option</li>
              <li>Bug fixes and stability improvements</li>
            </ul>
          </CardContent>
          <CardFooter className="p-3 pt-0">
            <Button size="sm" variant="outline" className="w-full text-xs">Learn More</Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
} 