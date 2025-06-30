import { useState } from "react";
import TodoItem from "./TodoItem";
import styles from './Todo.module.css'
export default function Todo()
{
    const[todo,SetTodo]=useState("");
    const[todos,SetTodos]=useState([]);
    function handleSubmit(e)
    {
        e.preventDefault();
        SetTodos([...todos,todo]);
        SetTodo("");
    }
    return <div className={styles.container}>
        <form  onSubmit={handleSubmit}>
            <h1>My Todo List</h1>
            <input
            onChange={(e)=> SetTodo(e.target.value)}
            value={todo} type="text" ></input>
            <br></br>
            <br></br>
            <button type="submit">Add</button>
        </form>
        {todos.map((item)=>(<TodoItem key={item} item={item}/>))}
    </div>;
}