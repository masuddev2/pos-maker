import products from "./enum/products";

function App() {
  return (
    <section className="bg-gradient-to-t from-indigo-400/50 to-blue-600/70">
      <div className="w-4/5 mx-auto">
        <div className="h-screen w-full flex items-center ">
          <div className="grid grid-cols-12 bg-white shadow-md overflow-hidden rounded-xl w-full">
            <div className="col-span-6 bg-rose-100/5 border-r px-3">
              <h1 className="py-3 px-5 border-b font-bold text-xl mb-2 text-black/70">
                Point of Sale
              </h1>
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="text-black/70 border-2">Name</th>
                    <th className="text-black/70 border-2">Price</th>
                    <th className="text-black/70 border-2">Qty</th>
                    <th className="text-black/70 border-2">Total</th>
                  </tr>
                </thead>
                <tbody>
                  {[{}, {}, {}].length > 0 ? (
                    [{}, {}, {}].map((item, idx) => (
                      <tr className="text-center hover:bg-gray-100">
                        <td className="text-start border p-2">product Name</td>
                        <td className="border p-2">100</td>
                        <td className="border p-2">2</td>
                        <td className="border p-2">200</td>
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
            </div>
            <div className="col-span-6 px-3">
              <h1 className="py-3 px-5 border-b font-bold text-xl text-black/70">
                Product List
              </h1>

              <div className="grid grid-cols-4 gap-2 p-3 h-[80vh] overflow-auto">
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
                        <span className="mt-1 mb-2 block">$ {item.price}</span>
                        <button className="block px-3 py-1 w-full rounded-md bg-gradient-to-br hover:from-rose-500 from-indigo-800 hover:to-pink-600 to-blue-800">
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
