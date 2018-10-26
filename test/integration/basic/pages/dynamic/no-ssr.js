import dynamic from '@weld-io/weld-next/dynamic'

const Hello = dynamic(import('../../components/hello1'), { ssr: false })

export default Hello
