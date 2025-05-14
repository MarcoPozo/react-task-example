import { createContext, useState, useEffect } from "react";
export const TaskContext = createContext();
import { tasks } from "../data/tasks";

export function TaskContextProvider(props) {
  const [listTasks, setListTasks] = useState([]);

  function createTask(task) {
    setListTasks([
      ...listTasks,
      {
        id: listTasks.length,
        title: `${task.title} ${listTasks.length + 1}`,
        description: `${task.description} ${listTasks.length + 1}`,
      },
    ]);
  }

  function deleteTask(taskId) {
    setListTasks(listTasks.filter((task) => task.id !== taskId));
  }

  useEffect(() => {
    setListTasks(tasks);
  }, []);

  return (
    <TaskContext.Provider
      value={{
        listTasks,
        deleteTask,
        createTask,
      }}>
      {props.children}
    </TaskContext.Provider>
  );
}
