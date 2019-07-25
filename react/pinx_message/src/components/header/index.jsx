import React, {Component} from 'react'


export default class Header extends Component {
  render() {
    return pug`
        .header(style={left: '-17px'})
            nav#top_navbar.header-main.rightside-userlist
                .column-left
                    a.brand.no-style(href='#')
                        img.nav-logo.no-drag(src="/static/generic/img/pinx-logo.png")
                        .company-name Pinx messages
                #navbar-middle.column-middle
                    .column-middle-inner
                        #searchbox_legacy.searchbox-rightmargin
                .column-right
    `
  }
}
