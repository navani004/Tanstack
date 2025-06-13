export type Order={
    id?:number;
    tableNo?:string;
    items:string[];
    total:number;
    status:"pending"|"completed";
}

export type MenuItem = {
  id: number
  name: string
}