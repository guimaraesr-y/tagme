'use client';

import { useState } from "react";
import { QRCodeSVG } from "qrcode.react";

const QrCodeGenerator: React.FC = () => {
  const [clientInfo, setClientInfo] = useState("");

  return (
    <div className="bg-white rounded shadow p-4">
      <h2 className="text-xl font-semibold mb-4">Gerar QR Code</h2>
      <input
        type="text"
        placeholder="Dados do Cliente"
        value={clientInfo}
        onChange={(e) => setClientInfo(e.target.value)}
        className="border rounded p-2 w-full mb-4"
      />
      <QRCodeSVG value={clientInfo} />
    </div>
  );
};

export default QrCodeGenerator;
