import 'babel-polyfill'
import React from 'react'
import ReactDOM from 'react-dom'
import MessageApp from './components'
import {Provider} from "react-redux"
import store from "./store"
// react-font awesome
import {library} from '@fortawesome/fontawesome-svg-core'
import {
  faCamera,
  faCheckSquare,
  faChevronDown,
  faCoffee,
  faEdit,
  faEye,
  faFont,
  faHashtag,
  faPaperclip,
  faPlus,
  faPlusCircle,
  faSmile,
  faTrash
} from '@fortawesome/free-solid-svg-icons'

// !--------------------------------- styles ------------------------------------
import "./scss/zulip/components.scss"
import "./scss/zulip/app_components.scss"
import "./scss/zulip/zulip.scss"
import "./scss/zulip/alerts.scss"
import "./scss/zulip/settings.scss"
import "./scss/zulip/subscriptions.scss"
import "./scss/zulip/drafts.scss"
import "./scss/zulip/input_pill.scss"
import "./scss/zulip/informational-overlays.scss"
import "./scss/zulip/compose.scss"
import "./scss/zulip/reactions.scss"
import "./scss/zulip/left-sidebar.scss"
import "./scss/zulip/right-sidebar.scss"
import "./scss/zulip/lightbox.scss"
import "./scss/zulip/popovers.scss"
import "./scss/zulip/media.scss"
import "./scss/zulip/typing_notifications.scss"
import "./scss/zulip/hotspots.scss"
import "./scss/zulip/night_mode.scss"
import "./scss/zulip/widgets.scss"

// web font
import './scss/font.scss'

library.add(faCheckSquare,
  faCoffee, faChevronDown,
  faPlus, faHashtag,
  faPlusCircle, faTrash,
  faSmile,
  faPaperclip,
  faCamera,
  faEye,
  faEdit,
  faFont
)


ReactDOM.render(
  <Provider store={store}>
    <MessageApp/>
  </Provider>,
  document.getElementById('app')
)

module.hot.accept()
