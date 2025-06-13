// // src/components/EditableMenu.tsx
// import React, { useState } from 'react'
// import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
// import { getMenuItems, updateMenuItem } from '../api/menu'
// import type { MenuItem } from '../Type/Type'

// const EditableMenu = () => {
//   const queryClient = useQueryClient()

//   const { data = [], isLoading } = useQuery({
//     queryKey: ['menu'],
//     queryFn: getMenuItems,
//   })

//   const mutation = useMutation({
//     mutationFn: updateMenuItem,
//     onSuccess: () => {
//       queryClient.invalidateQueries({ queryKey: ['menu'] })
//     },
//   })

//   const [editId, setEditId] = useState<number | null>(null)
//   const [editName, setEditName] = useState('')

//   const handleEdit = (item: MenuItem) => {
//     setEditId(item.id)
//     setEditName(item.name)
//   }

//   const handleSave = () => {
//     if (editId !== null) {
//       mutation.mutate({ id: editId, name: editName })
//       setEditId(null)
//       setEditName('')
//     }
//   }

//   if (isLoading) return <p>Loading...</p>

//   return (
//     <ul>
//       {data.map((item) => (
//         <li key={item.id}>
//           {editId === item.id ? (
//             <>
//               <input
//                 value={editName}
//                 onChange={(e) => setEditName(e.target.value)}
//               />
//               <button onClick={handleSave}>Save</button>
//             </>
//           ) : (
//             <>
//               {item.name}{' '}
//               <button onClick={() => handleEdit(item)}>Edit</button>
//             </>
//           )}
//         </li>
//       ))}
//     </ul>
//   )
// }

// export default EditableMenu


import React, { useState } from 'react'
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { getMenuItems, updateMenuItem } from '../api/menu'
import type { MenuItem } from '../Type/Type'

const EditableMenu = () => {
  const queryClient = useQueryClient()

  const { data = [], isLoading } = useQuery({
    queryKey: ['menu'],
    queryFn: getMenuItems,
  })

  const mutation = useMutation({
    mutationFn: updateMenuItem,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['menu'] })
    },
  })

  const [editId, setEditId] = useState<number | null>(null)
  const [editName, setEditName] = useState('')

  const handleEdit = (item: MenuItem) => {
    setEditId(item.id)
    setEditName(item.name)
  }

  const handleSave = () => {
    if (editId !== null) {
      mutation.mutate({ id: editId, name: editName })
      setEditId(null)
      setEditName('')
    }
  }

  if (isLoading)
    return (
      <p className="text-center text-gray-500 text-lg font-medium">Loading menu...</p>
    )

  return (
    <div className="max-w-lg mx-auto mt-10 bg-white shadow-lg rounded-lg p-6">
      <h2 className="text-2xl font-bold text-center text-blue-600 mb-6">
        Editable Menu
      </h2>
      <ul className="space-y-4">
        {data.map((item) => (
          <li
            key={item.id}
            className="flex items-center justify-between border border-gray-200 rounded-md p-3 hover:shadow transition"
          >
            {editId === item.id ? (
              <div className="flex items-center w-full gap-3">
                <input
                  value={editName}
                  onChange={(e) => setEditName(e.target.value)}
                  className="flex-1 border border-gray-300 rounded-md px-3 py-2 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                <button
                  onClick={handleSave}
                  className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md font-medium transition"
                >
                  Save
                </button>
              </div>
            ) : (
              <div className="flex items-center justify-between w-full">
                <span className="text-gray-800 font-medium">{item.name}</span>
                <button
                  onClick={() => handleEdit(item)}
                  className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md font-medium transition cursor-pointer"
                >
                  Edit
                </button>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default EditableMenu
