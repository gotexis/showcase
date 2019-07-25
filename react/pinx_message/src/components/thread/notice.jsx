import React from 'react'

export const EmptyThreadNotice = props => pug`
        .empty_feed_notice(style={display: 'block'})
            h4 There are no messages in this thread yet!
            p
                | Why not 
                a.empty_compose(onClick= () => props.switchComposing(true)) start the conversation
                | ?
`

export const NoSelectedThreadNotice = props => pug`
        .empty_feed_notice(style={display: 'block'})
            h4 Select a thread to continue.
            p Or, create one 
`

export const Loading = props => pug`
        .empty_feed_notice(style={display: 'block'})
            h4 Welcome back!
            p Please wait while Pinx message loads...
`

