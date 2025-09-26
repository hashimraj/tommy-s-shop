import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "@/contexts/CartContext";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Hoodies from "./pages/Hoodies";
import Sweatshirts from "./pages/Sweatshirts";
import CategoryPage from "@/pages/CategoryPage";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import ProductDetail from "./pages/ProductDetail";
import NewArrivals from "@/pages/NewArrivals";
import AdminLogin from "./pages/AdminLogin";
import AdminDashboard from "./pages/AdminDashboard";

// ✅ Import new pages
import Men from "./pages/Men";
import Women from "./pages/Women";
import Bags from "./pages/Bags";

// ✅ Import ScrollToTop
import ScrollToTop from "./components/ScrollToTop";

import ScrollButton from "./components/ScrollButton";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <CartProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />  {/* ✅ Added here */}
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/hoodies" element={<Hoodies />} />
            <Route path="/sweatshirts" element={<Sweatshirts />} />
            <Route path="/:category" element={<CategoryPage />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/new-arrivals" element={<NewArrivals />} />
            <Route path="/product/:productId" element={<ProductDetail />} />
            <Route path="/adm" element={<AdminLogin />} />
            <Route path="/admin/dashboard" element={<AdminDashboard />} />

            {/* ✅ New routes */}
            <Route path="/men" element={<Men />} />
            <Route path="/women" element={<Women />} />
            <Route path="/bags" element={<Bags />} />

            {/* Catch-all route */}
            <Route path="*" element={<NotFound />} />
          </Routes>
          <ScrollButton /> {/* floating button for manual scroll */}
        </BrowserRouter>
      </TooltipProvider>
    </CartProvider>
  </QueryClientProvider>
);

export default App;
