import * as React from 'react'
import { withRouter } from '@weld-io/weld-next/router'

class PageA extends React.Component {
  goToB () {
    this.props.router.push('/b')
  }

  render () {
    return (
      <div id='page-a'>
        <button onClick={() => this.goToB()}>Go to B</button>
      </div>
    )
  }
}

export default withRouter(PageA)
