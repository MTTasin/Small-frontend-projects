import MenuList from "./MenuList";
import { useState } from "react";


export default function Menuitem({ item }) {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };
  return (
  
        <li>
          <div className="flex">
            <div>
              <p onClick={handleClick} className="cursor-pointer">
                {item.label}
              </p>
            </div>
            <div>
              {item.children && item.children.length ? (
                  <button onClick={handleClick}>{open ? "-" : "+"}</button>
                ) : null}
            </div>
          </div>

          {item && item.children && item.children.length && open ? (
              <MenuList list={item.children} />
            ) : null}
        </li>

            
            
     

  );
}
