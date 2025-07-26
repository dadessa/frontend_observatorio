import React from "react";

function App() {
  return (
    <div className="flex h-screen">
      <aside className="w-64 bg-gray-900 text-white p-4">
        <h2 className="text-xl font-bold mb-4">🛰️ Observatório</h2>
        <nav>
          <ul>
            <li className="mb-2"><a href="#" className="hover:text-gray-300">Nova Análise</a></li>
            <li className="mb-2"><a href="#" className="hover:text-gray-300">Histórico</a></li>
            <li className="mb-2"><a href="#" className="hover:text-gray-300">Configurações</a></li>
          </ul>
        </nav>
      </aside>
      <main className="flex-1 p-8">
        <h1 className="text-3xl font-bold mb-4">Submeter conteúdo</h1>
        <textarea className="w-full h-40 p-2 border rounded mb-4" placeholder="Cole aqui texto, link ou descrição..."></textarea>
        <div className="flex flex-col gap-2 mb-4">
          <input type="file" accept="image/*" />
          <input type="file" accept="video/*" />
        </div>
        <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          Enviar para análise
        </button>
      </main>
    </div>
  );
}

export default App;
