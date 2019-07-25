import React, {Fragment} from "react"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {Link} from 'react-router-dom'
import {BASE_URL} from "../../constants"


export default class ThreadListItem extends React.Component {
    constructor(props) {
      super(props)
      this.activateThread = this.activateThread.bind(this)
    }

    unread () {
        let {last_access, message} = this.props.thread
        last_access = new Date(last_access * 1000)
        length = message.filter(msg => new Date(msg.sent) > last_access).length
        // console.log(length)
        // console.log(message)
        // console.log(last_access)
        return length
    }

    activateThread () {
        this.props.activateThread(this.props.id, null, false)
    }

    is_active () {
        return this.props.active_thread.id == this.props.id ? "active-filter": null
    }

    // below has a problem: if action is not binded here and purely rely on componentdidmount,
    // then active state wont switch and the element wont rerender
    render () {
        this.unread ()
        const props = this.props
        return pug`
                Fragment
                    li.narrow-filter(className=this.is_active() onClick=this.activateThread)
                        .subscription_block.selectable_sidebar_block
                            span#stream_sidebar_privacy_swatch_2.stream-privacy(style={color: this.props.thread.color})
                                span.hashtag
                            Link.stream-name(to=BASE_URL + props.thread.id) #{props.thread.name}
                            .count(style={display: this.unread() === 0 ? 'none' : 'block'})
                                .value #{this.unread()}
                        span.arrow.stream-sidebar-arrow
                            FontAwesomeIcon(icon="chevron-down")
        `
    }
}
