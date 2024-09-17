import { useState, useEffect } from "react";
import menus from "./Data";
import MenuList from "./MenuList";
import { Sidebar } from "flowbite-react";

export default function TreeView({ menus = [] }) {
  return (
    <div className="h-screen">
      <Sidebar className="bg-blue-500" aria-label="Sidebar with logo branding example">
        <Sidebar.Logo href="#" img="/vite.svg" imgAlt="Flowbite logo">
          Flowbite
        </Sidebar.Logo>
        <Sidebar.Items>
          <Sidebar.ItemGroup>
            <MenuList list={menus} />
          </Sidebar.ItemGroup>
        </Sidebar.Items>
      </Sidebar>
    </div>
  );
}
