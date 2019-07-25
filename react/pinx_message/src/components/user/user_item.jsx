import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {Link} from 'react-router-dom'
import {BASE_URL} from "../../constants"
import {activateThread} from "../../actions"
import connect from "react-redux/es/connect/connect"

export default class UserItem extends React.Component {
  constructor(props) {
    super(props)
    this.activateThread = this.activateThread.bind(this)
  }


  activateThread() {
    this.props.activateThread(this.props.thread_id, this.props.user.id, true)
  }

  presence() {
    const now = this.props.timer
    const user_timestamp = this.props.user.presence
    const delta = now - user_timestamp
    let status
    console.log(delta)
    console.log(this.props.user)
    switch (delta) {
      case delta < 60 * 5: // online
        status = 'user_active'
        break
      case delta > 60 * 5: // away
        status = 'user_idle'
        break
      default:  // offline
        status = 'user_offline'
    }
    return status
  }

  attr() {
    this.presence()
    let r = this.presence()
    this.props.active_thread.pm && this.props.active_thread.pm_id == this.props.user.id ? r += " active-filter" : null
    return r
  }

  render() {
    let u = this.props.user
    return pug`
        li.user_sidebar_entry.narrow-filter(className=this.attr() onClick=this.activateThread)
            .selectable_sidebar_block
                span.user-status-indicator
                Link.user-presence-link(to=BASE_URL + "@" + u.id) #{u.name_chat}
                span.count
                    span.value
            span.arrow
                FontAwesomeIcon(icon='chevron-down')
    `
  }
}
