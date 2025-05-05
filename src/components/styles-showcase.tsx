"use client"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Heading } from "@/components/ui/heading-font"

// Updated component using theme colors directly
export function ColorsShowcase() {
  // Example theme colors (assuming shadcn/ui setup)
  const themeColors = [
    { name: "Background", class: "bg-background", text: "text-foreground" },
    { name: "Foreground", class: "bg-foreground", text: "text-background" },
    { name: "Card", class: "bg-card", text: "text-card-foreground" },
    { name: "Card Foreground", class: "bg-card-foreground", text: "text-card" }, // Might be less useful to show
    { name: "Popover", class: "bg-popover", text: "text-popover-foreground" },
    { name: "Popover Foreground", class: "bg-popover-foreground", text: "text-popover" }, // Might be less useful
    { name: "Primary", class: "bg-primary", text: "text-primary-foreground" },
    { name: "Primary Foreground", class: "bg-primary-foreground", text: "text-primary" }, // Might be less useful
    { name: "Secondary", class: "bg-secondary", text: "text-secondary-foreground" },
    { name: "Muted", class: "bg-muted", text: "text-muted-foreground" },
    { name: "Accent", class: "bg-accent", text: "text-accent-foreground" },
    { name: "Destructive", class: "bg-destructive", text: "text-destructive-foreground" },
    { name: "Border", class: "bg-border", text: "text-foreground" }, // Use foreground for contrast
    { name: "Input", class: "bg-input", text: "text-foreground" },   // Use foreground for contrast
    { name: "Ring", class: "bg-ring", text: "text-foreground" },     // Use foreground for contrast
  ];

  // Neutral colors from Tailwind's default scale (adjust if theme modifies these)
  const neutrals = [
    { name: "Neutral 50", class: "bg-neutral-50" },
    { name: "Neutral 100", class: "bg-neutral-100" },
    { name: "Neutral 200", class: "bg-neutral-200" },
    { name: "Neutral 300", class: "bg-neutral-300" },
    { name: "Neutral 400", class: "bg-neutral-400" },
    { name: "Neutral 500", class: "bg-neutral-500" },
    { name: "Neutral 600", class: "bg-neutral-600" },
    { name: "Neutral 700", class: "bg-neutral-700" },
    { name: "Neutral 800", class: "bg-neutral-800" },
    { name: "Neutral 900", class: "bg-neutral-900" },
    { name: "Neutral 950", class: "bg-neutral-950" },
  ];


  return (
    <div className="space-y-4">
      <Heading as="h2" size="sm">Colors</Heading>
      
      {/* Theme Colors */}
      <Card>
         <CardHeader className="p-3 pb-1">
            <CardTitle className="text-sm">Theme Colors</CardTitle>
            <CardDescription className="text-xs">Semantic colors defined in the theme.</CardDescription>
          </CardHeader>
          <CardContent className="p-3 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2">
            {themeColors.map((color) => (
              <div key={color.name} className="text-center">
                <div className={`h-10 w-full rounded border ${color.class}`}></div>
                <p className="text-xs mt-1 font-medium truncate">{color.name}</p>
              </div>
            ))}
          </CardContent>
           <CardFooter className="p-2 border-t">
            <p className="text-xs text-muted-foreground">Ask AI: &quot;Update the `[color name]` color in the Tailwind theme config to `[hex code]`&quot;.</p>
          </CardFooter>
      </Card>

      {/* Neutrals */}
       <Card>
         <CardHeader className="p-3 pb-1">
            <CardTitle className="text-sm">Neutrals</CardTitle>
             <CardDescription className="text-xs">Default neutral color scale.</CardDescription>
          </CardHeader>
          <CardContent className="p-3">
            <div className="flex flex-wrap gap-1">
              {neutrals.map((color) => (
                <div key={color.name} className="text-center flex-grow">
                  <div className={`h-6 w-full rounded ${color.class}`}></div>
                   <p className="text-[10px] mt-1 font-medium truncate">{color.name.split(' ')[1]}</p>
                </div>
              ))}
            </div>
          </CardContent>
           <CardFooter className="p-2 border-t">
            <p className="text-xs text-muted-foreground">Ask AI: &quot;Update the `neutral` colors in the Tailwind theme config&quot;.</p>
          </CardFooter>
        </Card>
    </div>
  )
}

