import Navbar from '../components/Navbar';

export default function Home() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      <main className="flex justify-center items-center py-20">
        <h1 className="text-4xl font-bold text-center text-blue-900">
          Bienvenido a Mi Página de Compras
        </h1>
      </main>
    </div>
  );
}
