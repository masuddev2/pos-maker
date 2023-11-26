function App() {
  return (
    <section className="bg-gradient-to-t from-indigo-400/50 to-blue-600/70">
      <div className="w-4/5 mx-auto">
        <div className="h-screen w-full flex items-center ">
          <div className="grid grid-cols-12 bg-white shadow-md overflow-hidden rounded-xl w-full">
            <div className="col-span-6 bg-rose-100"></div>
            <div className="col-span-6">
              <h1 className="py-3 px-5 border-b font-bold text-xl text-black/70">
                Product List
              </h1>

              <div className="grid grid-cols-4 gap-2 p-3 h-[80vh] overflow-auto">
                {[{}, {}, {}, {}].map((item, idx) => (
                  <div
                    key={idx}
                    className="shadow border h-40 w-full rounded-md"
                  >
                    <img src="/icecreem.png" className="h-40  w-full object-cover" alt="" />
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
