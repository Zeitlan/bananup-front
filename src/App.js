/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import { ContextProvider } from './context'
import WithThemes from './theme'
import NavigationBar from './components/menu/navigation-bar'
import NavigationMenu  from './components/menu/navigation-menu'

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
            <main>
            </main>
          </div>
        </WithThemes>
    </ContextProvider>)
  }
}


export default App
