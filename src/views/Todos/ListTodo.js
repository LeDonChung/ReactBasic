import React from "react";
import './ListTodo.scss';
import AddTodo from "./AddTodo";
import { toast } from 'react-toastify';
class ListTodo extends React.Component {
    state = {
        todos: [
            { id: 1, title: 'Learn React' },
            { id: 2, title: 'Learn NodeJS' },
            { id: 3, title: 'Learn Angular' }
        ],
        editTodo: {

        }
    }
    addNewToDo = (todo) => {
        this.setState({
            // Speads the current todos and adds the new todo
            todos: [...this.state.todos, todo]
        })
        toast.success('Todo added successfully');
    }
    handlerDeleteTodo = (todo) => {
        let currentTodos = this.state.todos;
        currentTodos = currentTodos.filter(item => item.id !== todo.id);
        this.setState({
            todos: currentTodos
        })
        toast.success('Todo deleted successfully');
    }
    handlerEditTodo = (todo) => {
        let { editTodo, todos } = this.state;

        let isEmpty = Object.keys(editTodo).length === 0;

        // save
        if (isEmpty === false && editTodo.id === todo.id) {
            let listTodos = [ ...todos ];
            let index = listTodos.findIndex(item => item.id === todo.id);
            listTodos[index].title = editTodo.title;
            this.setState({
                todos: listTodos,
                editTodo: {}
            }) 
            return;
        }
        this.setState({
            editTodo: todo
        })

    }
    handlerOnChangeEditTodo = (e) => {
        let editTodoCopy = { ...this.state.editTodo };
        editTodoCopy.title = e.target.value;
        this.setState({
            editTodo: editTodoCopy
        })
    }
    render() {
        let { todos, editTodo } = this.state;
        let isEmpty = Object.keys(editTodo).length === 0;

        return (
            <>
            <p>This is App Todo</p>
            <div className="list-todo-container">
                <AddTodo addNewToDo={this.addNewToDo} />
                <div className="list-todo-content">
                    {todos && todos.length > 0 &&
                        todos.map((todo, index) => {
                            return (
                                <div key={todo.id} className="todo-child">
                                    {isEmpty ?
                                        <span> {index + 1} - {todo.title}</span>
                                        :
                                        <>
                                            {editTodo.id === todo.id ?
                                                <span>
                                                    {index + 1} - <input
                                                        onChange={(e) => { this.handlerOnChangeEditTodo(e) }}
                                                        value={editTodo.title}></input>
                                                </span>
                                                :
                                                <span> {index + 1} - {todo.title}</span>
                                            }
                                        </>
                                    }
                                    <button type="button"
                                        onClick={() => this.handlerEditTodo(todo)}>
                                        {isEmpty === false && editTodo.id === todo.id ? 'Save' : 'Edit'}
                                    </button>
                                    <button type="button"
                                        onClick={() => { this.handlerDeleteTodo(todo) }}
                                    >Delete</button>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            </>
            
        )
    }
}

export default ListTodo;