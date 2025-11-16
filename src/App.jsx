import Navbar from "./komponen/Navbar.jsx";

const App = () => {
  return (
    <div id="beranda">
      <Navbar />
      <div>
        <div
          className="hero min-h-screen"
          style={{
            backgroundImage: "url(/bg.jpg)",
          }}
        >
          <div className="hero-overlay"></div>
          <div className="hero-content text-neutral-content text-center">
            <div className="max-w-md bg-amber-400/60 p-8 rounded-xl">
              <h1 className="mb-5 text-5xl font-bold">
                Sempol <span className="text-red-600">Ayam</span>
              </h1>
              <p className="mb-5 text-lg text-white">
                Coba sempol ayam homemade dengan rasa gurih, tekstur lembut, dan
                aroma yang bikin nagih. Fresh setiap hari!
              </p>
              <a href="#produk" className="btn btn-primary">
                Pesan Sekarang
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
