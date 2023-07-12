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
