/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import styled from 'styled-components'
import Drawer from '@material-ui/core/Drawer'
import Input from '@material-ui/core/Input'
import ClippedNavigationList from './clipped-navigation-list'


const navItems = [
    {
        text:"Home",
        link:"/"
    },
    {
        text:"Catégories",
        link:"/categories"
    },
    {
        text:"Vidéos",
        link:"/videos"
    }
]

class NavigationMenu extends React.Component {

  render() {
    return (
            <CustomDrawer
            variant="permanent"
            anchor="left"
            classes={{ root: "root-drawer", paper: "paper" }}>
                <UnderNav/>
                    <CustomInputBase
                        color="primary"
                        placeholder="Search…"
                    />
                    <ClippedNavigationList navItems = { navItems}/>
            </CustomDrawer>
    )
  }
}

const CustomDrawer = styled(Drawer)`
    .paper {
        background-color: #424242;
        z-index: 1;
    }
    .root-drawer {
        width:300;
        z-index: 1;
    }
    width:300;
`
const CustomInputBase = styled(Input)`
    border-radius: 10%;
`

const UnderNav = styled.div`
    min-height: 58px;
`

export default NavigationMenu
