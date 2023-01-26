import React from 'react'
import Header from '../components/header/header';
import Footer from '../components/footer/footer';
import { Outlet } from 'react-router-dom';
const Layout = () => {
  return (
    <>
    <header>
      <Header />
    </header>
    <main><Outlet /></main>
    <footer>
      <Footer />
    </footer>
    </>
  )
}

export default Layout;