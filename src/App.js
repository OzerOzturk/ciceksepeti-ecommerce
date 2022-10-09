import "./scss/main.scss";

import { CartProvider } from "./context/CartContext";

//components
import BreadCrumb from "./components/BreadCrumb/BreadCrumb";
import Header from "./components/Header/Header";
import Title from "./components/Title/Title";
import Category from "./components/Category/Category";
import ProductList from "./components/Product/ProductList";
import CampaignList from "./components/Campaign/CampaignList";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <CartProvider>
        <Header />
        <Title />
        <BreadCrumb />
        <Category />
        <ProductList />
        <CampaignList />
      </CartProvider>
      <Footer />
    </>
  );
}

export default App;
