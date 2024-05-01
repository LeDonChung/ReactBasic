import React from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom/cjs/react-router-dom.min';
class DetailUser extends React.Component {
    state = {
        user: {}
    }
    async componentDidMount() {
        if (this.props.match.params && this.props.match.params.id) {
            let id = this.props.match.params.id;
            let res = await axios.get(`https://reqres.in/api/users/${id}`);
            this.setState({
                user: res && res.data && res.data.data ? res.data.data : {}
            })
        }
    }
    handlerBack = () => {
        this.props.history.push('/user');
    }
    render() {
        let { user } = this.state;
        let isEmpty = Object.keys(user).length === 0;
        return (
            <>
                <p>Hello Detail User {user.id}</p>
                {isEmpty === false &&
                    <>
                        <div>User's name: {user.firse_name} - {user.last_name}</div>
                        <div>User's email: {user.email}</div>
                        <div>
                            <img src={user.avatar} alt="avatar" />
                        </div>
                        <div>
                            <button onClick={() => this.handlerBack()}>Back</button>
                        </div>
                    </>
                }

            </>
        )
    }
}

export default withRouter(DetailUser);