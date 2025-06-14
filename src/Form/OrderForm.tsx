// import React, { useState } from 'react';
// import type { Order } from '../Type/Type';
// import { useMutation, useQueryClient } from '@tanstack/react-query';
// import { addOrder } from '../api/order';
// import { useNavigate } from '@tanstack/react-router';

// const OrderForm = () => {
//   const [tableNo, setTableNo] = useState("");
//   const [items, setItems] = useState<string[]>([]);
//   const [itemInput, setItemInput] = useState("");
//   const [status, setStatus] = useState<Order["status"]>("pending");

//   const queryClient = useQueryClient();
//   const navigate = useNavigate();

//   const mutation = useMutation({
//     mutationFn: addOrder,
//     onSuccess: () => {
//       queryClient.invalidateQueries({ queryKey: ['order'] });
//       navigate({ to: '/' });
//     }
//   });

//   const handleAddItem = () => {
//     const trimmed = itemInput.trim();
//     if (trimmed) {
//       setItems((prev) => [...prev, trimmed]);
//       setItemInput("");
//     }
//   };

  

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     const total = items.length * 100;
//     mutation.mutate({
//       tableNo,
//       items,
//       total,
//       status,
//     });
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input
//         placeholder="Table No"
//         value={tableNo}
//         onChange={(e) => setTableNo(e.target.value)}
//         required
//       />

//       <div>
//         <input
//           placeholder="Add Item"
//           value={itemInput}
//           onChange={(e) => setItemInput(e.target.value)}
//           onKeyDown={(e) => {
//             if (e.key === 'Enter') {
//               e.preventDefault();
//               handleAddItem();
//             }
//           }}
//         />
//         <button type="button" onClick={handleAddItem}>Add</button>
//       </div>

//       <div>
//         <strong>Items:</strong>
//         {items.length === 0 && <p>No items added.</p>}
//         {items.map((item, index) => (
//           <div key={index}>• {item}</div>
//         ))}
//       </div>

//       <select
//         value={status}
//         onChange={(e) => setStatus(e.target.value as Order["status"])}
//       >
//         <option value="pending">Pending</option>
//         <option value="completed">Completed</option>
//       </select>

//       <button type="submit">Add Order</button>
//     </form>
//   );
// };

// export default OrderForm;


import React, { useState } from 'react';
import type { Order } from '../Type/Type';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { addOrder } from '../api/order';
import { useNavigate } from '@tanstack/react-router';

const OrderForm = () => {
  const [tableNo, setTableNo] = useState('');
  const [items, setItems] = useState<string[]>([]);
  const [itemInput, setItemInput] = useState('');
  const [status, setStatus] = useState<Order['status']>('pending')
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const mutation = useMutation({
    mutationFn: addOrder,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['order'] });
      navigate({ to: '/' });
    },
  });

  const handleAddItem = () => {
    const trimmed = itemInput.trim();
    if (trimmed) {
      setItems((prev) => [...prev, trimmed]);
      setItemInput('');
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const total = items.length * 100;
    mutation.mutate({
      tableNo,
      items,
      total,
      status,
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto p-6 bg-white shadow-lg rounded-lg space-y-5 my-25"
    >
      <h2 className="text-2xl font-bold text-center text-blue-600">Add New Order</h2>

      <input
        placeholder="Table No"
        value={tableNo}
        onChange={(e) => setTableNo(e.target.value)}
        required
        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
      />

      <div className="flex gap-2">
        <input
          placeholder="Add Item"
          value={itemInput}
          onChange={(e) => setItemInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              e.preventDefault();
              handleAddItem();
            }
          }}
          className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <button
          type="button"
          onClick={handleAddItem}
          className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition"
        >
          Add
        </button>
      </div>

      <div className="bg-gray-50 p-3 rounded-md">
        <strong className="text-gray-700">Items:</strong>
        {items.length === 0 ? (
          <p className="text-sm text-gray-400">No items added.</p>
        ) : (
          <ul className="list-disc pl-5 mt-1 text-gray-800">
            {items.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        )}
      </div>

      <select
        value={status}
        onChange={(e) => setStatus(e.target.value as Order['status'])}
        className="w-full px-4 py-2 border border-gray-300 rounded-md bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
      >
        <option value="pending">Pending</option>
        <option value="completed">Completed</option>
      </select>

      <button
        type="submit"
        className="w-full bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition font-medium"
      >
        Add Order
      </button>
    </form>
  );
};

export default OrderForm;
