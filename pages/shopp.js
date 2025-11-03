const PRODUCTS = [
    { 
        id: "p1", 
        name: "Leather Backpack", 
        price: 129, 
        rating: 4.6, 
        image: "https://m.media-amazon.com/images/I/81IKZRQQ+dL._AC_SX569_.jpg" 
    },
    { 
        id: "p2", 
        name: "Everyday Sneakers", 
        price: 89, 
        rating: 4.4, 
        image: "https://m.media-amazon.com/images/I/81PPVRm-JFL._AC_SY500_.jpg" 
    },
    { 
        id: "p3", 
        name: "Modern Desk Lamp", 
        price: 49, 
        rating: 4.7, 
        image: "https://m.media-amazon.com/images/I/71Xa0fzUiGL._AC_SX679_.jpg" 
    },
    { 
        id: "p4", 
        name: "Ceramic Planter", 
        price: 34, 
        rating: 4.5, 
        image: "https://m.media-amazon.com/images/I/817xESfDw9S._AC_SX679_.jpg" 
    },
    { 
        id: "p5", 
        name: "Sunglasses", 
        price: 69, 
        rating: 4.3, 
        image: "https://m.media-amazon.com/images/I/51GYi1kNaBL._AC_SX569_.jpg" 
    },
    { 
        id: "p6", 
        name: "Wool Scarf", 
        price: 39, 
        rating: 4.2, 
        image: "https://m.media-amazon.com/images/I/71wXEGSTt9L._AC_SX466_.jpg" 
    },
];

function WigglyTopHat() {
    return (
        <header className="w-full bg-white border-b">
            <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
                <div className="flex items-center gap-6">
                    <a href="#" className="text-2xl font-bold tracking-tight">
                        Store
                    </a>
                    <nav className="hidden md:flex gap-4 text-sm text-gray-600">
                        <a href="#" className="text-black">Men</a>
                        <a href="#" className="text-black">Women</a>
                        <a href="#" className="text-black">Home</a>
                        <a href="#" className="text-black">Sale</a>
                    </nav>
                </div>
                <div className="flex items-center gap-4">
                    <div className="hidden sm:block">
                        <input 
                            className="w-64 px-3 py-2 border rounded-md text-sm focus:outline-none" 
                            placeholder="Search products" 
                        />
                    </div>
                    <button className="text-sm px-3 py-2 border rounded-md">
                        Sign in
                    </button>
                    <button className="relative px-3 py-2 bg-gray-100 rounded-md text-sm">
                        Cart 
                        <span className="ml-2 inline-block w-5 h-5 text-xs text-center rounded-full bg-black text-white">
                            3
                        </span>
                    </button>
                </div>
            </div>
        </header>
    );
}

function BigDramaticBanner() {
    return (
        <section className="bg-gradient-to-r from-slate-50 to-white">
            <div className="max-w-7xl mx-auto px-6 py-16 grid gap-8 grid-cols-1 md:grid-cols-2 items-center">
                <div>
                    <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                        Everyday essentials, made better
                    </h1>
                    <p className="mt-4 text-gray-600 max-w-lg">
                        Simple, functional, and beautifully crafted items for modern living. 
                        Free shipping on orders over $75.
                    </p>
                    <div className="mt-6 flex gap-3">
                        <a 
                            href="#products" 
                            className="inline-block px-5 py-3 bg-black text-white rounded-md text-sm font-medium"
                        >
                            Shop now
                        </a>
                        <a 
                            href="#" 
                            className="inline-block px-5 py-3 border rounded-md text-sm"
                        >
                            Explore
                        </a>
                    </div>
                    <div className="mt-8 text-sm text-gray-500">
                        Secure checkout. 30-day returns.
                    </div>
                </div>
                <div className="order-first md:order-last">
                    <div className="relative rounded-xl overflow-hidden shadow-lg">
                        <img 
                            src="https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=1400&auto=format&fit=crop" 
                            alt="Hero product" 
                            className="w-full h-64 md:h-80 object-cover" 
                        />
                        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/40 to-transparent text-white">
                            <div className="text-sm">Featured</div>
                            <div className="text-lg font-semibold">The Everyday Carry</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

function ShinyBox({ product }) {
    return (
        <div className="bg-white border rounded-lg overflow-hidden shadow-sm shadow-md transition">
            <div className="aspect-[4/3] bg-gray-100">
                <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-cover" 
                />
            </div>
            <div className="p-4">
                <h3 className="text-sm font-medium">{product.name}</h3>
                <div className="mt-2 flex items-center justify-between">
                    <div className="text-lg font-semibold">${product.price}</div>
                    <div className="text-sm text-gray-500">{product.rating}★</div>
                </div>
                <div className="mt-3 flex gap-2">
                    <button className="flex-1 py-2 text-sm border rounded-md">View</button>
                    <button className="py-2 px-3 text-sm bg-black text-white rounded-md">Add</button>
                </div>
            </div>
        </div>
    );
}

function GridOfGlory({ products }) {
    return (
        <section id="products" className="max-w-7xl mx-auto px-6 py-12">
            <div className="flex items-baseline justify-between">
                <h2 className="text-2xl font-bold">Popular Items</h2>
                <a href="#" className="text-sm text-gray-600">View all</a>
            </div>
            <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
                {products.map((p) => (
                    <ShinyBox key={p.id} product={p} />
                ))}
            </div>
        </section>
    );
}

function TheFinalBit() {
    return (
        <footer className="bg-white border-t mt-12">
            <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                    <div className="text-lg font-semibold">Store</div>
                    <p className="mt-2 text-sm text-gray-600 max-w-sm">
                        Modern design, practical function. Everyday goods that last.
                    </p>
                </div>
                <div className="flex gap-8">
                    <div>
                        <div className="font-medium">Company</div>
                        <ul className="mt-2 text-sm text-gray-600 space-y-1">
                            <li><a href="#">About</a></li>
                            <li><a href="#">Careers</a></li>
                            <li><a href="#">Press</a></li>
                        </ul>
                    </div>
                    <div>
                        <div className="font-medium">Help</div>
                        <ul className="mt-2 text-sm text-gray-600 space-y-1">
                            <li><a href="#">Shipping</a></li>
                            <li><a href="#">Returns</a></li>
                            <li><a href="#">Payment</a></li>
                        </ul>
                    </div>
                </div>
                <div>
                    <div className="font-medium">Subscribe</div>
                    <p className="text-sm text-gray-600 mt-2">
                        Get updates on new arrivals and offers.
                    </p>
                    <div className="mt-3 flex gap-2">
                        <input 
                            placeholder="Email" 
                            className="px-3 py-2 border rounded-md text-sm w-full" 
                        />
                        <button className="px-4 py-2 bg-black text-white rounded-md text-sm">
                            OK
                        </button>
                    </div>
                </div>
            </div>
            <div className="border-t">
                <div className="max-w-7xl mx-auto px-6 py-4 text-sm text-gray-500">
                    © {new Date().getFullYear()} Store. All rights reserved.
                </div>
            </div>
        </footer>
    );
}

export default function MegaUltraPageOfDestiny() {
    return (
        <div className="min-h-screen bg-white text-gray-900">
            <WigglyTopHat />
            <main>
                <BigDramaticBanner />
                <GridOfGlory products={PRODUCTS} />
            </main>
            <TheFinalBit />
        </div>
    );
}
