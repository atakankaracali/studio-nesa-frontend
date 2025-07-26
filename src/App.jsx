import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";
import Products from "./pages/Products";
import About from "./pages/About";
import Contact from "./pages/Contact";
import AvailableProducts from "./pages/AvailableProducts";
import AdminLogin from "./pages/admin/login";
import AdminDashboard from "./pages/admin/Dashboard";
import MessageViewer from "./pages/admin/MessageViewer";

import "./styles/theme.css";
import "./styles/globals.css";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/available" element={<AvailableProducts />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          <Route path="/admin/messages" element={<MessageViewer />} />

        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
