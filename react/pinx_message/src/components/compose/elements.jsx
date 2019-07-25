import React, {Fragment} from "react"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"

// ! -> some non-essential components for Compose
export const ComposeMicellaneousButtons = props => pug`
    Fragment
    input#file_input.notvisible.pull-left(type='file', multiple)
    a#emoji_map.message-control-button(aria-hidden='true', title='Add emoji')
        FontAwesomeIcon(icon='smile')
    a.message-control-button(aria-hidden='true', title='Formatting')
        FontAwesomeIcon(icon='font')
    a#attach_files.message-control-button(title='Attach files')
        FontAwesomeIcon(icon='paperclip')
    a#video_link.message-control-button(title='Add video call')
        FontAwesomeIcon(icon='camera')
    a#undo_markdown_preview.message-control-button.fa.fa-edit(style={display: 'none'}, title='Write')
        FontAwesomeIcon(icon='edit')
    a#markdown_preview.message-control-button.fa.fa-eye(title='Preview')
        FontAwesomeIcon(icon='eye')
`

export const ComposeNotifications = props => pug`
    Fragment
    #compose_invite_users.alert.home-error-bar(style={display:"none"})
    #compose-all-everyone.alert.home-error-bar(style={display:"none"})
    #compose-announce.alert.home-error-bar(style={display:"none"})
    #compose_not_subscribed.alert.home-error-bar
    #compose_private_stream_alert.alert.home-error-bar(style={display:"none"})
    #out-of-view-notification.notification-alert(style={display:"none"})
`
export const NonexistentStreamReplyError = props => pug`
       Fragment
          #nonexistent_stream_reply_error.alert-error
          span.compose-send-status-close ×
          span#compose-reply-error-msg
`

export const PreviewMessageArea = props => pug`
       Fragment
          .drag
          #preview_message_area.scrolling_list
          #markdown_preview_spinner
          #preview_content
`