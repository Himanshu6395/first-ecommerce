import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard.jsx";
import Layout from "./component/Layout.jsx";
import Register from "./pages/adminRegister.jsx";
import Login from "./pages/login.jsx";
import { Toaster } from "react-hot-toast";
import ProtectedRoute from "../src/api/COMMON/protectedRoute.jsx";
import Addproduct from "../src/Product/addProduct.jsx";
import AddCategory from "./pages/category.jsx"
import SubCategory from "./pages/subCategory.jsx";
export default function App() {
  return (
    <>
      <Toaster
        position="top-right"
        toastOptions={{
          duration: 2000,
          style: { background: "#333", color: "#fff" },
        }}
      />

      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route
          path="/Dashboard"
          element={
            <ProtectedRoute>
              <Layout>
                <Dashboard />
              </Layout>
            </ProtectedRoute>
          }
        />
        <Route path="/add-product" element={<ProtectedRoute><Layout><Addproduct/> </Layout></ProtectedRoute> }/>
        <Route path="/add-category" element={<ProtectedRoute><Layout><AddCategory/> </Layout></ProtectedRoute> }/>
        <Route path="/add-subcategory" element={<ProtectedRoute><Layout><SubCategory/> </Layout></ProtectedRoute> }/>

      </Routes>
    </>
  );
}
