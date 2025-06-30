import { useState } from "react";
import TodoItem from "./TodoItem";

export default function Todo() {
    const [todo, SetTodo] = useState("");
    const [todos, SetTodos] = useState([]);
    const [completed, SetCompleted] = useState([]);

    function handleSubmit(e) {
        e.preventDefault();
        if (todo.trim()) {
            SetTodos([...todos, todo]);
            SetTodo("");
        }
    }

    function handleDone(index) {
        const doneTask = todos[index];
        SetCompleted([...completed, doneTask]);
        SetTodos(todos.filter((_, i) => i !== index));
    }

    return (
        <div className="min-h-screen bg-gray-200 pt-32 pb-24">
           
            <div className="bg-yellow-500 fixed top-0 left-0 w-full h-24 flex items-center justify-center shadow-md z-10">
                <h1 className="text-red-600 text-5xl font-extrabold">TO DO LIST</h1>
            </div>

            <form onSubmit={handleSubmit} className="flex justify-center items-center mt-4 space-x-4">
                <input
                    className="p-2 w-64 h-10 border rounded-md shadow focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder-gray-500"
                    onChange={(e) => SetTodo(e.target.value)}
                    value={todo}
                    type="text"
                    placeholder="Enter the task.."
                />
                <button
                    type="submit"
                    className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-200"
                >
                    ADD
                </button>
            </form>

           
            <div className="flex flex-col items-center mt-6 space-y-2">
                {todos.map((item, index) => (
                    <TodoItem key={index} item={item} onDone={() => handleDone(index)} />
                ))}
            </div>

          
            <div className="bg-yellow-500 fixed bottom-0 left-0 w-full h-20 flex justify-center items-center space-x-10 z-10">
                <p className="text-red-600 text-2xl font-extrabold">
                    TASK TO COMPLETE : {todos.length}
                </p>
                <p className="text-red-600 text-2xl font-extrabold">
                    TASK COMPLETED: {completed.length}
                </p>
            </div>
        </div>
    );
}
