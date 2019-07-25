import React from "react";
import UserItem from "./user_item"


export default class UserList extends React.Component {

    // componentDidUpdate(prevProps) {
    //     console.log(prevProps)
    //     console.log(this.props)
    // }

    render() {
        return pug`
            React.Fragment
                ul#user_presences.filters.user_presences
                    each user in this.props.user_list
                        UserItem(key=user.id user=user, ...this.props)
        `
    }
}
