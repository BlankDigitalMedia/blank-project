"use client";

import { Heading } from "@/components/ui/heading-font";
import Link from "next/link";
import { useState } from "react";
import { Copy as CopyIcon } from "lucide-react";
import Image from "next/image";

const CopyButton = ({ value, label }: { value: string; label: string }) => {
  const [copied, setCopied] = useState(false);
  const handleCopy = async () => {
    await navigator.clipboard.writeText(value);
    setCopied(true);
    setTimeout(() => setCopied(false), 1200);
  };
  return (
    <button
      onClick={handleCopy}
      aria-label={`Copy ${label}`}
      className="ml-2 p-1 rounded hover:bg-muted transition"
      type="button"
      tabIndex={0}
    >
      {copied ? (
        <span className="text-xs text-primary">Copied!</span>
      ) : (
        <CopyIcon className="w-4 h-4 text-muted-foreground" />
      )}
    </button>
  );
};

export default function BrandPage() {
  return (
    <div className="container max-w-3xl mx-auto py-10 px-4">
      <header className="mb-8 flex flex-col gap-2 items-start">
        <Heading as="h1" size="lg" className="font-bold">Site Branding & Meta</Heading>
        <p className="text-muted-foreground text-base max-w-xl">
          All your site identity, meta, and branding settings in one place. Update these before handoff for a professional, on-brand experience.
        </p>
        <Link href="/registry" className="text-sm text-primary underline mt-2">← Back to Component Registry</Link>
      </header>

      {/* OG Card & Favicon Preview */}
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        {/* OG Card Preview */}
        <div className="bg-card text-card-foreground border border-card shadow rounded-lg p-6 flex flex-col items-center justify-center min-h-[220px]">
          <div className="w-full h-[120px] bg-muted rounded mb-4 flex items-center justify-center">
            <span className="text-2xl text-muted-foreground">OG Image Preview</span>
          </div>
          <div className="w-full">
            <div className="font-semibold text-lg mb-1">blank - Component Registry & Design Starter</div>
            <div className="text-muted-foreground text-sm mb-1">A showcase and starter for the blank design system using shadcn/ui.</div>
            <div className="text-xs text-muted-foreground">No OG image set</div>
          </div>
        </div>
        {/* Favicon & App Icon Preview */}
        <div className="bg-card text-card-foreground border border-card shadow rounded-lg p-6 flex flex-col items-center justify-center min-h-[220px]">
          <div className="flex items-center gap-4 mb-4">
            <Image src="/favicon.ico" alt="Favicon" width={40} height={40} className="w-10 h-10 rounded" />
            <div className="flex flex-col gap-1">
              <span className="font-medium">Favicon</span>
              <span className="text-xs text-muted-foreground">src/app/favicon.ico</span>
            </div>
          </div>
          <div className="flex flex-col gap-1 w-full">
            <span className="font-medium">Apple Touch Icon:</span>
            <span className="text-xs text-muted-foreground">Not found</span>
            <span className="font-medium mt-2">Other App Icons:</span>
            <span className="text-xs text-muted-foreground">Not found</span>
          </div>
        </div>
      </div>

      {/* Meta/OG Info & Manifest */}
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        {/* Meta/OG Info */}
        <div className="bg-card text-card-foreground border border-card shadow rounded-lg p-6">
          <h2 className="font-semibold text-base mb-2">Meta / Open Graph</h2>
          <div className="mb-2"><span className="font-medium">Title:</span> blank - Component Registry & Design Starter</div>
          <div className="mb-2"><span className="font-medium">Description:</span> A showcase and starter for the blank design system using shadcn/ui.</div>
          <div className="mb-2"><span className="font-medium">OG Image:</span> <span className="italic text-muted-foreground">No OG image set</span></div>
          <div className="mb-2"><span className="font-medium">Twitter Meta:</span> <span className="italic text-muted-foreground">No Twitter meta set</span></div>
          <div className="text-xs text-muted-foreground mt-2">Edit in <code className="bg-muted px-1 rounded">src/app/layout.tsx</code></div>
        </div>
        {/* Manifest Info */}
        <div className="bg-card text-card-foreground border border-card shadow rounded-lg p-6">
          <h2 className="font-semibold text-base mb-2">Web App Manifest</h2>
          <div className="mb-2"><span className="font-medium">manifest.json:</span> <span className="italic text-muted-foreground">public/manifest.json</span></div>
          <div className="mb-2 text-xs text-muted-foreground">Add or update <code className="bg-muted px-1 rounded">public/manifest.json</code> for PWA support and app icons.</div>
          <pre className="bg-muted rounded p-2 text-xs overflow-x-auto mt-2">{`
{
  "name": "blank - Component Registry & Design Starter",
  "short_name": "blank",
  "description": "A showcase and starter for the blank design system using shadcn/ui.",
  "icons": [
    { "src": "/icon-192x192.png", "sizes": "192x192", "type": "image/png" },
    { "src": "/icon-512x512.png", "sizes": "512x512", "type": "image/png" }
  ],
  "theme_color": "#ffffff",
  "background_color": "#ffffff",
  "start_url": "/",
  "display": "standalone"
}
`}</pre>
        </div>
      </div>

      {/* AI Prompt Examples */}
      <div className="bg-card text-card-foreground border border-card shadow rounded-lg p-6 mb-8">
        <h2 className="font-semibold text-base mb-2">AI Prompt Examples</h2>
        <ul className="list-disc pl-5 space-y-1 text-sm">
          <li className="flex items-center"><span className="font-medium">Update title:</span> Change the site title to &apos;My New App&apos; in <code className="bg-muted px-1 rounded">src/app/layout.tsx</code><CopyButton value="src/app/layout.tsx" label="layout path" /></li>
          <li className="flex items-center"><span className="font-medium">Update favicon:</span> Replace the favicon with this image: [URL] (save as <code className="bg-muted px-1 rounded">src/app/favicon.ico</code>)<CopyButton value="src/app/favicon.ico" label="favicon path" /></li>
          <li className="flex items-center"><span className="font-medium">Add OG image:</span> Add an OG image to the metadata in <code className="bg-muted px-1 rounded">src/app/layout.tsx</code><CopyButton value="src/app/layout.tsx" label="layout path" /></li>
          <li className="flex items-center"><span className="font-medium">Add manifest:</span> Create a <code className="bg-muted px-1 rounded">manifest.json</code> in <code className="bg-muted px-1 rounded">/public</code> with your app name, icons, and theme color<CopyButton value="public/manifest.json" label="manifest path" /></li>
        </ul>
      </div>

      <footer className="mt-8 border-t pt-3 text-center text-xs text-muted-foreground">
        Built with Next.js, TypeScript, Tailwind CSS, shadcn/ui, Radix UI, and Sonner toast
      </footer>
    </div>
  );
} 