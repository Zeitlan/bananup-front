/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import { ContextProvider } from './context'
import styled from 'styled-components'

import WithThemes from './theme'
import NavigationBar from './components/menu/navigation-bar'
import NavigationMenu  from './components/menu/navigation-menu'
import Home from './pages/home'
class App extends React.Component {

  render() {
    return (
      <ContextProvider>
        <WithThemes>
          <div>
            <header>
              <NavigationBar/>
            </header>
            <NavigationMenu/>
          <Main>
            <Home/>
          </Main>
          </div>
        </WithThemes>
    </ContextProvider>)
  }
}

const Main = styled.main`
    margin-left: 200px;
    margin-right: 20px;
    margin-top: 100px;
    margin-bottom: 100px;
`

export default App
