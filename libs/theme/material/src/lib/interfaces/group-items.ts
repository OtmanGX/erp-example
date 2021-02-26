export interface GroupItems {
  isToolbar?: boolean;
  icons?: Array<any>;
  cols: number;
  "cols-xl"?: number;
  "cols-lg"?: number;
  "cols-md"?: number;
  "cols-sm"?: number;
  label: string;
  data: Item;
  view?: any;
}

export interface Item {
  code?: string;
  label: string;
  value?: any;
  type?: string;
}
