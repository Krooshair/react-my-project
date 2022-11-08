import { createContext, useState, useEffect } from "react";
import { tarea as data, tarea } from "../data/tasks";

export const TaskContext = createContext();

export function TaskContextProvider(props) {
  const [tareas, setTareas] = useState([]);

  function createTask(tarea) {
    setTareas([
      ...tareas,
      {
        title: tarea.title,
        id: tareas.length,
        description: tarea.description,
      },
    ]);
  }

  function deleteTask(tareaId) {
    setTareas(tareas.filter((tareas) => tareas.id !== tareaId));
  }

  useEffect(() => {
    setTareas(data);
  }, []);

  return (
    <TaskContext.Provider
      value={{
        tareas,
        deleteTask,
        createTask
      }}
    >
      {props.children}
    </TaskContext.Provider>
  );
}
