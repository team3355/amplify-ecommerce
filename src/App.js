import React from 'react'
import { Header } from 'semantic-ui-react'
import { withAuthenticator } from 'aws-amplify-react'
import signUpConfig from './config/signUpConfig'

import './App.css'

class App extends React.Component {
    constructor(props, context) {
      super(props, context);
    }
  
    render() {
        if (this.props.authState === "signedIn") {
            return functionApp();
        } else {
            return null;
        }
    }
  }
  
function functionApp() {
    return (
        <div style={styles}>
            <Header as='h1'>Hello World!</Header>
        </div>
    );
}

export default withAuthenticator(App, { signUpConfig })

const styles = {
  marginLeft: '1em',
  marginRight: '1em'
}
