import axios from "axios"
import type { Order } from "../Type/Type"
 export const fetchOrder=async()=>{
    const res =await axios.get<Order[]>("http://localhost:3001/orders")
    return res.data
};
export const addOrder=async(order:Order)=>{
    const res = await axios.post("http://localhost:3001/orders",order)
    return res.data

}
