import { Navbar, Sidebar } from "@/components";
import React from "react";

const chat = () => {
  return (
    <>
      <Navbar />
      <div className="flex items-start">
        <Sidebar />
      </div>
    </>
  );
};

export default chat;
