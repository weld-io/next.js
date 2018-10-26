import dynamic from '@weld-io/weld-next/dynamic'

const Hello = dynamic(import('../../components/hello.js'))

export default () => <div className='dynamic-page'>
  <Hello />
</div>
