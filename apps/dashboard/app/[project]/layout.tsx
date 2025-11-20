
import { AppSidebar } from '@/components/nav/app-sidebar'
import { SiteHeader } from '@/components/nav/site-header'
import { SidebarInset, SidebarProvider } from '@repo/ui/components/ui/sidebar'
import React from 'react'

interface LayoutProps {
  children: React.ReactNode;
  params: Promise<{ project: string }>
}

export default async  function  Layout({ children, params }: LayoutProps) {
  const { project   } =await params;
  console.log(project);
  


  return (
    <SidebarProvider
      style={{
        "--sidebar-width": "calc(var(--spacing) * 52)",
        "--header-height": "calc(var(--spacing) * 12)",
      } as React.CSSProperties}
    >
      <AppSidebar variant="inset" val={project} />
      <SidebarInset>
        <SiteHeader />
        <div className="flex flex-1 flex-col">
          <div className="@container/main flex flex-1 flex-col gap-2">
            <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6 h-screen">
              {children}
            </div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
