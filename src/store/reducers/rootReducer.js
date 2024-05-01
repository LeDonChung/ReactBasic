const initState = {
    users: [
        {id: 1, name: 'Eric'},
        {id: 2, name: 'Chung'},
        {id: 3, name: 'Tuyen'}
    ]
}
const  rootReducer = (state = initState, action) => {
    switch(action.type) {
        case 'DELETE_USER':
            let users = state.users;
            users = users.filter(item => item.id !== action.payload.id);
            // Lấy state cũ và cập nhật lại users
            return {
                ...state, users
            }
            break;

        case 'ADD_USER': 
            let user = {id: state.users.length + 1, name: 'New User'};
            return {
                ...state, users: [...state.users, user]
            }
            break;
        default: return state
    }
    return state; 
}

export default rootReducer;