import React, { useState } from "react";

const Todo = () => {
    const [tasks, setTasks] = useState([]);
    const [input, setInput] = useState("");

    const handleKeyDown = (e) => {
        if (e.key === "Enter" && input.trim() !== "") {
            setTasks([...tasks, input.trim()]);
            setInput("");
        }
    };

    const deleteTask = (index) => {
        const updatedTasks = tasks.filter((_, i) => i !== index);
        setTasks(updatedTasks);
    };

    return (
        <div className="container mt-5">
            <div className="card shadow">
                <div className="card-body">
                    <h1 className="text-center display-4 mb-4">Lista de tareas</h1>
                    <input
                        type="text"
                        className="form-control mb-3"
                        placeholder="¿Qué tareas tienes pendientes?"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyDown={handleKeyDown}
                    />
                    <ul className="list-group">
                        {tasks.length === 0 ? (
                            <li className="list-group-item text-muted fst-italic">
                                No hay tareas, añadir tareas
                            </li>
                        ) : (
                            tasks.map((task, index) => (
                                <li
                                    key={index}
                                    className="list-group-item d-flex justify-content-between align-items-center"
                                >
                                    {task}
                                    <button
                                        className="btn btn-sm btn-outline-danger"
                                        onClick={() => deleteTask(index)}
                                    >
                                        🗑️
                                    </button>
                                </li>
                            ))
                        )}
                    </ul>
                    <div className="mt-3 text-muted">
                        {tasks.length} item{tasks.length !== 1 ? "s" : ""} left
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Todo;