export function TypographyShowcase() {
  return (
    <div className="space-y-4 mt-8">
      <Heading as="h2" size="sm">Typography</Heading>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardContent className="p-4 space-y-2">
            <p className="text-sm text-muted-foreground mb-1">Body (Sans Serif)</p>
            <p className="font-sans text-base">The quick brown fox jumps over the lazy dog.</p>
            <p className="font-sans text-lg font-medium">The quick brown fox jumps over the lazy dog.</p>
            <p className="font-sans text-sm font-light italic">The quick brown fox jumps over the lazy dog.</p>
          </CardContent>
          <CardFooter className="p-2 border-t">
            <p className="text-xs text-muted-foreground">Ask AI: &quot;Update the `sans` font family in the Tailwind theme config to `[Font Name]`&quot;.</p>
          </CardFooter>
        </Card>

        <Card>
           <CardContent className="p-4 space-y-2">
            <p className="text-sm text-muted-foreground mb-1">Heading (Serif)</p>
             <p className="font-serif text-base">The quick brown fox jumps over the lazy dog.</p>
             <p className="font-serif text-xl font-semibold">The quick brown fox jumps over the lazy dog.</p>
             <p className="font-serif text-sm italic">The quick brown fox jumps over the lazy dog.</p>
          </CardContent>
          <CardFooter className="p-2 border-t">
            <p className="text-xs text-muted-foreground">Ask AI: &quot;Update the `serif` font family in the Tailwind theme config to `[Font Name]`&quot;.</p>
          </CardFooter>
        </Card>
         <Card>
           <CardContent className="p-4 space-y-2">
            <p className="text-sm text-muted-foreground mb-1">Monospace</p>
             <p className="font-mono text-base">The quick brown fox jumps over the lazy dog.</p>
             <p className="font-mono text-lg font-medium">The quick brown fox jumps over the lazy dog.</p>
             <p className="font-mono text-sm">The quick brown fox jumps over the lazy dog.</p>
          </CardContent>
          <CardFooter className="p-2 border-t">
            <p className="text-xs text-muted-foreground">Ask AI: &quot;Update the `mono` font family in the Tailwind theme config to `[Font Name]`&quot;.</p>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}

export function UIStylingShowcase() {
  return (
    <div className="space-y-4 mt-8">
      <Heading as="h2" size="sm">UI Styling</Heading>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Buttons & Forms Card */}
        <Card>
          <CardHeader className="p-3">
            <CardTitle className="text-sm">Buttons & Forms</CardTitle>
             <CardDescription className="text-xs">Default component styles derived from CSS variables.</CardDescription>
          </CardHeader>
          <CardContent className="p-4 space-y-4">
            {/* Example Buttons with annotations */}
            <div className="flex gap-3 flex-wrap items-center">
              <div>
                <Button size="sm">Primary</Button> 
                <p className="text-[10px] text-muted-foreground mt-1">bg: var(--primary)</p>
              </div>
               <div>
                 <Button size="sm" variant="secondary">Secondary</Button>
                 <p className="text-[10px] text-muted-foreground mt-1">bg: var(--secondary)</p>
              </div>
               <div>
                 <Button size="sm" variant="destructive">Destructive</Button>
                 <p className="text-[10px] text-muted-foreground mt-1">bg: var(--destructive)</p>
               </div>
               <div>
                <Button size="sm" variant="outline">Outline</Button>
                 <p className="text-[10px] text-muted-foreground mt-1">border: var(--border)</p>
               </div>
               {/* Removed Ghost and Link for brevity, focus on variable-driven styles */}
               {/* <Button size=\"sm\" variant=\"ghost\">Ghost</Button> */}
               {/* <Button size=\"sm\" variant=\"link\">Link</Button> */}
            </div>
            
            {/* Example Input with annotations */}
            <div>
              <Label htmlFor="example-ui-1" className="text-xs mb-1 block">Input Style</Label>
              <Input id="example-ui-1" className="h-9" placeholder="Placeholder" /> 
              <p className="text-[10px] text-muted-foreground mt-1">bg: var(--input), border: var(--border)</p>
            </div>

             {/* Example Input showing focus ring */}
            <div>
              <Label htmlFor="example-ui-2" className="text-xs mb-1 block">Input Focus Ring</Label>
              <Input id="example-ui-2" className="h-9 focus:ring-2 focus:ring-offset-2" placeholder="Focus me" /> 
              <p className="text-[10px] text-muted-foreground mt-1">Focus ring uses var(--ring)</p>
            </div>

            {/* Example Border */}
             <div>
                <p className="text-xs mb-1 block">Border Style</p>
                <div className="h-10 rounded border p-2 text-xs flex items-center">
                  This box uses var(--border)
                </div>
             </div>

          </CardContent>
          <CardFooter className="p-2 border-t">
             {/* Updated Ask AI prompt */}
            <p className="text-xs text-muted-foreground">Ask AI: &quot;Update the `--primary` CSS variable in `globals.css`&quot; or &quot;Change the `border` color in `tailwind.config.js`&quot;.</p>
          </CardFooter>
        </Card>

        {/* Cards & Images Card */}
        <Card>
          <CardHeader className="p-3">
            <CardTitle className="text-sm">Cards & Radius</CardTitle> {/* Changed title */}
            <CardDescription className="text-xs">Card background and border radius styles.</CardDescription>
          </CardHeader>
          <CardContent className="p-4 space-y-4">
            {/* Example Default Card with annotations*/}
            <Card className="p-3">
              <div className="flex items-center justify-between mb-1">
                 <h3 className="text-sm font-medium">Default Card</h3>
                 <p className="text-[10px] text-muted-foreground">bg: var(--card)</p>
              </div>
              <p className="text-xs text-muted-foreground mb-2">Uses base card styles. The border radius below is controlled by `var(--radius)`.</p>
              <div className="bg-muted h-16 rounded-md border flex items-center justify-center text-xs">
                  {/* Example radius annotation inside */}
                  <span className="text-muted-foreground">radius: var(--radius)</span> 
              </div>
            </Card>

            {/* Removed the second card example for simplicity */}

            {/* Explicit radius examples */}
            <div>
                <p className="text-xs mb-1 block">Border Radius Examples</p>
                 <div className="flex gap-3 items-center">
                    <div className="h-10 w-10 bg-secondary rounded-sm border flex items-center justify-center text-[10px] text-secondary-foreground">sm</div>
                    <div className="h-10 w-10 bg-secondary rounded-md border flex items-center justify-center text-[10px] text-secondary-foreground">md</div>
                    <div className="h-10 w-10 bg-secondary rounded-lg border flex items-center justify-center text-[10px] text-secondary-foreground">lg</div>
                 </div>
                 <p className="text-[10px] text-muted-foreground mt-1">sm, md, lg radii derive from var(--radius)</p>
            </div>

          </CardContent>
          <CardFooter className="p-2 border-t">
             {/* Updated Ask AI prompt */}
            <p className="text-xs text-muted-foreground">Ask AI: &quot;Update the `--card` background color in `globals.css`&quot; or &quot;Change the base `--radius` value?&quot;.</p>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
} 