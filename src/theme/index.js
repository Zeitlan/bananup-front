import React from "react";
import {
  MuiThemeProvider,
  withTheme,
} from "@material-ui/core/styles";

import muiTheme from './mui-theme'
import styledTheme from './styled-theme'
import { ThemeProvider } from "styled-components"
import PropTypes from "prop-types"

const MaterialUiTheme = props => (
  <MuiThemeProvider theme={muiTheme}>{props.children}</MuiThemeProvider>
)


const StyledComponentsTheme = props => (
  <ThemeProvider theme={{ app: styledTheme, mui: props.theme }}>
    {props.children}
  </ThemeProvider>
)

const StyledComponentsThemeWithMui = withTheme()(StyledComponentsTheme)

const WithThemes = props => (
  <MaterialUiTheme>
    <StyledComponentsThemeWithMui>
      {props.children}
    </StyledComponentsThemeWithMui>
  </MaterialUiTheme>
)

WithThemes.propTypes = {
  children: PropTypes.any,
}

export default WithThemes