import asset from '@weld-io/weld-next/asset'

export default () => (
  <div id='asset-page'>
    <img src={asset('/myimage.png')} />
  </div>
)
