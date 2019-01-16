export interface SidenavItem {
  title: string;
  url: string;
  parentId: number;
  icon?: string;
  children?: SidenavItem[];
}
