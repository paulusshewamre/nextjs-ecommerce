import { AppSidebar } from "@/components/app-sidebar"
import { SiteHeader } from "@/components/site-header"
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar"

export default function DashboardPage() {
  return (
    <SidebarProvider
      style={
        {
          "--sidebar-width": "280px",
          "--header-height": "64px",
        } as React.CSSProperties
      }
    >
      <AppSidebar />

      <SidebarInset>
        <SiteHeader />
        
        <main className="flex flex-1 flex-col p-6">
          <h1 className="text-3xl font-bold">Dashboard</h1>

          <p className="text-muted-foreground mt-2">
            Welcome back. Manage your account and orders here.
          </p>
        </main>
      </SidebarInset>
    </SidebarProvider>
  )
}