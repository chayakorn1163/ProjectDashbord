import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { icon: "dashboard", label: "Dashboard", href: "#" },
    { icon: "shopping_cart", label: "Order Management", href: "#" },
    { icon: "people", label: "Customers", href: "#" },
    { icon: "add_box", label: "Add Products", href: "#" },
    { icon: "list", label: "Product List", href: "#" },
  ];

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <section>
      {/* Mobile Toggle Button */}
      <div className="md:hidden p-4">
        <button
          onClick={toggleSidebar}
          className="text-blue-500 focus:outline-none"
        >
          <span className="material-icons">menu</span>
        </button>
      </div>

      {/* Sidebar */}
      <div
        className={`h-screen w-64 bg-gray-100 shadow-md fixed md:relative z-10 transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 transition-transform duration-300 ease-in-out`}
      >
        <div className="p-4 text-xl font-bold text-blue-500">Puy Puy</div>
        <ul className="space-y-2">
          {navItems.map((item, index) => (
            <li key={index} className="p-2 hover:bg-gray-200">
              <a href={item.href} className="flex items-center space-x-2">
                <span className="material-icons">{item.icon}</span>
                <span>{item.label}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Navbar;
