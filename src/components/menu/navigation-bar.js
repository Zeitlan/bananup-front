/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import styled from 'styled-components'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'


class NavigationBar extends React.Component {
  render() {
    return (
        <CustomAppBar position="fixed" color="primary">
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap>
            Bananup
          </Typography>
        </Toolbar>
      </CustomAppBar>
    )
  }
}

const CustomAppBar = styled(AppBar)`
    height: 64;
`
export default NavigationBar
