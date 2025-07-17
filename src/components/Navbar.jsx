import { Search, ShoppingCart } from "lucide-react";

function Navbar() {
  return (
    <div className="bg-blue-600 max-w-screen flex items-center px-10 py-8 justify-between">
      <div>
        <h3 className="lg:text-4xl text-xl text-white font-bold ">LOGO</h3>
      </div>
      <div className="flex gap-10">
        <div className=" relative hidden lg:block">
          <Search className="absolute top-1.5 lg:top-2.5 left-1.5 text-white " />
          <input type="text"  placeholder="Search for Products..." className="border-2 border-blue-400 rounded-md w-[300px] xl:w-[400px] pl-10 p-2 outline-none text-white" />
        </div>
        <div className=" relative lg:hidden mr-4">
          <Search  className="absolute top-1.5 lg:top-2.5 left-1.5 text-white " />
        </div>
        <button className="flex bg-blue-950 outline-none justify-center items-center md:px-10 px-4 py-2 font-bold rounded-md text-white gap-2 cursor-pointer"><ShoppingCart /><span>Cart</span></button>
      </div>
    </div>
  )
}

export default Navbar