import React from "react";
import { toast } from 'react-toastify';

class AddTodo extends React.Component {
    state = {
        title: ''
    }
    handlerOnChange = (e) => {
        this.setState({
            title: e.target.value
        })
    }
    handlerAddTodo = () => {
        if(!this.state.title) { 
            // If title is empty, return
            toast.error('Please enter a title');
            return;
        }
        let todo = {
            id: Math.floor(Math.random() * 1001),
            title: this.state.title
        }

        this.props.addNewToDo(todo);
        this.setState({
            title: ''
        })
    }
    render() {
        let { title } = this.state;
        return (
            <div className="add-todo">
                <input type="text" value={title}
                    onChange={(e) => this.handlerOnChange(e)}
                />
                <button type="button"
                onClick={() => this.handlerAddTodo()}
                >Add</button>
            </div>
        )
    }
}

export default AddTodo;