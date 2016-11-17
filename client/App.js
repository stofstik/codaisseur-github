import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import CodaisseurGithub from './styles/base-theme'
import './App.sass'

class App extends Component {
  render() {
    return(
        <MuiThemeProvider muiTheme={getMuiTheme(CodaisseurGithub)}>
          <div className="app">
            <main>
              {this.props.children}
            </main>
          </div>
        </MuiThemeProvider>
    );
  }
}

export default App
