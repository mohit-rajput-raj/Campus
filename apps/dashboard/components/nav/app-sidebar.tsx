"use client"

import * as React from "react"
import {
  IconCamera,
  IconChartBar,
  IconDashboard,
  IconDatabase,
  IconFileAi,
  IconFileDescription,
  IconFileWord,
  IconFolder,
  IconHelp,
  IconInnerShadowTop,
  IconListDetails,
  IconReport,
  IconSearch,
  IconSettings,
  IconUsers,
} from "@tabler/icons-react"

import { NavDocuments } from "@/components/nav/nav-documents"
import { NavMain } from "@/components/nav/nav-main"
import { NavSecondary } from "@/components/nav/nav-secondary"
import { CurrUsers, NavUser } from "@/components/nav/nav-user"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@repo/ui/components/ui/sidebar"
import { useRouteAuthContextHook } from "@/context/routeContext"
import { toast } from "sonner"

const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  navMain: [
    {
      title: "Dashboard",
      url: "/editor",
      icon: IconDashboard,
    },
    {
      title: "Lifecycle",
      url: "/lifecycle",
      icon: IconListDetails,
    },
    {
      title: "Analytics",
      url: "/analytics",
      icon: IconChartBar,
    },
    {
      title: "Files",
      url: "/files",
      icon: IconFolder,
    },
    {
      title: "Team",
      url: "/team",
      icon: IconUsers,
    },
  ],
  navClouds: [
    {
      title: "Capture",
      icon: IconCamera,
      isActive: true,
      url: "/capture",
      items: [
        {
          title: "Active Proposals",
          url: "/capture/active-proposals",
        },
        {
          title: "Archived",
          url: "/capture/archived",
        },
      ],
    },
    {
      title: "Proposal",
      icon: IconFileDescription,
      url: "/proposal",
      items: [
        {
          title: "Active Proposals",
          url: "/proposal/active-proposals",
        },
        {
          title: "Archived",
          url: "/proposal/archived",
        },
      ],
    },
    {
      title: "Prompts",
      icon: IconFileAi,
      url: "/prompts",
      items: [
        {
          title: "Active Proposals",
          url: "/prompts/active-proposals",
        },
        {
          title: "Archived",
          url: "/prompts/archived",
        },
      ],
    },
  ],
  navSecondary: [
    {
      title: "Settings",
      url: "/settings",
      icon: IconSettings,
    },
    {
      title: "Get Help",
      url: "/help",
      icon: IconHelp,
    },
    {
      title: "Search",
      url: "/search",
      icon: IconSearch,
    },
    // {
    //   title: "Docs",
    //   url: "/3000",
    //   icon: DockIcon,
    // },
  ],
  documents: [
    {
      name: "Data Library",
      url: "/data-library",
      icon: IconDatabase,
    },
    {
      name: "Reports",
      url: "/reports",
      icon: IconReport,
    },
    {
      name: "Word Assistant",
      url: "/word-assistant",
      icon: IconFileWord,
    },
  ],
  projects: [
    {
      name: "Projects",
      url: "/projects",
      icon: IconDatabase,
    },
    {
      name: "People",
      url: "/people",
      icon: IconReport,
    },
    {
      name: "Billing",
      url: "/billing",
      icon: IconFileWord,
    },
    {
      name:"Integration",
      url:"/integration",
      icon: IconFileWord,
      
    },
    {
      name:"Settings",
      url:"/settings",
      icon: IconFileWord,
      
    }
  ],
}
type AppSidebarProps = React.ComponentProps<typeof Sidebar> & {
  val: string;
  
};
import { clerkuser } from "@/provider/clerkprovider"
import { NavProjects } from "./nav-projects"
export const  AppSidebar=({ val, ...props }: AppSidebarProps) =>{
  console.log(val);
  const {dash_id , main_id} = useRouteAuthContextHook();
  // const {userId } =await clerkuser();
  // React.useEffect(()=>{
  //   try {
  //     setmainid(userId || "error");
      
  //   } catch (error) {
  //     toast.message("clerk id is not loaded")
  //   }
  // },[userId])
  
  return (
    <Sidebar collapsible="offcanvas" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              className="data-[slot=sidebar-menu-button]:!p-1.5"
            >
              <a href="#">
                <IconInnerShadowTop className="!size-5" />
                <span className="text-base font-semibold">SGSITS.</span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
     {val==="dashboard" && (
       <SidebarContent>
        <NavMain items={data.navMain} dashid={dash_id}/>
        <NavDocuments items={data.documents} val={val} />
        <NavSecondary items={data.navSecondary} className="mt-auto" />
      </SidebarContent>
     )}
     {val==="projects" && ( <SidebarContent>
        {/* <NavMain items={data.navMain} /> */}
        <NavProjects items={data.projects} main_id={main_id} val={val} />
      </SidebarContent>)}
      <SidebarFooter className="flex gap-3 justify-between ">
        <NavUser user={data.user} />
        <CurrUsers />
      </SidebarFooter>
    </Sidebar>
  )
}
