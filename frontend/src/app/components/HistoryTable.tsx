import React from 'react';

interface HistoryRecord {
  id: number;
  filename: string;
  prediction: string;
  confidence: number;
  latency_ms: number;
  ram_mb: number;
  created_at: string;
}

interface HistoryTableProps {
  history: HistoryRecord[];
}

export function HistoryTable({ history }: HistoryTableProps) {
  if (!history || history.length === 0) return null;

  return (
    <div className="mt-12 rounded-2xl p-8 backdrop-blur-xl animate-[fadeIn_0.5s_ease-in]"
         style={{
           background: 'rgba(31, 41, 55, 0.3)',
           border: '1px solid rgba(164, 216, 49, 0.2)',
           boxShadow: 'inset 0 0 20px rgba(164, 216, 49, 0.05)'
         }}>
      <h2 className="text-xl mb-6 text-[#A4D831] font-mono tracking-wide flex items-center gap-2">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        RECENT CLASSIFICATIONS
      </h2>
      <div className="overflow-x-auto">
        <table className="w-full text-left font-mono text-sm">
          <thead>
            <tr className="border-b border-[rgba(164,216,49,0.2)] text-gray-400">
              <th className="pb-3 font-normal">TIMESTAMP</th>
              <th className="pb-3 font-normal">FILENAME</th>
              <th className="pb-3 font-normal">PREDICTION</th>
              <th className="pb-3 font-normal">CONFIDENCE</th>
              <th className="pb-3 font-normal">LATENCY</th>
              <th className="pb-3 font-normal">MEMORY</th>
            </tr>
          </thead>
          <tbody>
            {history.map((record) => (
              <tr key={record.id} className="border-b border-[rgba(164,216,49,0.05)] hover:bg-[rgba(164,216,49,0.05)] transition-colors">
                <td className="py-4 text-gray-500">{new Date(record.created_at).toLocaleString()}</td>
                <td className="py-4 text-gray-300">{record.filename}</td>
                <td className="py-4 text-[#A4D831]">{record.prediction}</td>
                <td className="py-4 text-gray-300">{(record.confidence * 100).toFixed(1)}%</td>
                <td className="py-4 text-gray-300">{record.latency_ms}ms</td>
                <td className="py-4 text-gray-300">{record.ram_mb.toFixed(1)}MB</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
