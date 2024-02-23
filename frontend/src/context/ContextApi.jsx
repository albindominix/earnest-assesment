import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const AppContext = createContext();
const AppProvider = ({ children }) => {
  const [todo, setTodo] = useState([]);
  const url = "http://localhost:3000/tasks/";

  async function getTask() {
    try {
      axios.get(url).then((res) => setTodo(res.data));
    } catch (err) {
      console.log(err);
    }
  }

  async function createTask(title, description) {
    try {
      await axios.post(url, {
        title,
        description,
      });
      getTask();

    } catch (err) {
      console.log(err);
    }
  }

  async function taskComplete(id) {
    try {
      await axios.patch(url + id, {
        completed: true,
      });

      getTask();
    } catch (err) {
      console.log(err);
    }
  }

  async function deleteTask(id) {
    try {
      await axios.delete(url + id);
      getTask();
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    getTask();
  }, []);

  return (
    <AppContext.Provider
      value={{ todo, getTask, taskComplete, createTask, deleteTask }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useTaskContext = () => {
  return useContext(AppContext);
};

export { AppProvider, AppContext, useTaskContext };
