import React, { Component } from 'react';
import '../public/App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Form from './Form';
import injectTapEventPlugin from 'react-tap-event-plugin';
import AppBar from 'material-ui/AppBar';
injectTapEventPlugin();

class App extends Component {
    render() {
        return (
            <MuiThemeProvider>
                <div className="App">
                    <AppBar title="Head In The Galaxy" />
                    <div className="Form">
                        <Form />
                    </div>
                </div>
            </MuiThemeProvider>
        );
    }
}

export default App;
