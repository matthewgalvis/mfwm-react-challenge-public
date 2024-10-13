'use client'

import React, { FC } from 'react'


import { CssBaseline } from '@mui/material'
import {ThemeProvider as MuiThemeProvider} from "@mui/material/styles";


import theme from "@/app/utils/theme";
import {IThemeProvider} from "@/app/utils/types";

const ThemeProvider: FC<IThemeProvider> = ({ children }) => (
  <MuiThemeProvider theme={theme}>
    <CssBaseline />
    {children}
  </MuiThemeProvider>
)

export default ThemeProvider
