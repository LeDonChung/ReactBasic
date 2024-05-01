import React from 'react';
import { withRouter } from 'react-router-dom';
import Color from '../HOC/Color';
import logo from '../../assets/images/img.png';
import { connect } from 'react-redux';
class Home extends React.Component {
    component() {
        // setTimeout(() => {
        //     // Higher Order Components: Nó sẽ lấy props từ component cha và truyền vào component con thông qua props
        //     this.props.history.push('/todo');
        // }, 3000);
    }
    handlerDeleleUser(user) {
        this.props.deleteUserRedux(user);
    }
    handlerAddNewUser() {
        this.props.addUserRedux();
    }
    render() {
        this.component();

        console.log(this.props);
        let users = this.props.users;
        return (
            <>
            <img src={logo}></img>
                <div>
                    {users && users.length > 0 && 
                    users.map((item, index) => {
                        return (
                            <div key={index}>
                                {item.id} - {item.name} <span onClick={() => this.handlerDeleleUser(item)}>x</span>
                            </div> 
                        );
                    })}
                <button onClick={() => this.handlerAddNewUser()}> + </button>

                </div>
            </>
        );
    }
}

// state là của redux
const mapStateToProps = (state) => {
    return {
        users: state.users
    }
}
// dispatch là của redux
const mapDispatchToProps = (dispatch) => {
    return {
        deleteUserRedux: (user) => {
            dispatch({type: 'DELETE_USER', payload: user})
        },
        addUserRedux: () => {
            dispatch({type: 'ADD_USER'})
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Color(Home));