import React, { useState } from "react";
import axios from "axios";

const ExampleCode = () => {
  const [fakeData, setFakeData] = useState({});
  const [showFakeData, setShowFakeData] = useState(false);
  const [loadingState, setLoadingState] = useState(false);

  const handleFakeData = () => {
    setLoadingState(true);
    async function fetchData() {
      let data = await axios.get("https://fakedata-bbcn.vercel.app/products");
      setFakeData(data.data[0]);
    }
    fetchData();
    setTimeout(() => {
      setLoadingState(false);
    }, 3000);
    setShowFakeData(true);
  };

  return (
    <div className="max-w-5xl mx-auto py-20 px-10 ">
      <div className="flex flex-col gap-2">
        <h2 className="text-xl font-titleFont text-center tracking-wider font-semibold">
          Get tired of Lorem ipsum data?!
          <br /> Didn't you find any free e-commerce API?!
        </h2>
        <p className="text-sm text-center text-gray-500 tracking-wide">
          fakeStoreApi is a free online REST API that you can use whenever you
          need Pseudo-real data for your e-commerce or shopping website without
          running any server-side code. It's awesome for teaching purposes,
          sample codes, tests, etc.
        </p>
      </div>
      <div className="w-full py-20 flex flex-col gap-4">
        <h1 className="text-3xl text-black font-bold">Example Code</h1>
        <div className="flex flex-col gap-6 bg-gray-200 py-6">
          <div className="w-full px-6 text-base font-titleFont flex flex-col justify-center">
            <p className="mb-2 underline underline-offset-4">
              get item with axios :
            </p>
            <p>await axios.get('https://fakestoreapi.com/products/1')</p>
          </div>
          <div className="w-full px-6  text-base font-titleFont flex flex-col justify-center">
            <p className="mb-2 underline underline-offset-4">
              fetching directly:
            </p>
            <p>fetch('https://fakestoreapi.com/products/1')</p>
            <p className="ml-10">.then(res=&gt;res.json())</p>
            <p className="ml-10">.then(json=&gt;console.log(json))</p>
          </div>
        </div>
        <button
          onClick={handleFakeData}
          className="w-20 h-10 bg-primeColor text-white font-semibold font-titleFont rounded-md hover:bg-designColor hover:text-black duration-300"
        >
          Try it
        </button>
        <div>
          {loadingState ? (
            <div className="w-full h-auto bg-black text-white p-10 flex justify-center items-center">
              <div className="w-24 h-24 rounded-full bg-designColor text-black text-center flex justify-center items-center relative">
                <p className="text-sm font-titleFont font-bold tracking-wide">
                  Loading...
                </p>
                <span className="w-24 h-24 absolute top-0 left-0 bg-designColor animate-ping rounded-full"></span>
              </div>
            </div>
          ) : (
            <>
              {showFakeData && (
                <>
                  {fakeData && (
                    <div className="w-full h-auto bg-black text-white p-10">
                      <p className="font-titleFont text-base flex flex-col">
                        <span className="-ml-4"> &#123;</span>
                        <span>"_id": {fakeData._id},</span>
                        <span> "title" : &quot;{fakeData.title}&quot;,</span>
                        <span>
                          "description" : &quot;{fakeData.description}&quot;,
                        </span>
                        <span>
                          {" "}
                          "oldPrice" : &quot;{fakeData.oldPrice}&quot;,
                        </span>
                        <span> "price" : &quot;{fakeData.price}&quot;,</span>
                        <span>"isNew" : &quot;{fakeData.isNew}&quot;,</span>
                        <span>
                          "category" : &quot;{fakeData.category}&quot;,
                        </span>
                        <span>
                          "ratings" : &quot;{fakeData.rating},<br />
                        </span>
                        <span>"image" : &quot;{fakeData.image}&quot;,</span>
                        <span className="-ml-4">&#125;</span>
                      </p>
                    </div>
                  )}
                </>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ExampleCode;
