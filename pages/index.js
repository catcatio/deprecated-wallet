import React, { Component } from 'react'
import Link from 'next/link'

// Core
import { createAccount } from '../lib/xlm'

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

class App extends Component {
  constructor (props, context) {
    super(props, context)

    this.state = {
      publicKey: '',
      secret: '',
      isCopied: false,
      isAccepted: false
    }
  }

  async componentDidMount () {
    const account = await createAccount()
    this.setState(Object.assign(account))
  }

  handleChange = name => event => {
    this.setState({ [name]: event.target.checked })
  }

  onSubmit = e => {
    // No real submit
    e.preventDefault()

    console.log(e.target.publicKey.value)
    console.log(e.target.secret.value)
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
                  <Divider className={classes.divider} />
                  <FormControl fullWidth>
                    <InputLabel htmlFor='secret'>Secret</InputLabel>
                    <Input id='secret' multiline value={this.state.secret} />
                  </FormControl>
                  <Divider className={classes.divider} />
                  <FormControl fullWidth>
                    <FormControlLabel
                      control={<Checkbox checked={this.state.isCopied} onChange={this.handleChange('isCopied')} value='isCopied' color='primary' />}
                      label='I made a copy of public key and secret some where privately'
                    />
                    <FormControlLabel
                      control={<Checkbox checked={this.state.isAccepted} onChange={this.handleChange('isAccepted')} value='isAccepted' color='primary' />}
                      label='I understand and will use this with my own risk'
                    />
                  </FormControl>
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
