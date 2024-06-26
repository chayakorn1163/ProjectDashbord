import React from "react";
import Navbar from "./component/Navbar";
import OrderManagement from "./component/OrderManagement";

function App() {
  return (
    <div className="flex">
      <Navbar />
      <div className="flex-1">
        <OrderManagement />
      </div>
    </div>
  );
}

export default App;
