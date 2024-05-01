import React from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom/cjs/react-router-dom.min';
class ListUser extends React.Component {
    state ={
        users: []
    }
    // Chạy sau khi component render lần đầu tiên
    async componentDidMount() {
        let res = await axios.get('https://reqres.in/api/users?page=1');
        this.setState({
            users: res && res.data && res.data.data ? res.data.data : []
        })
    }
    handlerViewUserDetail = (user) => {
        this.props.history.push(`/user/${user.id}`);
    }
    render() {
        let { users } = this.state;
        return (
            <div className="list-user-container">
                <div className="title">
                    Fetch all list users
                </div>
                <div className="list-user-content">
                    {users && users.length > 0 &&
                        users.map((item, index) => {
                            return (
                                <div className="child" key={item.id} onClick={() => this.handlerViewUserDetail(item)}>
                                    {index + 1} - {item.first_name} {item.last_name}
                                </div>
                            )
                        })
                    }

                </div>

            </div>
        );
    }
}

export default withRouter(ListUser);