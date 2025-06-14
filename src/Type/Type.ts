export type Order={
    id?:number;
    tableNo:string;
    items:string[];
    status:"pending"|"completed";
}

export type MenuItem = {
  id: number
  name: string
}