import React from "react"
import {connect} from "react-redux"
import _ from 'lodash'
import moment from 'moment'
import {switchComposing, activateThread} from "../../actions"
import Compose from "../compose"
import MessageGroup from './message_group'
import {NoSelectedThreadNotice, EmptyThreadNotice, Loading} from './notice'
import {id2user} from "../../helpers"

class Middle extends React.Component {

  componentDidUpdate(prevProps) {
    // console.log(prevProps)
    // console.log(this.props)
    if (
      // if thread changed, active new thread
      prevProps.id != this.props.id ||
      prevProps.pm_id != this.props.pm_id ||
      prevProps.pm != this.props.pm ||
      !prevProps.threads.length  // thread not loaded yet
    ) {
      const p = this.props
      this.props.activateThread(p.id, p.pm_id, p.pm)
    } else if (
      // if thread hasn't changed, scroll to bottom
      (prevProps.id === this.props.id ||
       prevProps.pm_id === this.props.pm_id) &&
       prevProps.thread.message.length !== this.props.thread.message.length
    ) {
      try {this.scrollToBottom()} catch (e) {}
    }
  }

  scrollToBottom () {
    // there is a chance that below whitespace isn't present.
    this.messagesEnd.scrollIntoView({ behavior: "smooth" })
  }

  group_message (thread) {
    let groups = []
    const msgs = thread.message

    let sets = _.groupBy(msgs, (msg) => moment(msg['sent'], 'YYYY-MM-DD').startOf('day'))

    for (let x in sets) {
      groups.push({
        date: sets[x][0].sent,
        name: thread.type == 2 ? id2user(this.props.pm_id, this.props.friends).name_chat : thread.name,
        messages: sets[x],
      })
    }
    return groups
  }

  judgment() {
    let len
    const thread = this.props.thread
    try { len = this.props.thread.message.length } catch (e) {
      // console.log(e) //debug
    }
    // console.log(thread) //debug
    // console.log(len) //debug
    if (len > 0) {
        // thread passed, have message
        return pug`
            .message_table.focused_table
                each group in this.group_message(thread)
                    MessageGroup(messages=group.messages name=group.name date=group.date key=group.date thread=thread)
            #bottom_whitespace(ref = (el) => {this.messagesEnd = el})
        `
    } else if (len === 0) {
      // pm/normal thread, but no message  =>  EmptyThreadNotice
      return <EmptyThreadNotice {...this.props} />
    }
    switch (this.props.pm) {
      case true:
        if (this.props.friends.some(u => u.id == this.props.pm_id)) {
          // pm passed, user can be found, but conversation is empty => EmptyThreadNotice
          return <EmptyThreadNotice {...this.props} />
        } else {
          // pm passed, invalid pm, user cannot be found => NoSelectedThreadNotice
          return <NoSelectedThreadNotice/>
        }
      case false:
      // 4. thread_id passed, invalid thread_id   =>   NoSelectedThreadNotice
      return <NoSelectedThreadNotice/>
    }
    return <NoSelectedThreadNotice/>
  }

  render() {
    return pug`
        #main_div.message_area_padder.message_list
            ${this.judgment()}
        Compose(...this.props)
    `
  }
}

const d2p = {activateThread, switchComposing}

export default connect(null, d2p)(Middle)
