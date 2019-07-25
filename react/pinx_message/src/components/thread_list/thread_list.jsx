import React from "react"
import ThreadListItem from "./thread_item"

export default class ThreadList extends React.Component {

    normal_threads () {
        return this.props.threads.filter(i => i.type != 2)
    }

    render() {
       return pug`
       #stream-filters-container.scrolling_list.ps
         ul#stream_filters.filters
           each item in this.normal_threads()
             ThreadListItem(key=item.id thread=item id=item.id, ...this.props)
    `
    }
}
