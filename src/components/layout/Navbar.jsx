import next from "next";
import { Search, ShoppingCart } from "lucide-react";

function Navbar() {
  return (
    <div className="bg-blue-600 max-w-screen flex text-white px-4 md:px-10 py-4 md:py-8 justify-between items-center">
      <div>
        <h3 className="lg:text-4xl lg:font-bold font-semibold text-2xl">LOGO</h3>
      </div>
      <div className="flex items-center gap-4 md:gap-10">
        <div className="flex">
          <div className="flex items-center py-2 px-3 gap-2 md:gap-4 border border-white">
            <Search size={20} />
            <input
              type="text"
              placeholder="Search for products..."
              className="outline-none hidden md:block w-[200px] lg:w-[400px] bg-transparent"
            />
          </div>
        </div>
        <div className="flex items-center gap-2 md:gap-3 bg-blue-950 px-3 py-2 md:px-4">
          <ShoppingCart size={20} />
          <button className="hidden md:block">Cart</button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
