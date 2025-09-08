import React from "react";
import './App.css';

import SnippetList from "./components/SnippetList";

function App() {
  return (
    <div className="bg-[#121212] min-h-screen text-white font-sans">
  <h1 className="text-3xl font-bold p-6 text-center text-blue-400">CodeBank</h1>
  <SnippetList />
</div>

  );
}

export default App;
