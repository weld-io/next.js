import dynamic from '@weld-io/weld-next/dynamic'

const Hello = dynamic(import(/* webpackChunkName: 'hello-world' */'../../components/hello-chunkfilename'))

export default Hello
