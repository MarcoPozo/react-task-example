import TaskCard from "./TaskCard";
import { useContext } from "react";
import { TaskContext } from "../Context/TaskContext";

export default function TaskList() {
  const { listTasks } = useContext(TaskContext);

  if (listTasks.length === 0) {
    return <h1 className="text-white text-4xl font-bold text-center">No existen tareas aún</h1>;
  }

  return (
    <div className="grid grid-cols-4 gap-2">
      {listTasks.map((task) => (
        <TaskCard key={task.id} task={task} />
      ))}
    </div>
  );
}
