"use client";
import React, { useState } from "react";

interface CheckoutFormProps {
  params: Record<string, string | number>;
  price: number;
}

const CheckoutForm: React.FC<CheckoutFormProps> = ({ params, price }) => {
  const [form, setForm] = useState({
    nombre: "",
    apellido: "",
    telefono: "",
    correo: "",
  });
  const [enviado, setEnviado] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const order = {
      nombre: form.nombre,
      apellido: form.apellido,
      telefono: form.telefono,
      correo: form.correo,
      parametros: params,
      precio: price,
    };
    const customerEmail = form.correo;

    await fetch("/.netlify/functions/SendOrder", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ order, customerEmail }),
    });

    setEnviado(true);
  };

  if (enviado) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen text-[#002496]">
        <h2 className="text-2xl font-bold mb-4">¡Gracias por tu pedido!</h2>
        <p>Nos pondremos en contacto contigo pronto.</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white text-[#002496] px-4">
      <h2 className="text-2xl font-bold mb-6">Finaliza tu pedido</h2>
      <form
        onSubmit={handleSubmit}
        className="bg-white rounded-xl shadow-md p-8 w-full max-w-md flex flex-col gap-4"
      >
        <input
          type="text"
          name="nombre"
          placeholder="Nombre"
          value={form.nombre}
          onChange={handleChange}
          required
          className="border border-gray-300 rounded-lg px-4 py-2"
        />
        <input
          type="text"
          name="apellido"
          placeholder="Apellido"
          value={form.apellido}
          onChange={handleChange}
          required
          className="border border-gray-300 rounded-lg px-4 py-2"
        />
        <input
          type="tel"
          name="telefono"
          placeholder="Teléfono"
          value={form.telefono}
          onChange={handleChange}
          required
          className="border border-gray-300 rounded-lg px-4 py-2"
        />
        <input
          type="email"
          name="correo"
          placeholder="Correo electrónico"
          value={form.correo}
          onChange={handleChange}
          required
          className="border border-gray-300 rounded-lg px-4 py-2"
        />

        <div className="text-lg font-semibold mt-4 mb-2">
          Precio: ${price}
        </div>

        <button
          type="submit"
          className="bg-[#002496] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#001a70] transition"
        >
          Enviar pedido
        </button>
      </form>
    </div>
  );
};

export default CheckoutForm;