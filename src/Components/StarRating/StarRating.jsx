import { useState } from "react";
import { FaStar } from "react-icons/fa";
import { IoReturnUpBack } from "react-icons/io5";

export default function StarRating() {
  const [rating, setRating] = useState(0);

  const [hover, setHover] = useState(0);

  const stars = Array(5).fill(0);

  const handleClick = (getCurrenntIndex) => {
    setRating(getCurrenntIndex);
  };

  const handleMouseOver = (getCurrenntIndex) => {
    setHover(getCurrenntIndex);
  };

  const handleMouseLeave = () => {
    setHover(rating);
  };

 return(
  <div className="flex justify-center">
   <div className="flex">
    {stars.map((_, index) => {
     return (
      <FaStar
       key={index}
       size={24}
       onClick={() => handleClick(index + 1)}
       onMouseOver={() => handleMouseOver(index + 1)}
       onMouseLeave={handleMouseLeave}
       color={(hover || rating) > index ? "#ffc107" : "#e4e5e9"}
      />
     );
    })}
   </div>
  </div>
 )


}
