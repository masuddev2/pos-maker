import React, { useEffect, useState } from "react";

const BlogPost = () => {
  const [data, setData] = useState();
  const [filter, setFilter] = useState({});

  useEffect(() => {
    (async () => {
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/posts?q=${filter?.Search || ''}`
      ).then((response) => response.json().then((json) => json));
      setData(res);
    })();
  }, [filter]);

  const handleChange = (value, type) => {
    setFilter({ [type]: value });
  };

  return (
    <section className="bg-gradient-to-t from-indigo-600 to-blue-500">
      <div className="container mx-auto min-h-screen">
        <div className="grid grid-cols-12 gap-4 py-5">
          <div className="col-span-12 sticky top-0">
            <div className=" border shadow-md rounded bg-white">
              <div className="flex h-20 w-full justify-between items-center px-10">
                {/* <div>
                  <input
                    className="p-2 border focus:outline-none"
                    placeholder="Limit"
                    onChange={({ target }) =>
                      handleChange(target.value, "Limit")
                    }
                    value={filter?.Limit}
                    type="number"
                    name="Limit"
                    id="Limit"
                  />
                </div> */}
                <div>Total : {(data || []).length}</div>
                <div>
                  <input
                    className="p-2 border focus:outline-none"
                    placeholder="Global Search..."
                    value={filter?.Search}
                    type="text"
                    onChange={({ target }) =>
                      handleChange(target.value, "Search")
                    }
                    name="Search"
                    id="Search"
                  />
                </div>
              </div>
            </div>
          </div>

          {(data || []).length > 0 &&
            (data || []).map((item, idx) => (
              <div key={idx} className="col-span-3">
                <div className="w-full h-80 border shadow-md rounded bg-white">
                  <h1 className="p-3 font-bold border-b text-lg">
                    {item.userId}
                    {item.title}
                  </h1>
                  <p className="p-3 text-lg">{item.body}</p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default BlogPost;
