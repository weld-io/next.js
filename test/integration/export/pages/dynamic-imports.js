import Link from '@weld-io/weld-next/link'
import dynamic from '@weld-io/weld-next/dynamic'

const DynamicComponent = dynamic(import('../components/hello'))

export default () => (
  <div id='dynamic-imports-page'>
    <div>
      <Link href='/'>
        <a>Go Back</a>
      </Link>
    </div>
    <DynamicComponent />
  </div>
)
