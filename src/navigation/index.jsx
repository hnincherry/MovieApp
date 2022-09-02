import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { useSelector} from 'react-redux'
import RootNavigator from './root'
import { ThemeProvider } from 'styled-components'
import { StyledText } from '../theme'

export default props => {
  // let final_theme = {...theme}

  const baseTheme = useSelector(state => state.baseTheme)

  let BaseTheme = {...baseTheme}

  return (
    <ThemeProvider theme={BaseTheme}>
      <NavigationContainer fallback={null}>
        <RootNavigator {...props} />
      </NavigationContainer>
    </ThemeProvider>
  )
}
