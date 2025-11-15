import React, { useState } from "react";
import Gambar from "/produk.png";

const Produk = () => {
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    quantity: 1,
    deliveryMethod: "pickup",
    address: "",
    notes: "",
  });
  const [errors, setErrors] = useState({});

  const product = {
    name: "Ayam Sempol",
    price: 1000,
    image: Gambar,
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Nama harus diisi";
    }

    if (formData.quantity < 1) {
      newErrors.quantity = "Jumlah minimal 1";
    }

    if (formData.deliveryMethod === "cod" && !formData.address.trim()) {
      newErrors.address = "Alamat harus diisi untuk COD";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const calculateTotal = () => {
    const basePrice = product.price * formData.quantity;
    const deliveryFee = formData.deliveryMethod === "cod" ? 5000 : 0;
    return basePrice + deliveryFee;
  };

  const formatNumber = (number) => {
    return new Intl.NumberFormat("id-ID").format(number);
  };

  const generateWhatsAppMessage = () => {
    const total = calculateTotal();
    const deliveryText =
      formData.deliveryMethod === "cod" ? "COD (Rp 5.000)" : "Ambil Sendiri";

    return `Halo, saya ingin memesan:

*Produk:* ${product.name}
*Jumlah:* ${formData.quantity} porsi
*Harga:* Rp ${formatNumber(product.price * formData.quantity)}
*Pengambilan:* ${deliveryText}
*Total:* Rp ${formatNumber(total)}

*Data Pemesan:*
Nama: ${formData.name}
${formData.deliveryMethod === "cod" ? `Alamat: ${formData.address}` : ""}
${formData.notes ? `Catatan: ${formData.notes}` : ""}

Mohon konfirmasi pesanan saya. Terima kasih!`;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      const message = generateWhatsAppMessage();
      const whatsappUrl = `https://wa.me/6281547190395${formData.name.substring(
        1
      )}?text=${encodeURIComponent(message)}`;
      window.open(whatsappUrl, "_blank");
      setShowModal(false);
      resetForm();
    }
  };

  const resetForm = () => {
    setFormData({
      name: "",
      quantity: 1,
      deliveryMethod: "pickup",
      address: "",
      notes: "",
    });
    setErrors({});
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === "quantity" ? parseInt(value) || 1 : value,
    }));

    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  return (
    <div
      id="produk"
      className="min-h-screen bg-linear-to-br from-orange-50 to-red-50 py-8 px-4"
    >
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">Menu</h1>
          <p className="text-gray-600">Pesan ayam sempol dengan mudah</p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="md:flex">
            <div className="md:w-1/2">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-64 md:h-full object-cover"
              />
            </div>

            <div className="md:w-1/2 p-8">
              <div className="mb-6">
                <h2 className="text-3xl font-bold text-gray-800 mb-2">
                  {product.name}
                </h2>
                <p className="text-gray-600 mb-4">
                  Ayam sempol homemade dengan bumbu rahasia yang lezat dan
                  bergizi. Dibuat dengan ayam pilihan dan rempah-rempah
                  berkualitas.
                </p>
                <div className="text-3xl font-bold text-orange-600 mb-6">
                  Rp {formatNumber(product.price)}
                  <span className="text-lg text-gray-500 font-normal">
                    /porsi
                  </span>
                </div>
              </div>

              <div className="space-y-4 mb-6">
                <div className="flex items-center text-green-600">
                  <svg
                    className="w-5 h-5 mr-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>100% Ayam Segar</span>
                </div>
                <div className="flex items-center text-green-600">
                  <svg
                    className="w-5 h-5 mr-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>Bumbu Rahasia</span>
                </div>
                <div className="flex items-center text-green-600">
                  <svg
                    className="w-5 h-5 mr-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>Siap Antar atau Ambil Sendiri</span>
                </div>
              </div>

              <button
                onClick={() => setShowModal(true)}
                className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-6 rounded-xl transition duration-200 transform hover:scale-105 shadow-lg"
              >
                Pesan Sekarang
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl max-w-md w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold text-gray-800">
                  Pesan {product.name}
                </h3>
                <button
                  onClick={() => setShowModal(false)}
                  className="text-gray-500 hover:text-gray-700 text-2xl"
                >
                  ×
                </button>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Nama Lengkap *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent ${
                      errors.name ? "border-red-500" : "border-gray-300"
                    }`}
                    placeholder="Masukkan nama Anda"
                  />
                  {errors.name && (
                    <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Jumlah Porsi *
                  </label>
                  <input
                    type="number"
                    name="quantity"
                    min="1"
                    value={formData.quantity}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent ${
                      errors.quantity ? "border-red-500" : "border-gray-300"
                    }`}
                  />
                  {errors.quantity && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.quantity}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Cara Pengambilan *
                  </label>
                  <div className="space-y-2">
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="deliveryMethod"
                        value="pickup"
                        checked={formData.deliveryMethod === "pickup"}
                        onChange={handleInputChange}
                        className="mr-2 text-orange-500"
                      />
                      <span>Ambil Sendiri (Gratis)</span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="deliveryMethod"
                        value="cod"
                        checked={formData.deliveryMethod === "cod"}
                        onChange={handleInputChange}
                        className="mr-2 text-orange-500"
                      />
                      <span>COD (+Rp 5.000)</span>
                    </label>
                  </div>
                </div>

                {formData.deliveryMethod === "cod" && (
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Alamat Lengkap *
                    </label>
                    <textarea
                      name="address"
                      value={formData.address}
                      onChange={handleInputChange}
                      rows="3"
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent ${
                        errors.address ? "border-red-500" : "border-gray-300"
                      }`}
                      placeholder="Masukkan alamat lengkap untuk pengantaran"
                    />
                    {errors.address && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.address}
                      </p>
                    )}
                  </div>
                )}

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Catatan (Opsional)
                  </label>
                  <textarea
                    name="notes"
                    value={formData.notes}
                    onChange={handleInputChange}
                    rows="2"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    placeholder="Tambahan catatan untuk pesanan Anda"
                  />
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>Harga ({formData.quantity} porsi):</span>
                      <span>
                        Rp {formatNumber(product.price * formData.quantity)}
                      </span>
                    </div>
                    {formData.deliveryMethod === "cod" && (
                      <div className="flex justify-between">
                        <span>Biaya COD:</span>
                        <span>Rp 5.000</span>
                      </div>
                    )}
                    <div className="flex justify-between font-bold text-lg border-t pt-2">
                      <span>Total:</span>
                      <span className="text-orange-600">
                        Rp {formatNumber(calculateTotal())}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex space-x-3">
                  <button
                    type="button"
                    onClick={() => setShowModal(false)}
                    className="flex-1 px-4 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition duration-200"
                  >
                    Batal
                  </button>
                  <button
                    type="submit"
                    className="flex-1 px-4 py-3 bg-green-500 hover:bg-green-600 text-white rounded-lg transition duration-200"
                  >
                    Kirim ke WhatsApp
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Produk;
