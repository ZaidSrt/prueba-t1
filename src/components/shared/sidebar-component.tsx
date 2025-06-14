
import Link from "next/link";


export default function SidebarComponent({ sidebarOpen = true, sectionSidebar = [], pathname = "" }: SidebarComponent) {

  return (
    <nav className={`transition-all duration-300 bg-white h-screen ${sidebarOpen ? "w-64 opacity-100" : "w-0 opacity-0 overflow-hidden"}`}>
      <div className="flex flex-col gap-8 p-4">
        <Link href="/" className="text-center text-xl">PRUEBA <span className="font-bold text-blue-600">T1</span></Link>

        <ul className="flex flex-col gap-2">
          {sectionSidebar.map((item: SectionSidebar) => (
            <Link key={item.id} href={item.route} className={`block px-4 py-2 rounded-md hover:bg-primary hover:text-white transition-colors ${pathname == item.route && 'bg-primary text-white'}`}>
              {item.label}
            </Link>
          ))}
        </ul>
      </div>
    </nav>
  );
}