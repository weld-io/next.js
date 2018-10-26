import React from 'react'
import dynamic from 'weld-next/dynamic'

const HmrDynamic = dynamic(import('../../components/hmr/dynamic'))

export default () => {
  return (
    <HmrDynamic />
  )
}
