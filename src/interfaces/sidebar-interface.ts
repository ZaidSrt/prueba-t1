

interface SectionSidebar {
  id: number;
  route: string;
  label: string;
}

interface SidebarComponent {
  sidebarOpen: boolean;
  pathname: string;
  sectionSidebar: SectionSidebar[]
}