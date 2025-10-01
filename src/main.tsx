import React from "react";
import ReactDOM from "react-dom/client";
import "./style.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Hello World</h1>
        <p className="text-lg text-gray-600">
          Projeto MVVM React + Vite + TypeScript + TailwindCSS
        </p>
      </div>
    </div>
  </React.StrictMode>,
);
