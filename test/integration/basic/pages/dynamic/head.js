import dynamic from 'weld-next/dynamic'
import Head from 'weld-next/head'

const Test = dynamic({
  loader: async () => {
    // component
    return () => {
      return <div className='dynamic-style'>
        <Head>
          <style dangerouslySetInnerHTML={{ __html: `
            .dynamic-style {
              background-color: green;
              height: 200px;
            }
          `}} />
        </Head>
        test
      </div>
    }
  },
  ssr: false
})

export default Test
