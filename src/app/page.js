import Bio from '@/component/Bio'
import Layout from '@/component/Layout/layout'
import Menubar from '@/component/Layout/menubar'
import Pageall from '@/component/pageAll'
import React from 'react'

function page() {
  return (
    <div>
      <Layout>
        <Menubar/>
        <Bio/>
        <Pageall/>
      </Layout>
    </div>
  )
}

export default page
