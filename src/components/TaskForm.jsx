import { useState, useContext } from "react";
import { TaskContext } from "../Context/TaskContext";

export default function TaskForm() {
  const [title, setTitle] = useState("Task");
  const [description, setDescription] = useState("Description for Task");
  const { createTask } = useContext(TaskContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    createTask({ title, description });
    setTitle("");
    setDescription("");
  };

  return (
    <section className="max-w-md mx-auto">
      <form onSubmit={handleSubmit} className="bg-slate-800 p-10 mb-4">
        <h1 className="text-2xl font-bold text-white mb-3">Crea tu tarea</h1>
        <input
          type="text"
          placeholder="Escribe tu tarea..."
          onChange={(event) => {
            setTitle(event.target.value);
          }}
          value={title}
          className="bg-slate-300 p-3 w-full mb-2"
          autoFocus
        />
        <textarea className="bg-slate-300 p-3 w-full mb-2" placeholder="Escribe la descripcion de la tarea" onChange={(event) => setDescription(event.target.value)} value={description}></textarea>
        <button className="bg-indigo-500 px-3 py-2 text-white w-full">Guardar</button>
      </form>
    </section>
  );
}
