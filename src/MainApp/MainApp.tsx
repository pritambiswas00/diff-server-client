import React from 'react'
import ErrorBoundary from '../Components/ErrorBoundry';
import Footer from './Footer/Footer'
import Header from './Header/Header';
import "./MainApp.scss"

const  MainApp:React.FC = ()=>{
  return (
    <ErrorBoundary fallback={"Error in the Main App"}>
    <div className='container'>
         <Header/>
         {/* <Footer/> */}
    </div>
    </ErrorBoundary>
  )
}

export default MainApp