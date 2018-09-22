export interface MenuItem {
  title: string;
  url: string;
  parentId: number;
  icon?: string;
  children?: MenuItem[];
}
