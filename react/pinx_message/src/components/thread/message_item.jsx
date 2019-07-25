import React from "react"
import {make_time} from "../../helpers"

export default class MessageItem extends React.Component {
  border_style() {
    return {boxShadow: "inset 2px 0 0 0 " + this.props.thread.color + ", -1px 0 0 0 " + this.props.thread.color}
  }

  make_changed(msg) {
    return pug`
        .message_row.include-sender.selectable_row(id=msg.id, data-user-id=msg.uid)
            .messagebox(style=this.border_style())
                .messagebox-border
                    .messagebox-content
                        .message_top_line
                            span.message_sender.sender_info_hover.no-select
                                .inline_profile_picture
                                    img.no-drag(src=msg.sender.avatar, alt=msg.sender.name_chat)
                                span.sender_name.auto-select(role='button') #{msg.sender.name_chat}
                            span.message_time #{make_time(msg.sent)}
                        .message_content #{msg.message}
    `
  }

  make_unchanged(msg) {
    return pug`
        .message_row.selectable_row(id=msg.id, data-user-id=msg.uid)
            .messagebox.prev_is_same_sender(style=this.border_style())
                .messagebox-border
                    .messagebox-content
                        .message_top_line
                            span.message_time #{make_time(msg.sent)}
                        .message_content #{msg.message}
    `
  }

  render() {
    let msg = this.props.message
    return this.props.changed ? this.make_changed(msg) : this.make_unchanged(msg)
  }
}
