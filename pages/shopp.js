export default function Shopp() {
  return (
    <div className="relative h-screen w-screen overflow-hidden">
      <aside className="fixed left-0 top-0 h-full w-20 bg-[#111] flex flex-col justify-between py-6 z-50">
        <div className="flex flex-col items-center justify-center gap-6 text-white text-lg h-full">
          <img src="/faceb.png" className="w-12 h-12 object-cover object-center rounded-full" />
          <img src="/ign.png" className="w-12 h-12 object-cover object-center rounded-full" />
          <img src="/ytb.png" className="w-12 h-12 object-cover object-center rounded-full" />
        </div>
        <div className="text-gray-300 text-s rotate-270 mb-16 tracking-wide whitespace-nowrap font-sans">
          © Best Delivery 2025
        </div>
      </aside>

      <header className="fixed top-0 right-0 w-full h-20 flex items-center text-white z-50 relative">
        <div className="absolute inset-0 bg-black/40 -z-10"></div>
        <div className="flex items-center gap-4">
          <button className="text-white text-3xl bg-[#ff2e4d] p-6">☰</button>
          <div className="text-white font-extrabold text-4xl leading-tight text-center">
            Best Delivery
          </div>
        </div>

        <div className="ml-auto flex items-center gap-6 h-full">
         <div className="flex items-center gap-4 h-full">
          <img src="/pon.png" className="h-12"/>
           <h1>+976 8806 4934</h1>
         <div className="flex items-center gap-4">
         <img src="/mil.png" className="h-6"/>
          <span>Besthurgelt@gmail.com</span>
         </div>
         </div>

  <div className="bg-[#ff2e4d] h-full px-9 font-semibold flex items-center">
    <img src="/ging.png" className="h-7 pr-3 fill-white"/>
    <button className="h-full flex items-center">
      Нэвтрэх
    </button>
  </div>
</div>


      </header>

      <img src="/introduction.webp" className="absolute inset-0 w-full h-full object-cover object-center grayscale" />

      <div className="absolute left-40 top-1/3 text-white z-50">
        <h1 className="text-6xl font-extrabold leading-tight">
          Best <br /> Delivery
        </h1>
        <p className="mt-6 text-xl max-w-90">
          Та доорх товч дээр дарж хүргэлтээ шалгах боломжтой.
        </p>
        <button className="mt-8 bg-[#ff2e4d] px-6 py-3 rounded-xl text-lg font-semibold flex items-center gap-2">
          Хүргэлт шалгах →
        </button>
      </div>
      <div className="absolute bottom-6 right-6">
        <div className="border border-white/60 text-white p-4 text-3xl font-semibold">
          1
        </div>
      </div>
    </div>
  );
}
