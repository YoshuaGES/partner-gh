import React from "react";
import Client from "./Komponen/Client";
import Partner from "./Komponen/Partner";
import Vendor from "./Komponen/Vendor";

const App = () => {
  return (
    <div className="p-2 md:p-10 h-screen">
      <Client />
      <Partner />
      <Vendor />
    </div>
  );
};

export default App;
