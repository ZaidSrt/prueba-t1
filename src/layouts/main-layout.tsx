import { useState } from 'react';
import { usePathname } from "next/navigation";

import SidebarComponent from '../components/shared/sidebar-component';
import HeaderComponent from '@/components/shared/header-component';


const sectionSidebar = [
  { id: 1, route: "/button", label: "Button" },
  { id: 2, route: "/input", label: "Input" },
  { id: 3, route: "/modal", label: "Modal" },
  { id: 4, route: "/card", label: "Card" },
];

export default function MainLayout({ children }: MainLayout) {

  const pathname = usePathname();

  const [sidebarOpen, setSidebarOpen] = useState(true);
  

  return (
    <div className="flex bg-gray-100">
      {/* Sidebar */}
      <SidebarComponent sectionSidebar={sectionSidebar} sidebarOpen={sidebarOpen} pathname={pathname} />

      <section className="flex flex-col w-full">
        {/* Header */}
        <HeaderComponent setSidebarOpen={setSidebarOpen} />

        {/* Main */}
        <main className="p-4 overflow-y-auto">
          <div className="bg-white rounded-md p-4">
            {children}
          </div>
        </main>
      </section>
    </div>
  );
}