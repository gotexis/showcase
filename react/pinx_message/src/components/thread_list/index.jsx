import React from "react"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {connect} from "react-redux"
import {activateThread} from "../../actions"
import ThreadList from "./thread_list"
import {trans} from "../../constants"

const d2p = dispatch => ({
   activateThread: (id, pm_id, pm) => {
       dispatch(activateThread(id, pm_id, pm))
   },
});


function s2p(state) {
    return {
        threads: state.threads,
        active_thread: state.active_thread,
    }
}


class LeftSidebar extends React.Component {
   render() {
       return pug`
       .column-left
          #left-sidebar.left-sidebar(role='navigation')
             .bottom_sidebar
                #streams_list.zoom-out
                   #streams_header.zoom-in-hide
                       h4.sidebar-title(data-toggle='tooltip')  Streams
                       FontAwesomeIcon(icon='plus', id='streams_inline_cog')
                   ThreadList(...this.props)
       `
    }
}


export default connect(s2p, d2p)(LeftSidebar)


