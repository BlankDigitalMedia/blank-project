import { Metadata } from "next"
import dynamic from 'next/dynamic'

import { ThemeToggle } from "@/components/theme-toggle"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ColorsShowcase, TypographyShowcase, UIStylingShowcase } from "@/components/styles-showcase"
import { Heading } from "@/components/ui/heading-font"

// Dynamic imports for registry tab components
const LayoutExamples = dynamic(() => import("@/components/layout-examples"), {
  loading: () => <div className="p-4 animate-pulse bg-muted rounded-md h-32" />
});
const FormInputExamples = dynamic(() => import("@/components/forms-inputs-examples"), {
  loading: () => <div className="p-4 animate-pulse bg-muted rounded-md h-32" />
});
const NavigationExamples = dynamic(() => import("@/components/navigation-examples"), {
  loading: () => <div className="p-4 animate-pulse bg-muted rounded-md h-32" />
});
const DataDisplayExamples = dynamic(() => import("@/components/data-display-examples"), {
  loading: () => <div className="p-4 animate-pulse bg-muted rounded-md h-32" />
});
const FeedbackExamples = dynamic(() => import("@/components/feedback-examples"), {
  loading: () => <div className="p-4 animate-pulse bg-muted rounded-md h-32" />
});
const OverlaysExamples = dynamic(() => import("@/components/overlays-examples"), {
  loading: () => <div className="p-4 animate-pulse bg-muted rounded-md h-32" />
});
const DateTimeExamples = dynamic(() => import("@/components/date-time-examples"), {
  loading: () => <div className="p-4 animate-pulse bg-muted rounded-md h-32" />
});

export const metadata: Metadata = {
  title: "Registry",
  description: "Component registry for the blank design system.",
}

export default function RegistryPage() {
  return (
    <div className="container max-w-6xl py-4 mx-auto">
      <header className="mb-4 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">Component Registry</h1>
          <p className="text-sm text-muted-foreground">
            A showcase of UI components using shadcn/ui, Radix UI, and Sonner toast
          </p>
          <a
            href="/brand"
            className="inline-block mt-2 px-4 py-2 bg-card text-card-foreground border border-card shadow rounded hover:bg-muted transition"
          >
            Site Branding & Meta →
          </a>
        </div>
        <ThemeToggle />
      </header>

      <Tabs defaultValue="styles" className="w-full mb-4">
        <TabsList className="mb-4 grid grid-cols-4 sm:grid-cols-8 h-auto">
          <TabsTrigger value="styles">Styles</TabsTrigger>
          <TabsTrigger value="layout">Layout</TabsTrigger>
          <TabsTrigger value="forms">Forms & Inputs</TabsTrigger>
          <TabsTrigger value="feedback">Feedback</TabsTrigger>
          <TabsTrigger value="navigation">Navigation</TabsTrigger>
          <TabsTrigger value="data">Data Display</TabsTrigger>
          <TabsTrigger value="overlays">Overlays</TabsTrigger>
          <TabsTrigger value="datetime">Date & Time</TabsTrigger>
        </TabsList>

        <TabsContent value="styles" className="space-y-4">
          <Heading as="h2" size="sm">Styles</Heading>
          <ColorsShowcase />
          <TypographyShowcase />
          <UIStylingShowcase />
        </TabsContent>
        
        <TabsContent value="layout" className="space-y-4">
          <Heading as="h2" size="sm">Layout Components</Heading>
          <LayoutExamples />
        </TabsContent>

        <TabsContent value="forms" className="space-y-4">
          <Heading as="h2" size="sm">Forms & Inputs</Heading>
          <FormInputExamples />
        </TabsContent>

        <TabsContent value="feedback" className="space-y-4">
          <Heading as="h2" size="sm">Feedback Components</Heading>
          <FeedbackExamples />
        </TabsContent>

        <TabsContent value="navigation" className="space-y-4">
          <Heading as="h2" size="sm">Navigation Components</Heading>
          <NavigationExamples />
        </TabsContent>

        <TabsContent value="data" className="space-y-4">
          <Heading as="h2" size="sm">Data Display Components</Heading>
          <DataDisplayExamples />
        </TabsContent>

        <TabsContent value="overlays" className="space-y-4">
          <Heading as="h2" size="sm">Overlay Components</Heading>
          <OverlaysExamples />
        </TabsContent>

        <TabsContent value="datetime" className="space-y-4">
          <Heading as="h2" size="sm">Date & Time Components</Heading>
          <DateTimeExamples />
        </TabsContent>
      </Tabs>

      <footer className="mt-8 border-t pt-3 text-center text-xs text-muted-foreground">
        Built with Next.js, TypeScript, Tailwind CSS, shadcn/ui, Radix UI, and Sonner toast
      </footer>
    </div>
  )
} 