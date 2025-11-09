export default function ApocalypseStore() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <header className="sticky top-0 z-40 w-full bg-white border-b">
        <div className="mx-auto grid grid-cols-3 h-16 items-center px-6">
          <div className="flex items-center gap-8">
            <a className="text-2xl font-semibold">store</a>
            <nav className="hidden md:flex gap-6 text-sm text-gray-700">
              <a className="hover:text-black cursor-pointer">All</a>
              <a className="hover:text-black cursor-pointer">Men</a>
              <a className="hover:text-black cursor-pointer">Women</a>
              <a className="hover:text-black cursor-pointer">Accessories</a>
            </nav>
          </div>
          <div className="flex border-2 rounded-xl">
            <input type="text" placeholder="Search for Products..." className="w-72 px-3 py-2 text-sm" />
          </div>
          <div className="flex justify-end">
            <button className="relative flex items-center justify-center px-3 py-3 bg-gray-100 border-2 rounded-md text-sm hover:bg-gray-200">
             <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-1.35 2.7a1 1 0 00.9 1.5h12.1a1 1 0 00.9-1.5L17 13M7 13V6h10v7M5 21h2m10 0h2M7 21a2 2 0 100-4 2 2 0 000 4zm10 0a2 2 0 100-4 2 2 0 000 4z" />
             </svg>
            </button>

          </div>
        </div>
      </header>

      <main>
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            <div className="lg:col-span-2">
              <div className="group relative border rounded-lg overflow-hidden bg-white hover:shadow-md transition-all duration-200">
                <div className="w-full h-[640px] overflow-hidden">
                  <img src="https://m.media-amazon.com/images/I/81IKZRQQ+dL._AC_SX569_.jpg" alt="Leather Backpack" className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300" />
                </div>
                <div className="p-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-sm font-medium text-gray-800">Leather Backpack</h3>
                    <span className="text-sm font-medium text-gray-800">$129</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="group relative border rounded-lg overflow-hidden bg-white hover:shadow-md transition-all duration-200">
                <div className="aspect-square overflow-hidden">
                  <img src="https://m.media-amazon.com/images/I/81PPVRm-JFL._AC_SY500_.jpg" alt="Everyday Sneakers" className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300" />
                </div>
                <div className="p-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-sm font-medium text-gray-800">Everyday Sneakers</h3>
                    <span className="text-sm font-medium text-gray-800">$89</span>
                  </div>
                </div>
              </div>

              <div className="group relative border rounded-lg overflow-hidden bg-white hover:shadow-md transition-all duration-200">
                <div className="aspect-square overflow-hidden">
                  <img src="https://m.media-amazon.com/images/I/71Xa0fzUiGL._AC_SX679_.jpg" alt="Modern Desk Lamp" className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300" />
                </div>
                <div className="p-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-sm font-medium text-gray-800">Modern Desk Lamp</h3>
                    <span className="text-sm font-medium text-gray-800">$49</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-3 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="group relative border rounded-lg overflow-hidden bg-white hover:shadow-md transition-all duration-200">
              <div className="aspect-square overflow-hidden">
                <img src="https://m.media-amazon.com/images/I/817xESfDw9S._AC_SX679_.jpg" alt="Ceramic Planter" className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300" />
              </div>
              <div className="p-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-medium text-gray-800">Ceramic Planter</h3>
                  <span className="text-sm font-medium text-gray-800">$34</span>
                </div>
              </div>
            </div>

            <div className="group relative border rounded-lg overflow-hidden bg-white hover:shadow-md transition-all duration-200">
              <div className="aspect-square overflow-hidden">
                <img src="https://m.media-amazon.com/images/I/51GYi1kNaBL._AC_SX569_.jpg" alt="Sunglasses" className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300" />
              </div>
              <div className="p-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-medium text-gray-800">Sunglasses</h3>
                  <span className="text-sm font-medium text-gray-800">$69</span>
                </div>
              </div>
            </div>

            <div className="group relative border rounded-lg overflow-hidden bg-white hover:shadow-md transition-all duration-200">
              <div className="aspect-square overflow-hidden">
                <img src="https://m.media-amazon.com/images/I/71wXEGSTt9L._AC_SX466_.jpg" alt="Wool Scarf" className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300" />
              </div>
              <div className="p-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-medium text-gray-800">Wool Scarf</h3>
                  <span className="text-sm font-medium text-gray-800">$39</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="border-t mt-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 py-8 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} store. All rights reserved.
        </div>
      </footer>
    </div>
  );
}