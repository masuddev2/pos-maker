import { useState } from "react";
import products from "./enum/products";
import { AiOutlineDelete } from "react-icons/ai";

function App() {
  const [data, setData] = useState([]);

  const handleAddProduct = (value) => {
    if (!value) return;

    const inCart = data.find((item) => item.id === value.id);

    if (inCart) {
      const newData = [...data];
      const arr = newData.map((item) =>
        item.id === value.id
          ? { ...item, qty: item.qty + 1, total: item.price * (item.qty + 1) }
          : item
      );
      setData(arr);
    } else {
      const newData = {
        id: value.id,
        name: value.name,
        price: value.price,
        qty: 1,
        total: value.price * 1,
      };
      setData([...data, newData]);
    }
  };

  return (
    <section className="bg-gradient-to-t from-indigo-400/50 to-blue-600/70">
      <div className="w-4/5 mx-auto">
        <div className="h-screen w-full flex items-center ">
          <div className="grid grid-cols-12 bg-white shadow-md overflow-hidden rounded-xl w-full">
            <div className="lg:col-span-5 col-span-12 lg:order-2 order-1 bg-rose-100/5 border-l px-3">
              <h1 className="py-3 px-5 border-b font-bold text-xl mb-2 text-black/70">
                Point of Sale
              </h1>
              <div className="flex flex-col justify-between  lg:h-[70vh]">
                <table className="w-full">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="text-black/70 border-2">Name</th>
                      <th className="text-black/70 border-2">Price</th>
                      <th className="text-black/70 border-2">Qty</th>
                      <th className="text-black/70 border-2">Total</th>
                      <th className="text-black/70 border-2"></th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.length > 0 ? (
                      data.map((item, idx) => (
                        <tr key={idx} className="text-center hover:bg-gray-100">
                          <td className="text-start border p-2">{item.name}</td>
                          <td className="border p-2">{item.price}</td>
                          <td className="border p-2">{item.qty}</td>
                          <td className="border p-2">{item.total}</td>
                          <td className="border p-2 w-[10px]">
                            <AiOutlineDelete />
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr className="border">
                        <td></td>
                        <td></td>
                        <td colSpan={2} className="mx-auto py-10">
                          <img
                            className="w-28 h-28 object-cover"
                            src="/empty-folder.png"
                            alt=""
                          />
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
                <div className="my-3 flex justify-between items-center p-5 border rounded-md shadow">
                  <div>Tax</div>
                  <div>Discount</div>
                  <div>Grand Total</div>
                </div>
              </div>
              <div>
                <button className="text-white font-bold bg-gradient-to-r from-cyan-500 w-full block to-blue-500 px-4 py-3 rounded-sm">
                  Submit
                </button>
              </div>
            </div>
            <div className="lg:col-span-7 col-span-12 lg:order-1 order-2 px-3">
              <h1 className="py-3 px-5 border-b font-bold text-xl text-black/70">
                Product List
              </h1>

              <div className="grid grid-cols-4 gap-2 p-3 lg:h-[80vh] overflow-auto">
                {products.map((item, idx) => (
                  <div
                    key={idx}
                    className="relative group/item shadow border h-40 w-full rounded-md overflow-hidden"
                  >
                    <img
                      src={item.img}
                      className="h-40  w-full object-cover"
                      alt=""
                    />
                    <div className="absolute invisible flex justify-center items-center group-hover/item:visible transition-all ease-in-out duration-200 top-0 left-0 h-40 w-full bg-black/70">
                      <div className="text-white">
                        <h1 className="font-bold">{item.name}</h1>
                        <span className="mt-1 mb-2 block">
                          <span className="font-bold">$</span> {item.price}
                        </span>
                        <button
                          onClick={() => handleAddProduct(item)}
                          className="block px-3 py-1 w-full rounded-md bg-gradient-to-br hover:from-rose-500 from-indigo-800 hover:to-pink-600 to-blue-800"
                        >
                          Add Cart
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default App;
