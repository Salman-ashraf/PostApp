
import React from 'react'
import { Outlet } from 'react-router-dom'
import AppBaar from './AppBaar'

const LayOut = () => {
  return (
  <>
  <AppBaar/>
  <Outlet/>
  </>
  )
}

export default LayOut