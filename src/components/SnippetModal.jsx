import React from "react";

const SnippetModal = ({ snippet, onClose }) => {
  if (!snippet) return null;

  return (
   <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
  <div className="bg-[#1E1E1E] p-6 rounded-2xl w-3/4 max-w-2xl shadow-lg">
    <h2 className="text-white text-2xl mb-2">{snippet.title}</h2>
    <p className="text-blue-400 mb-4">Language: {snippet.language}</p>
    <pre className="bg-black text-green-300 p-4 rounded-lg overflow-x-auto max-h-[400px]">
      {snippet.code}
    </pre>
    <div className="mt-4 flex justify-end gap-3">
      <button
        onClick={() => {
          navigator.clipboard.writeText(snippet.code);
          alert("Copied!");
        }}
        className="bg-blue-500 px-4 py-2 rounded-lg hover:bg-blue-600 transition"
      >
        Copy
      </button>
      <button
        onClick={onClose}
        className="bg-red-500 px-4 py-2 rounded-lg hover:bg-red-600 transition"
      >
        Close
      </button>
    </div>
  </div>
</div>

  );
};

export default SnippetModal;
