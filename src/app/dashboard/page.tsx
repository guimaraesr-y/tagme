'use client';

import { useCache } from '@/hooks/useCache';
import { BusinessInterface } from '@/modules/business/interfaces';
import React from 'react';

const Dashboard = () => {
  const { getCache } = useCache();

  const business = getCache('business') as BusinessInterface;
  console.log(business);

  return (
    <div className="p-8 bg-gray-100 rounded-md pb-12 border">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Bem-vindo ao TagMe Dashboard</h1>
      
      {/* Cards de Resumo */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <div className="bg-white p-6 rounded-lg shadow-md flex flex-col justify-between">
          <h2 className="text-xl font-semibold text-gray-700">Total de Clientes</h2>
          <p className="mt-2 text-3xl font-bold text-blue-600">{ business?.clientsCount || 0 }</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md flex flex-col justify-between">
          <h2 className="text-xl font-semibold text-gray-700">Notificações Enviadas</h2>
          <p className="mt-2 text-3xl font-bold text-green-500">{ business?.notificationsCount || 0 }</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md flex flex-col justify-between">
          <h2 className="text-xl font-semibold text-gray-700">QR Codes Gerados</h2>
          <p className="mt-2 text-3xl font-bold text-purple-500">{ business?.qrcodeScanCount || 0 }</p>
        </div>
      </div>

      {/* Últimas Notificações */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-6">
        <h2 className="text-2xl font-semibold text-gray-800">Últimas Notificações</h2>
        <ul className="mt-4">
          <li className="border-b border-gray-200 py-3">
            <span className="text-gray-600">15 de Outubro, 2024 - </span>
            <span className="text-blue-600 font-semibold">Promoção especial de final de ano!</span>
          </li>
          <li className="border-b border-gray-200 py-3">
            <span className="text-gray-600">10 de Outubro, 2024 - </span>
            <span className="text-blue-600 font-semibold">Lançamento de novos produtos!</span>
          </li>
          <li className="py-3">
            <span className="text-gray-600">5 de Outubro, 2024 - </span>
            <span className="text-blue-600 font-semibold">Aproveite o frete grátis!</span>
          </li>
        </ul>
      </div>

      {/* Status do Sistema */}
      <div className="bg-white p-6 rounded-lg shadow-md flex flex-col justify-between">
        <h2 className="text-2xl font-semibold text-gray-800">Status do Sistema</h2>
        <p className="mt-2 text-gray-600">Todos os serviços estão funcionando normalmente.</p>
      </div>
    </div>
  );
};

export default Dashboard;
