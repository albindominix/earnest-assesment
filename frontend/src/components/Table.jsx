import React from 'react'
import { useTaskContext } from '../context/ContextApi';

function Table() {

const {  taskComplete, createTask, deleteTask, todo } = useTaskContext();


if(todo.length==0){
 return( <div className='text-lg font-bold mt-7 '>
  Add Task to Show
 </div>)
}
  return (
    <div className="flex flex-col relative top-10 scale-125">
    <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
      <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
        <div className="">
          <table className="block h-64 overflow-y-scroll min-w-full text-left text-sm font-light mt-5 ">
            <thead className="border-b font-medium dark:border-neutral-500 sticky top-0 bg-white">
              <tr>
                <th scope="col" className="px-6 py-4">Title</th>
                <th scope="col" className="px-6 py-4">Description</th>
                <th scope="col" className="px-6 py-4">Completed</th>
                <th scope="col" className="px-6 py-4">Delete</th>
              </tr>
            </thead>
            <tbody>
            {todo &&
              todo.map((item, index) => (
                <tr
                className="border-b  dark:border-neutral-500 dark:hover:bg-neutral-600"
                 key={index}>
                  
                  <td className="whitespace-nowrap px-6 py-4">{item.title}</td>
                  <td className="whitespace-nowrap px-6 py-4">{item.description}</td>
                  <td className="whitespace-nowrap px-6 py-4">
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
                  </td>
                  <td className="whitespace-nowrap px-6 py-4">
                  <button
              className="bg-red-500 hover:bg-red-700 px-2 py-1 rounded-lg text-white"
              onClick={() => deleteTask(item.id)}
            >
              delete
            </button></td>
                
                </tr>
              ))}
          </tbody>
          
          </table>
        </div>
      </div>
    </div>
    </div>
  
  )
}

export default Table
