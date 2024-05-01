import React from 'react';
class AddComponent extends React.Component {
    state = {
        title: '',
        salary: 0
    }

    handlerTitle = (event) => {
        this.setState({ title: event.target.value });
    }

    handlerSalary = (event) => {
        this.setState({ salary: event.target.value });
    }
    handlerSubmit = (event) => {
        event.preventDefault();
        console.log(this.state)
        this.props.addNewJob({
            id: Math.floor(Math.random() * 1000) + 1,
            title: this.state.title,
            salary: this.state.salary
        });


        this.setState({
            title: '',
            salary: 0
        }); 

    }
    render() {
        return (
            <>
                <form>
                    <label htmlFor="fname">Title:</label><br></br>
                    <input type="text" value={this.state.title} onChange={(event) => this.handlerTitle(event)} /><br></br>
                    <label htmlFor="lname">Salary:</label><br></br>
                    <input type="number" value={this.state.salary} onChange={(event) => this.handlerSalary(event)} /> <br></br>
                    <input type="submit" value="Submit" onClick={(event) => this.handlerSubmit(event)} />
                </form >
            </>
        );
    }

}
export default AddComponent;