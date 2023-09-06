import React from 'react'
import Navigation from './Navigation'
import Classes from './MainHeader.module.css'
export default function MainHeader() {
  return <>
    <header className={Classes['main-header']}>
        <h1>A Typical Page</h1>
        <Navigation />
    </header>
  </>
}
