import "./scss/main.scss";

import BreadCrumb from "./components/BreadCrumb/BreadCrumb";
import Header from "./components/Header/Header";
import Title from "./components/Title/Title";
import Category from "./components/Category/Category";
import ProductList from "./components/Product/ProductList";
import { CartProvider } from "./context/CartContext";
import CampaignList from "./components/Campaign/CampaignList";

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
    </>
  );
}

export default App;
