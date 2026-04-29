import { CartProvider } from './CartContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Categories from './components/Categories';
import Products from './components/Products';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';
import CartSidebar from './components/CartSidebar';
import Toast from './components/Toast';

function App() {
  return (
    <CartProvider>
      <div className="min-h-screen bg-ink text-white font-sans">
        <Navbar />
        <Hero />
        <Categories />
        <Products />
        <Features />
        <Testimonials />
        <Newsletter />
        <Footer />
        <CartSidebar />
        <Toast />
      </div>
    </CartProvider>
  );
}

export default App;
