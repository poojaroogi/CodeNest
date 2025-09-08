export const snippets = [
  {
    id: 1,
    title: "remove duplicates",
    language: "JavaScript",
    code: `const arr = [1,2,3,2,4,1,5];
let unique = [];

for (let i=0;i<arr.length;i++){
  let dup = false;
  for (let j=0;j<unique.length;j++){
    if (arr[i] === unique[j]) { dup = true; break; }
  }
  if (!dup) unique.push(arr[i]);
}

console.log(unique); // [1,2,3,4,5]`
  },
  {
    id: 2,
    title: "sort array without inbuilt",
    language: "JavaScript",
    code: `const arr = [5,2,9,1,5,6];

for (let i = 0; i < arr.length - 1; i++) {
  for (let j = 0; j < arr.length - i - 1; j++) {
    if (arr[j] > arr[j + 1]) {
      let temp = arr[j];
      arr[j] = arr[j + 1];
      arr[j + 1] = temp;
    }
  }
}

console.log(arr); // [1,2,5,5,6,9]`
  },
  {
    id: 3,
    title: "find second largest",
    language: "JavaScript",
    code: `const arr = [10, 5, 8, 20, 15];
let first = -Infinity;
let second = -Infinity;

for (let num of arr) {
  if (num > first) {
    second = first;
    first = num;
  } else if (num > second && num < first) {
    second = num;
  }
}

console.log(second); // 15`
  },
  {
  id: 4,
  title: "React counter component",
  language: "React",
  code: `import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>Counter: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  );
}

export default Counter;`
},
{
  id: 5,
  title: "React pagination",
  language: "React",
  code: `import React, { useEffect, useState } from "react";

function App() {
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const postsPerPage = 10;

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);

  const totalPages = Math.ceil(posts.length / postsPerPage);
  const startIndex = (page - 1) * postsPerPage;
  const currentPosts = posts.slice(startIndex, startIndex + postsPerPage);
  const pageNumbers = [...Array(totalPages)].map((_, i) => i + 1);

  return (
    <div>
      <h2>Posts</h2>
      {currentPosts.map((post) => (
        <div key={post.id}>{post.title}</div>
      ))}

      {/* pagination start */}
      <div>
        <button onClick={() => setPage(page - 1)} disabled={page === 1}>
          Prev
        </button>

        {pageNumbers.map((num) => (
          <button
            key={num}
            onClick={() => setPage(num)}
            disabled={page === num}
          >
            {num}
          </button>
        ))}

        <button
          onClick={() => setPage(page + 1)}
          disabled={page === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default App;`
},
{
  id: 6,
  title: "React infinite scrolling",
  language: "React",
  code: `import React, { useEffect, useState } from "react";

function App() {
  const [posts, setPosts] = useState([]);
  const [visible, setVisible] = useState(10);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + window.scrollY >=
        document.body.offsetHeight - 2
      ) {
        setVisible((prev) => prev + 10);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      <h2>Posts</h2>
      {posts.slice(0, visible).map((post) => (
        <div key={post.id}>{post.title}</div>
      ))}
    </div>
  );
}

export default App;`
},
{
  id: 7,
  title: "Array filter polyfill",
  language: "JavaScript",
  code: `Array.prototype.myFilter = function (callback) {
  let result = [];
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
      result.push(this[i]);
    }
  }
  return result;
};`
},
{
  id: 8,
  title: "Array map polyfill",
  language: "JavaScript",
  code: `Array.prototype.myMap = function (callback) {
  let result = [];
  for (let i = 0; i < this.length; i++) {
    result.push(callback(this[i], i, this));
  }
  return result;
};`
},
{
  id: 9,
  title: "Array reduce polyfill",
  language: "JavaScript",
  code: `Array.prototype.myReduce = function (callback, initialValue) {
  let acc = initialValue !== undefined ? initialValue : this[0];
  let start = initialValue !== undefined ? 0 : 1;

  for (let i = start; i < this.length; i++) {
    acc = callback(acc, this[i], i, this);
  }
  return acc;
};`
},
{
  id: 10,
  title: "CRUD operation React",
  language: "React",
  code: `import React, { useState } from "react";

function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState(["kuldeep", "sandeep", "pradeep"]);
  const [editIndex, setEditIndex] = useState(null);

  const handleAdd = () => {
    if (!todo.trim()) return;
    setTodos((prev) => [...prev, todo]);
    setTodo("");
  };

  const handleDelete = (index) => {
    setTodos(todos.filter((v, i) => i !== index));
  };

  const handleUpdate = () => {
    setTodos((prev) => prev.map((val, i) => (i === editIndex ? todo : val)));
    setTodo("");
    setEditIndex(null);
  };

  const handleEdit = (index) => {
    setTodo(todos[index]);
    setEditIndex(index);
  };

  const handleChange = (e) => {
    const value = e.target.value;
    setTodo(value);

    if (value.trim() === "") {
      setEditIndex(null);
    }
  };

  return (
    <div>
      <h3>Todo list</h3>

      <label htmlFor="todo">Enter you todo : </label>
      <input
        type="text"
        id="todo"
        placeholder="Enter your text"
        onChange={handleChange}
        value={todo}
      />
      <button onClick={editIndex !== null ? handleUpdate : handleAdd}>
        {editIndex !== null ? "UPDATE" : "ADD"}
      </button>

      {editIndex !== null && <button onClick={() => setTodo("")}>Clear</button>}

      <ul>
        {todos.map((val, index) => (
          <li key={index}>
            {val} <button onClick={() => handleEdit(index)}>Edit</button>{" "}
            <button onClick={() => handleDelete(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;`
},
{
  id: 11,
  title: "Reverse a string",
  language: "JavaScript",
  code: `const str = "Pooja";
let reversed = "";

for (let i = str.length - 1; i >= 0; i--) {
  reversed += str[i];
}

console.log(reversed); // "ajooP"`
},








];
