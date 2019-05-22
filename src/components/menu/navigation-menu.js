/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import styled from 'styled-components'
import Drawer from '@material-ui/core/Drawer'
import Input from '@material-ui/core/Input'


class NavigationMenu extends React.Component {

  render() {
    return (
            <CustomDrawer
            variant="permanent"
            anchor="left"
            classes={{ root: "root-drawer", paper: "paper" }}>
                <Padder/>
                <CustomInputBase
                    color="primary"
                    placeholder="Search…"
                />
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
const Padder = styled.div`
    height: 64;
    display: block;
`

export default NavigationMenu
