import { useEffect, useState } from 'react';

export default function Home() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch('/api/hello')
      .then((res) => res.json())
      .then((data) => setMessage(data.message))
      .catch((error) => console.error('Erro na API:', error));
  }, []);

  return (
    <div>
      <h1>{message || 'Carregando...'}</h1>
    </div>
  );
}
