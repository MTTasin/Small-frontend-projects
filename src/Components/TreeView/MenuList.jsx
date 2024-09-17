import Menuitem from "./Menuitem";

export default function MenuList({ list = [] }) {
  return (
    
    <ul className="ml-5">
        {list && list.length ?
        list.map((item, index) => <Menuitem key={index} item={item} />) : null}    
    </ul>
    
  )
}
