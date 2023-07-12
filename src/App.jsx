import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Page from './components/Page'
import BillTo from './components/BillTo'
import { BrowserRouter as Router, Routes,Route,} from "react-router-dom";
import Start from './components/Start'
import InvoiceContextProvider from './context/InvoiceContext'
import PayTo from './components/PayTo'
import AddServices from './components/AddServices'

/*
  <Page invoice ={
        {
          number:'001',
          date:'7/10/2023',

          billTo:{
            companyName:'Christopher Teeter, R.A., @Metamechanics',
            address:'236 West 27th Street, suite 4B new york, ny 10001',
            phone:'212.939.6215',
            email:'metamechanics@metamechanics.com'
          },

          payTo:{
            companyName:'Jacques Adams',
            address:'156 McAdoo ave, Jersey City, New Jersey, 07305',
            phone:'551.222.9882',
            email:'adamsjacques546@gmail.com'
          },

          services:[
            {
              des:'Analyze and identify security risks for company website. Present and recommend solutions.',
              rate:'600.00',
              total:toDec(600)
            },
            
            
          ]
        }
      }></Page>
*/

function App() {
  const [count, setCount] = useState(0)
  const toDec = (v) => {
    v = parseFloat(v).toFixed(2);
    return v 
  }
  return (
    <>
    <InvoiceContextProvider>
      <Router>
        <Routes>
              <Route path="/" element={<Start></Start>}></Route>
              <Route path="/BillTo" element={<BillTo></BillTo>}></Route>
              <Route path="/PayTo" element={<PayTo></PayTo>}></Route>
              <Route path="/AddServices" element={<AddServices></AddServices>}></Route>
              <Route path="/Page" element={<Page></Page>}></Route>
        </Routes>
      </Router>
      </InvoiceContextProvider>
    </>
  )
}

export default App
