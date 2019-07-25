import React from "react"
import {make_date} from "../../helpers"
import MessageItem from './message_item'
export default class MessageGroup extends React.Component {

  make_list() {
    let msg_list = this.props.messages
    let thread = this.props.thread
    let messages = []
    for (let i = 0; i < msg_list.length; i++) {
      let changed
      if (i === 0) {
        changed = true
      } else {
        changed = (msg_list[i].uid !== msg_list[i - 1].uid)
      }
      messages.push(<MessageItem message={msg_list[i]} changed={changed} key={msg_list[i].id} thread={thread}/>);
    }
    return messages
  }


  render() {
    let messages = this.make_list()
    let thread = this.props.thread
    return pug`
        .recipient_row
            .message_header.message_header_stream.right_part
                .message-header-wrapper
                    .message-header-contents
                        a.message_label_clickable.narrows_by_recipient.stream_label(style={
                            background: thread.color,
                            borderLeftColor: thread.color
                        })
                            | #{this.props.name}
                        span.copy-paste-text >
                        span.recipient_bar_controls.no-select
                            span.topic_edit
                                span.topic_edit_form
                            span.recipient_row_date
                                span #{make_date(this.props.date)}
            |             #{messages}
    `
  }
}

