import React from "react";

const Resources = () => {
  return (
    <div className="max-w-5xl mx-auto pb-20 px-10 flex flex-col gap-6">
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl text-black font-bold">Resources</h1>
        <p className="text-sm w-96">
          There are 4 main resources need in shopping prototypes
        </p>
      </div>
      <div>
        <ul className="w-[440px] flex flex-col gap-2">
          <li className="text-base font-titleFont flex justify-between text-primeColor font-normal">
            <a
              href="https://fakedata-bbcn.vercel.app/products"
              target="_blank"
              rel="noreferrer"
            >
              <span className=" font-medium text-blue-600 hover:underline cursor-pointer underline-offset-2">
                /products
              </span>
            </a>
            20 products
          </li>
          <li className="text-base font-titleFont flex justify-between text-primeColor font-normal">
            <span className=" font-medium text-blue-600 hover:underline cursor-pointer underline-offset-2">
              /cart
            </span>
            20 cart item
          </li>
          <li className="text-base font-titleFont flex justify-between text-primeColor font-normal">
            <a
              href="https://fakedata-bbcn.vercel.app/user"
              target="_blank"
              rel="noreferrer"
            >
              <span className=" font-medium text-blue-600 hover:underline cursor-pointer underline-offset-2">
                /users
              </span>
            </a>
            10 users
          </li>
          <li className="text-base font-titleFont flex justify-between text-primeColor font-normal">
            <a
              href="https://fakedata-bbcn.vercel.app/user"
              target="_blank"
              rel="noreferrer"
            >
              <span className=" font-medium text-blue-600 hover:underline cursor-pointer underline-offset-2">
                /posts
              </span>
            </a>
            100 posts
          </li>
          <li className="text-base font-titleFont flex justify-between text-primeColor font-normal">
            <a
              href="https://fakedata-bbcn.vercel.app/user"
              target="_blank"
              rel="noreferrer"
            >
              <span className=" font-medium text-blue-600 hover:underline cursor-pointer underline-offset-2">
                /comments
              </span>
            </a>
            250 comments
          </li>
          <li className="text-base font-titleFont flex justify-between text-primeColor font-normal">
            <a
              href="https://fakedata-bbcn.vercel.app/user"
              target="_blank"
              rel="noreferrer"
            >
              <span className=" font-medium text-blue-600 hover:underline cursor-pointer underline-offset-2">
                /todos
              </span>
            </a>
            150 todos
          </li>
          <li className="text-base font-titleFont flex justify-between text-primeColor font-normal">
            <a
              href="https://fakedata-bbcn.vercel.app/user"
              target="_blank"
              rel="noreferrer"
            >
              <span className=" font-medium text-blue-600 hover:underline cursor-pointer underline-offset-2">
                /photos
              </span>
            </a>
            500 photos
          </li>
        </ul>
      </div>
      <button className="w-52 px-4 h-12 rounded-md bg-primeColor text-white hover:bg-designColor hover:text-black duration-300 font-semibold font-titleFont">
        View Details on Docs
      </button>
    </div>
  );
};

export default Resources;
