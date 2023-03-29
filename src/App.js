import React from 'react'
import {  Header, Footer, Blog, Possibility, Features, WhatGPT } from './container'
import { Navigation, Brand, Cta } from './components'
import './App.css'

function App() {
  return (
    <div className="App">
        <div className="gradient__bg">
          <Navigation></Navigation>
          <Header></Header>
        </div>
        <Brand></Brand>
        <WhatGPT></WhatGPT>
        <Features></Features>
        <Possibility></Possibility>
        <Cta></Cta>
        <Blog></Blog>
        <Footer></Footer>
    </div>
  )
}

export default App