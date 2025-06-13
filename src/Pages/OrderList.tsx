
import Ordertable from "../Table/Ordertable";
import { useQuery } from "@tanstack/react-query";
import type { Order } from "../Type/Type";
import { fetchOrder } from "../api/order";

const OrderList = () => {

  const { data = [] } = useQuery<Order[]>({
    queryKey: ["order"],
    queryFn: fetchOrder,
  })
  return (
    <div>

     
      <Ordertable data={data} />
    </div>
  );
};

export default OrderList;
