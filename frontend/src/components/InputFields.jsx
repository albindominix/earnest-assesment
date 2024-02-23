import React from "react";
import { useTaskContext } from "../context/ContextApi";

function InputFields({ setText, text }) {
  const init = { title: "", description: "" };

  const { createTask } = useTaskContext();

  function handleChange(e) {
    const name = e.target.name;
    const value = e.target.value;
    setText({ ...text, [name]: value });
  }

  function handleSubmit() {
    if (!text.title || !text.description) {
      return;
    }

    try {
      createTask(text.title, text.description);
      setText(init);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className="flex flex-col gap-4">
      <input
        name="title"
        type="text"
        value={text.title}
        className="border   border-teal-400 focus:border-indigo-300 focus:ring focus:ring-indigo-200 outline-none h-12 px-3"
        placeholder="Title"
        onChange={handleChange}
      />
      <input
        name="description"
        type="text"
        value={text.description}
        placeholder="Description"
        className=" focus:border-indigo-300 focus:ring focus:ring-indigo-200 outline-none h-12 border border-teal-400 px-3"
        onChange={handleChange}
      />
      <button
        className="bg-blue-400 p-2 outline-none text-white font-semibold hover:bg-blue-500 rounded-md"
        onClick={handleSubmit}
      >
        submit
      </button>
    </div>
  );
}

export default InputFields;
