import React, {Fragment, Component} from 'react'
import LeftSidebar from './thread_list'
import RightSidebar from './user'
import Middle from './thread'
import {Route, Switch, BrowserRouter} from 'react-router-dom'
import {connect} from "react-redux"
import {BASE_URL} from "../constants"
import {id2thread} from "../helpers"
import Compose from "./compose"
import Header from "./header"
import {activateThread, switchComposing} from "../actions"


class MessageApp extends Component {

  get_thread (threads=null, id=null, pm) {
    let thread
    if (!threads && !id) {
      return <Middle />
    } else {
      thread = id2thread(id, threads, pm)
    }
    return pm ?
      <Middle thread={thread} id={id} pm_id={id} pm={pm} {...this.props} /> :
      <Middle thread={thread} id={id}            pm={pm} {...this.props} />
  }

  render() {
    return pug`
        Fragment
            BrowserRouter
                Header
                .app(style={overflow: "hidden"})
                    .app-main
                        LeftSidebar
                        //Middle
                        .column-middle
                            .column-middle-inner.tab-content
                                #home.tab-pane.active
                                    Switch
                                        Route(path=BASE_URL exact=true render= () => this.get_thread(null, null, false))
                                        Route(path=BASE_URL + "@" + ":pm_id" render=({match}) => this.get_thread(this.props.threads, match.params.pm_id, true))
                                        Route(path=BASE_URL + ":id" render=({match}) => this.get_thread(this.props.threads, match.params.id, false))
                        RightSidebar
    `
  }
}

function s2p(state) {
    return {
        threads: state.threads,
        composing: state.composing,
        friends: state.friends,
    }
}


const d2p = {activateThread}

export default connect(s2p, d2p)(MessageApp)
