import { Link, Outlet } from '@tanstack/react-router';

const App = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow p-4 flex gap-6 justify-center text-blue-600 font-semibold">
        <Link to="/" className="hover:underline">Orders</Link>
        <Link to="/add" className="hover:underline">Add Order</Link>
        <Link to="/menu" className="hover:underline">Menu</Link>
      </nav>
      <div className="max-w-5xl mx-auto p-6">
        <Outlet />
      </div>
    </div>
  );
};

export default App;
