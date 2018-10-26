import React from 'react'
import dynamic from '@weld-io/weld-next/dynamic'

const HmrDynamic = dynamic(import('../../components/hmr/dynamic'))

export default () => {
  return (
    <HmrDynamic />
  )
}
