import React, { useState } from "react";
import { snippets } from "../data/snippets";
import SnippetModal from "./SnippetModal";

const SnippetList = () => {
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState(null);

  const filtered = snippets.filter(s =>
    s.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-6">
      <input
  type="text"
  placeholder="Search by title..."
  value={search}
  onChange={(e) => setSearch(e.target.value)}
  className="p-3 w-full rounded-lg bg-[#2A2A2A] text-white mb-6 outline-none focus:ring-2 focus:ring-blue-400"
/>

{filtered.map(snippet => (
  <div
    key={snippet.id}
    className="bg-[#1C1C1C] p-4 mb-4 rounded-lg cursor-pointer hover:bg-[#2E2E2E] transition"
    onClick={() => setSelected(snippet)}
  >
    <h3 className="text-lg font-bold text-white">{snippet.title}</h3>
    <p className="text-blue-400">{snippet.language}</p>
  </div>
))}

      <SnippetModal snippet={selected} onClose={() => setSelected(null)} />
    </div>
  );
};

export default SnippetList;
