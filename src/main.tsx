import { createRoot } from 'react-dom/client'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { RouterProvider } from '@tanstack/react-router';
import { router } from './router/router.tsx';
import './index.css'
const queryclient=new QueryClient();
createRoot(document.getElementById('root')!).render(
    <QueryClientProvider client={queryclient}> 
    <RouterProvider router={router}/>
    </QueryClientProvider>
)
