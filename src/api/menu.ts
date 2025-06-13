
import axios from 'axios'

import type { MenuItem } from '../Type/Type'

export const getMenuItems = async (): Promise<MenuItem[]> => {
  const res = await axios.get('http://localhost:3001/menu')
  return res.data
}

export const updateMenuItem = async (item: MenuItem): Promise<MenuItem> => {
  const res = await axios.put(`http://localhost:3001/menu/${item.id}`, item)
  return res.data
}
