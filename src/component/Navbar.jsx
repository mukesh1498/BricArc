import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="p-4 bg-white shadow flex justify-between">
      <h1 className="text-xl font-bold">NexArch</h1>
      <div className="space-x-4">
        <Link to="/" className="hover:text-gray-500">
          Home
        </Link>
        <Link to="/services" className="hover:text-gray-500">
          Services
        </Link>
        <Link to="/contact" className="hover:text-gray-500">
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
