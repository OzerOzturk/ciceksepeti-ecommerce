import "./scss/main.scss";

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
      <Header />
      <Title />
      <BreadCrumb />
      <Category />
      <ProductList />
      <CampaignList />
      <Footer />
    </>
  );
}

export default App;
