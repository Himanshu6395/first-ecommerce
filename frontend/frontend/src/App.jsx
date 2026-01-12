import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Homepage from './pages/HomePage.jsx'
import Register from './pages/Register.jsx'
import Layout from './common/layout/Layout.jsx'
import './App.css'
import Login from './pages/Login.jsx'
import { Toaster } from 'react-hot-toast';
import ShopContainer from "./pages/shop/shopContainer.jsx"
// import CategoryPage from "./pages/categories.jsx"
function App() {
  return (
    <>
     
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Homepage />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/shop" element={<ShopContainer />} />
            
            {/* <Route path="/category/:main/:sub" element={<CategoryPage />} /> */}

          </Route>
        </Routes>
      </BrowserRouter>
            <Toaster
        position="top-center"
        reverseOrder={false}
        toastOptions={{
          style: {
            fontSize: '18px',      
            padding: '16px 24px',  
            borderRadius: '12px',
            background: '#ff4d4d', 
            color: '#fff',
            fontWeight: '600',
          },
        }}
      />

    </>
  )
}

export default App
