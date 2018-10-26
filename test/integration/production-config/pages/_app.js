import App, { Container } from '@weld-io/weld-next/app'
import React from 'react'

import '../styles.css'

export default class MyApp extends App {
  render () {
    const { Component, pageProps } = this.props
    return (
      <Container>
        <Component {...pageProps} />
      </Container>
    )
  }
}
