import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Alert,
  AlertDescription,
  AlertTitle
} from "@/components/ui/alert"
import { ThemeToggle } from "@/components/theme-toggle"
import { Heading } from "@/components/ui/heading-font"
import { ArrowRight, Bot, Component, Info, Palette, PenTool } from "lucide-react"


const technologies = [
  { name: "Next.js", description: "React Framework" },
  { name: "React", description: "UI Library" },
  { name: "TypeScript", description: "Language" },
  { name: "Tailwind CSS", description: "Styling" },
  { name: "shadcn/ui", description: "Component Library" },
  { name: "Radix UI", description: "UI Primitives" },
  { name: "Sonner", description: "Toast Notifications" },
  { name: "Lucide React", description: "Icons" },
]

export default function HomePage() {
  return (
    <div className="container max-w-5xl py-8 md:py-12 mx-auto">
      {/* Header/Hero */}
      <header className="mb-10 md:mb-16 flex flex-col items-center text-center">
        <div className="absolute top-4 right-4">
          <ThemeToggle />
        </div>
        <Heading as="h1" size="xl" className="mb-4">
          blank
        </Heading>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-6">
          Jumpstart your project with the blank component library, live theme preview, and guides for AI-driven customization.
        </p>
        <Button asChild size="lg">
          <Link href="/registry">
            Explore Component Registry <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </Button>
      </header>

      {/* What is This? */}
      <section className="mb-12 md:mb-16">
        <Heading as="h2" size="lg" className="text-center mb-6 md:mb-8">
          What is This?
        </Heading>
        <Card className="max-w-3xl mx-auto">
          <CardContent className="p-6 text-center">
            <p className="text-muted-foreground">
              This is a starter template built with Next.js and shadcn/ui. The 
              <Link href="/registry" className="text-primary underline hover:no-underline px-1">Component Registry</Link> 
              isn't just a static style guide—it's a live preview reflecting the actual theme 
              (either Tailwind defaults or your `tailwind.config.js`). 
              It's designed to streamline development, especially when using AI tools like Cursor 
              for theme customization.
            </p>
          </CardContent>
        </Card>
      </section>

      {/* Production Notice */}
      <Alert className="max-w-3xl mx-auto mb-12 md:mb-16">
        <Info className="h-4 w-4" />
        <AlertTitle>Developer Resources</AlertTitle>
        <AlertDescription>
          <p>This project includes a <Link href="/registry" className="underline">component registry</Link> to help during development.</p>
          <p className="mt-2 text-sm text-muted-foreground">
            ⚠️ Before deploying to production, you may want to remove the <code className="text-xs bg-muted px-1 py-0.5 rounded">app/registry</code> directory 
            to reduce bundle size and remove developer-only features.
          </p>
        </AlertDescription>
      </Alert>

      {/* How to Use */}
      <section className="mb-12 md:mb-16">
        <Heading as="h2" size="lg" className="text-center mb-6 md:mb-8">
          How to Use
        </Heading>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2"><Component className="h-5 w-5 text-primary"/> 1. Explore Components</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Browse the <Link href="/registry" className="text-primary underline hover:no-underline">Registry</Link> to see the wide range of available shadcn/ui components and how they look with the current theme.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2"><Palette className="h-5 w-5 text-primary"/> 2. Observe the Theme</CardTitle>
            </CardHeader>
            <CardContent>
               <p className="text-sm text-muted-foreground">
                Notice how components reflect the live theme. Changes made to `tailwind.config.js` (or using defaults) will visually update the registry.
              </p>
            </CardContent>
          </Card>
           <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2"><Bot className="h-5 w-5 text-primary"/> 3. Modify with AI</CardTitle>
            </CardHeader>
            <CardContent>
               <p className="text-sm text-muted-foreground">
                Use an AI agent (like Cursor) to customize colors, fonts, or base styles. Use the prompts in the registry as a guide, specifically targeting `tailwind.config.js`.
              </p>
            </CardContent>
          </Card>
           <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2"><PenTool className="h-5 w-5 text-primary"/> 4. Build Your App</CardTitle>
            </CardHeader>
            <CardContent>
               <p className="text-sm text-muted-foreground">
                Leverage the registry as a reference and use the pre-installed components to build your application pages and features efficiently.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Built With */}
      <section>
         <Heading as="h2" size="lg" className="text-center mb-6 md:mb-8">
          Built With
        </Heading>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {technologies.map((tech) => (
            <Card key={tech.name} className="text-center">
              <CardContent className="p-4">
                <p className="font-semibold">{tech.name}</p>
                <p className="text-xs text-muted-foreground">{tech.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

       {/* Footer - Simple placeholder */}
       <footer className="mt-12 md:mt-16 border-t pt-6 text-center text-xs text-muted-foreground">
        Explore the <Link href="/registry" className="text-primary underline hover:no-underline">Component Registry</Link> to get started.
        <p className="mt-2">Made by <a href="https://x.com/ISBLANK_Dave" target="_blank" rel="noopener noreferrer" className="font-medium underline hover:no-underline">Dave</a></p>
      </footer>
    </div>
  )
}
