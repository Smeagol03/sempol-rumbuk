import React from "react";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer id="kontak" className="bg-gray-900 text-gray-200">
      <div className="max-w-6xl mx-auto px-4 py-10 grid gap-8 md:grid-cols-3">
        <div>
          <div className="text-2xl font-bold text-white">Sempol</div>
          <p className="mt-3 text-gray-400">
            Ayam Sempol lezat, siap dipesan setiap hari. Pilih COD atau ambil
            sendiri sesuai kebutuhan Anda.
          </p>
          <p className="mt-2 text-sm text-gray-500">COD + Rp 5.000</p>
        </div>

        <div>
          <div className="text-white font-semibold">Menu</div>
          <ul className="mt-3 space-y-2 text-gray-300">
            <li>
              <a href="#beranda" className="hover:text-white">
                Beranda
              </a>
            </li>
            <li>
              <a href="#produk" className="hover:text-white">
                Produk
              </a>
            </li>
            <li>
              <a href="#kontak" className="hover:text-white">
                Kontak
              </a>
            </li>
          </ul>
        </div>

        <div>
          <div className="text-white font-semibold">Informasi</div>
          <ul className="mt-3 space-y-2 text-gray-300">
            <li>Setiap hari: 17.00–22.00</li>
            <li>Metode: COD atau Ambil Sendiri</li>
            <li>Lokasi: Rumbuk Pancuran</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-800">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <a
            href="https://wa.me/6281547190395?text=Halo%2C%20saya%20ingin%20buat%20website%20seperti%20website%20sempol%20ayam"
            target="_blank"
            className="text-sm text-gray-400 hover:text-white"
          >
            © {year} Sempol. Made by Alpian.
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
