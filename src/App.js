/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import { ContextProvider } from './context'
import WithThemes from './theme'
import Typography from '@material-ui/core/Typography'
import styled from 'styled-components'

class App extends React.Component {

  render() {
    return (
      <ContextProvider>
        <WithThemes>
          <CustomTypo>Starter</CustomTypo>
        </WithThemes>
    </ContextProvider>)
  }
}

const CustomTypo = styled(Typography)`
  background: ${props => props.theme.mui.palette.primary.main};
`

export default App
