import React from 'react'
import { useTaskContext } from '../context/ContextApi';

function Table() {

    const {  taskComplete, createTask, deleteTask, todo } = useTaskContext();

  return (
    <div className="border shadow-md min-w-[600px] p-2   max-h-[20rem] overflow-y-scroll flex flex-col gap-2 bg-white">
    {todo.length === 0 && (
      <div className="text-center font-semibold text-xl">
        No Tasks to Show
      </div>
    )}

    {todo &&
      todo.map((item, index) => (
        <div
          key={item.id}
          className=" border p-3 flex items-center gap-3 justify-between rounded-md flex-1"
        >
          <div>{item.title}</div>
          <div>{item.description}</div>
          <div className="flex gap-3">
            <button
              className={`border border-blue-500  px-2 py-1 rounded-lg  ${
                item.completed
                  ? "bg-teal-400 text-white border-none "
                  : "  hover:bg-blue-700 hover:text-white text-black "
              }`}
              onClick={() => taskComplete(item.id)}
              disabled={item.completed}
            >
              {item.completed ? "Completed" : "Complete"}
            </button>

            <button
              className="bg-red-500 hover:bg-red-700 px-2 py-1 rounded-lg text-white"
              onClick={() => deleteTask(item.id)}
            >
              delete
            </button>
          </div>
        </div>
      ))}
  </div>
  )
}

export default Table
