import React, {Fragment} from "react"
import Textarea from 'react-expanding-textarea'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {activateThread, switchComposing} from "../../actions"
import {id2user} from '../../helpers'
import {connect} from "react-redux"
const trans = window.dictionary
import {sendMessage} from "../../actions"
import {ComposeMicellaneousButtons, ComposeNotifications,
  NonexistentStreamReplyError, PreviewMessageArea} from './elements'

class Compose extends React.Component {
    constructor(props) {
      super(props)
      this.state = {message: ''}
      this.handleChange = this.handleChange.bind(this)
      this.send_message = this.send_message.bind(this)
    }

    handleChange(event) {
      this.setState({message: event.target.value})
      // console.log(this.state.message)
    }

    send_message () {
        const t = this.props.active_thread
        const msg = this.state.message
        // console.log(t)
        this.props.sendMessage(msg, t.pm, t.id, t.pm_id)
        this.setState({message: ""})
    }

    hide_when_composing () {
       return ({display: this.props.composing ? "none" : "block"})
    }

    show_when_composing () {
       return ({display: this.props.composing ? "block" : "none"})
    }

    get_color () {
      try {return this.props.thread.color} catch (e) {return null}
    }

    name () {
      switch (this.props.pm) {
        case true:
          const user = id2user(this.props.pm_id, this.props.friends)
          if (user) {
            return user.name_chat
          }
          break
        case false:
        default:
          const thread = this.props.thread
          if (thread) {
            return this.props.thread.name
          }
      }
    }

    render() {
        return pug`
  #compose(style={left: "-17px"})
    #compose-notifications.notifications.above-composebox
    #compose-container
      #compose_controls.compose-content.new-style(style=this.hide_when_composing())
        #compose_buttons
          span.new_message_button
            button#left_bar_compose_stream_button_big.button.small.rounded.compose_stream_button(type='button', onClick=() => this.props.switchComposing(true)) New message
      .message_comp.compose-content(style=this.show_when_composing())
        #compose-send-status.alert
          span.compose-send-status-close ×
          span#compose-error-msg
        ComposeNotifications // Component
        .composition-area
          button#compose_close.close(type='button', 
          title='Cancel compose (Esc)', style=this.show_when_composing(), 
          onClick= () => this.props.switchComposing(false))
            | ×
          .compose_table
            #stream-message(style={display:"flex"})
              .message_header_colorblock.message_header_stream.left_part(style={backgroundColor:this.get_color()})
              .right_part
                input#stream.recipient_box(type='text', name='stream', maxlength=30, value=this.name(), readOnly)
            div
              .messagebox(style={width: "auto", overflow: "hidden"})
                Textarea#compose-textarea.new_message_textarea(name='content'
                placeholder='Compose your message here' maxlength='1000' rows=1 
                value=this.state.message
                onChange = this.handleChange)
                // PreviewMessageArea
                #below-compose-content
                  ComposeMicellaneousButtons // Component
                  span#sending-indicator
                  #send_controls.new-style
                    label#enter-sends-label.compose_checkbox_label
                      input#enter_sends(type='checkbox')
                      | Press Enter to send
                    button#compose-send-button.button.small.send_message(title='Send (Ctrl + Enter)' onClick=this.send_message)
                      | Send
`
   }
}

const d2p = {sendMessage}
const s2p = state => ({
  active_thread: state.active_thread
})


export default connect(s2p, d2p)(Compose)
