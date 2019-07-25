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
import "./scss/zstock/components.scss"
import "./scss/zstock/app_components.scss"
import "./scss/zstock/zulip.scss"
import "./scss/zstock/alerts.scss"
import "./scss/zstock/settings.scss"
import "./scss/zstock/subscriptions.scss"
import "./scss/zstock/drafts.scss"
import "./scss/zstock/input_pill.scss"
import "./scss/zstock/informational-overlays.scss"
import "./scss/zstock/compose.scss"
import "./scss/zstock/reactions.scss"
import "./scss/zstock/left-sidebar.scss"
import "./scss/zstock/right-sidebar.scss"
import "./scss/zstock/lightbox.scss"
import "./scss/zstock/popovers.scss"
import "./scss/zstock/media.scss"
import "./scss/zstock/typing_notifications.scss"
import "./scss/zstock/hotspots.scss"
import "./scss/zstock/night_mode.scss"
import "./scss/zstock/widgets.scss"

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
