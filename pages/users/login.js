import React, { Component } from 'react'
import Link from 'next/link'

// Core
import Keybase from '../../lib/keybase'

// Material-UI
import Button from 'material-ui/Button'
import Input, { InputLabel, InputAdornment } from 'material-ui/Input'
import { FormGroup, FormControlLabel, FormControl, FormHelperText } from 'material-ui/Form'
import Checkbox from 'material-ui/Checkbox'
import Card, { CardActions, CardContent } from 'material-ui/Card'

import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import Typography from 'material-ui/Typography'
import Divider from 'material-ui/Divider'
import Grid from 'material-ui/Grid'

// Theme
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles'
import blue from 'material-ui/colors/blue'

const theme = createMuiTheme({
  palette: {
    primary: blue
  }
})

import injectTapEventPlugin from 'react-tap-event-plugin'

// Make sure react-tap-event-plugin only gets injected once
// Needed for material-ui
if (!process.tapEventInjected) {
  injectTapEventPlugin()
  process.tapEventInjected = true
}

const styles = theme => ({
  card: {
    maxWidth: 630
  },
  container: {
    display: 'grid',
    gridGap: `${theme.spacing.unit * 3}px`
  },
  divider: {
    height: '96px'
  },
  button: {
    width: '100%'
  }
})

class Login extends Component {
  static getInitialProps ({ query: { redirectURI, errorMessage, errorInput } }) {
    return {
      redirectURI,
      errorMessage,
      errorInput
    }
  }

  constructor (props, context) {
    super(props, context)

    this.state = {
      publicKey: '',
      secret: '',
      isCopied: false,
      isAccepted: false
    }
  }

  async componentWillMount () {
    // TODO : read user data from database by username
  }

  handleChange = name => event => {
    this.setState({ [name]: event.target.checked })
  }

  onSubmit = e => {
    // No real submit
    e.preventDefault()

    console.log(e.target.publicKey.value)
    console.log(e.target.user.value)
    console.log(e.target.password.value)

    const publicKey = e.target.publicKey.value
    const user = e.target.user.value
    const password = e.target.password.value

    Keybase.login(user, password).then(result => {
      console.log(result)
      // if (result.status.code === 0) {
      /*
        const { username } = result.me
        {
          username : {
            psid: 123456,
            xlm : publicKey
          }
        }
        */
      // }
    })
  }

  render () {
    const { userAgent, classes } = this.props

    return (
      <MuiThemeProvider theme={theme}>
        <Card className={classes.card}>
          <form onSubmit={this.onSubmit}>
            <CardContent>
              <div className={classes.container}>
                <Typography variant='title' gutterBottom>
                  Account
                </Typography>
                <FormGroup row>
                  <FormControl fullWidth>
                    <InputLabel htmlFor='publicKey'>Public Key</InputLabel>
                    <Input id='publicKey' multiline value={this.state.publicKey} />
                  </FormControl>
                  <FormControl fullWidth>
                    <InputLabel htmlFor='username'>Keybase's user Name</InputLabel>
                    <Input id='username' multiline value={this.state.username} />
                  </FormControl>
                  <Divider className={classes.divider} />
                  <FormControl fullWidth>
                    <InputLabel htmlFor='password'>Keybase's password</InputLabel>
                    <Input id='password' multiline value={this.state.password} type='password' />
                  </FormControl>
                  <Divider className={classes.divider} />
                </FormGroup>
              </div>
            </CardContent>
            <CardActions>
              <Grid container spacing={24}>
                <Grid item xs={8}>
                  <Button>Read Terms</Button>
                </Grid>
                <Grid item xs={4}>
                  <Button type='submit' variant='raised' color='primary' className={classes.button}>OK</Button>
                </Grid>
              </Grid>
            </CardActions>
          </form>
        </Card>
      </MuiThemeProvider>
    )
  }
}

export default withStyles(styles)(App)
