import { useState } from 'react';

function App() {
  const [conteudo, setConteudo] = useState('');
  const [resposta, setResposta] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch('https://observatorio-backend-ca06.onrender.com/api/submissoes', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ conteudo })
    });
    const data = await res.json();
    setResposta(JSON.stringify(data, null, 2));
  };

  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial' }}>
      <h1>📡 Observatório da Desinformação</h1>
      <form onSubmit={handleSubmit}>
        <textarea
          rows="5"
          cols="60"
          placeholder="Cole aqui texto, link ou descrição do conteúdo..."
          value={conteudo}
          onChange={(e) => setConteudo(e.target.value)}
        />
        <br /><br />
        <button type="submit">Enviar para análise</button>
      </form>
      <br />
      {resposta && (
        <div>
          <h3>Resposta:</h3>
          <pre>{resposta}</pre>
        </div>
      )}
    </div>
  );
}

export default App;
