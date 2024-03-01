import React, { Children } from 'react'
import Navber from './Navber/navber'

function Layout({children}) {
  return (
    <div>
        <Navber />
            {children}
    </div>
  )
}

export default Layout
