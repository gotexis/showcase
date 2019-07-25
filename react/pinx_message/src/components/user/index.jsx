import React from "react"
import {connect} from "react-redux"
import UserList from "./user_list"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {trans} from "../../constants"
import {id2thread} from "../../helpers"
import {activateThread} from "../../actions"

class RightSidebar extends React.Component {

  thread_subscribers() {
    let {id, pm_id, pm} = this.props.active_thread
    try {
    return id2thread(pm? pm_id: id, this.props.threads, pm).user
    } catch (e) {}
    return []
  }

  render() {
    return pug`
        .column-right
            #right-sidebar.right-sidebar(role='navigation')
                .sidebar-items
                    #user-list
                        #buddy_list_wrapper.scrolling_list(style={maxHeight: "1vm"})
                            #userlist-header
                                h4#userlist-title.sidebar-title Thread participants
                            UserList(user_list=this.thread_subscribers(), ...this.props)
                            a#invite-user-link
                                FontAwesomeIcon(icon="plus-circle")
                                |  Invite users
                            hr.stream-split
                            #userlist-header
                                h4#userlist-title.sidebar-title My contacts
                            UserList(user_list=this.props.friends, ...this.props)
    `
  }
}

function s2p(state) {
  const {timer, threads, active_thread, friends} = state
  return {
    threads,
    active_thread,
    friends,
    timer,
  }
}

const d2p = dispatch => ({
   activateThread: (id, pm_id, pm) => {
       dispatch(activateThread(id, pm_id, pm))
   },
})

export default connect(s2p, d2p)(RightSidebar)


