import * as types from '../constants'

const friends = [
  {"id": 1, "name": "Exis Zhang", "status": "active"},
  {"id": 2, "name": "Hail you", "status": "offline"},
  {"id": 5, "name": "a big hamburgur", "status": "idle"},
  {"id": 8, "name": "exis@qq.com", "status": "offline"},
]

const FriendReducer = (state = friends, action) => {
  // return friends
  switch (action.type) {
    case types.FRIEND_ADD:
      return state.concat([
        {"id": action.id, "name": action.name, "status": action.status}
      ])
    case types.FRIEND_REMOVE:
      return state.filter(user => user.id !== action.id)
    case types.FRIEND:
      return JSON.parse(action.friends)
    default:
      return state  // using default value for now
  }
}

export default FriendReducer


// below is for changing user status action

//    constructor(props) {
//         super(props)
//         let u = this.props.user
//         if (u.status === 'active') {
//             this.state = {
//                 status: 'active',
//                 status_class: 'user_active',
//             }
//         } else if (u.status === 'idle') {
//             this.state = {
//                 status: 'idle',
//                 status_class: 'user_idle',
//             }
//         } else {
//             this.state = {
//                 status: 'offline',
//                 status_class: null,
//             }
//         }
//     }
//
//     set_status(status) {
//         let status_class
//         switch (status) {
//             case 'active':
//                 status_class = 'user_active'
//                 break
//             case 'idle':
//                 status_class = 'user_idle'
//                 break
//             default:
//                 status_class = null
//                 break
//         }
//         this.setState({
//             status: status,
//             status_class: status_class
//         });
//     }
