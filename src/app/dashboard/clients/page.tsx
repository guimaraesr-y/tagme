'use client';

import { useEffect, useState } from 'react';

interface Client {
  id: string;
  name: string;
  email: string;
}

const ClientList: React.FC = () => {
  const [clients, setClients] = useState<Client[]>([]);

  useEffect(() => {
    setClients([
      { id: '1', name: 'João', email: 'Ttj4Y@example.com' },
      { id: '2', name: 'Maria', email: '2W9fW@example.com' },
      { id: '3', name: 'Pedro', email: 'LJ9R0@example.com' },
      { id: '4', name: 'Ana', email: '2W9fW@example.com' },
      { id: '5', name: 'Lucas', email: '2W9fW@example.com' },
      { id: '6', name: 'Carla', email: '2W9fW@example.com' },
      { id: '7', name: 'Bruna', email: '2W9fW@example.com' },
      { id: '8', name: 'Gustavo', email: '2W9fW@example.com' },
      { id: '9', name: 'Larissa', email: '2W9fW@example.com' },
      { id: '10', name: 'Vitoria', email: '2W9fW@example.com' },
    ]);
  }, []);

  return (
    <div className="bg-white rounded shadow p-4">
      <h2 className="text-xl font-semibold mb-4">Clientes Cadastrados</h2>
      <table className="w-full text-left">
        <thead>
          <tr>
            <th className="p-2">Nome</th>
            <th className="p-2">Email</th>
          </tr>
        </thead>
        <tbody>
          {clients.map((client) => (
            <tr key={client.id}>
              <td className="p-2">{client.name}</td>
              <td className="p-2">{client.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ClientList;

