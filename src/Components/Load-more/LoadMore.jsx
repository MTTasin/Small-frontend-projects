import { useState, useEffect } from "react";
import { Card, Button, Modal } from "flowbite-react";
import { FaStarHalfAlt, FaStar  } from "react-icons/fa";

export default function LoadMore() {
  const [openModal, setOpenModal] = useState(true);
  const [data, setdata] = useState([]);
  const [limit, setLimit] = useState(10);

  useEffect(() => {
    fetch(`https://dummyjson.com/products?limit=${limit}`)
      .then((res) => res.json())
      .then((data) => setdata(data.products.slice(0, limit)));
  }, [limit]);

  function handleClick() {
    setLimit((prev) => prev + 10);
    if (limit >= 100) {
      setLimit(100);
    }
  }
  console.log(limit);
  return (
    <>
      <div className="flex flex-wrap gap-5 justify-evenly">
        {data.map((item) => (
          <Card
            key={item.id}
            className="w-52"
            imgAlt={item.title}
            imgSrc={item.thumbnail}
          >
            <h5 className="text-lg font-bold tracking-tight text-gray-900 dark:text-white">
              {item.title}
            </h5>
            <div>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                Category: {item.category}
              </p>
            </div>
            <div className="font-bold text-gray-900 dark:text-white">
              <span className="inline-flex items-center text-yellow-500">
                {item.rating >= 4 ? <FaStar className="mx-1"/> : <FaStarHalfAlt className="mx-1" />}
                {item.rating}
              </span>
            </div>
            <p className="font-normal [font-size:14px] text-gray-700 dark:text-gray-400 max-h-10 overflow-hidden">
              {item.description}
            </p>
            <div>
              <p className="font-bold text-gray-900 dark:text-white">
                ${item.price}
              </p>
            </div>
          </Card>
        ))}
      </div>
      <div className="flex justify-center mt-3">
        {limit < 100 ? (
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={handleClick}
          >
            Load More
          </button>
        ) : (
          <div>
            <Button color="failure" onClick={() => setOpenModal(true)}>
              No more products
            </Button>
            <Modal show={openModal} onClose={() => setOpenModal(false)}>
              <Modal.Header>Sorry, no more products</Modal.Header>
              <Modal.Body>
                <div className="space-y-6">
                  <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                    No more products available. You can check your cart or
                    continue shopping.
                  </p>
                </div>
              </Modal.Body>
              <Modal.Footer>
                <Button onClick={() => setOpenModal(false)} className="w-full">
                  I understand
                </Button>
              </Modal.Footer>
            </Modal>
          </div>
        )}
      </div>
    </>
  );
}
