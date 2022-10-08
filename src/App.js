import "./scss/main.scss";

import BreadCrumb from "./components/BreadCrumb/BreadCrumb";
import Header from "./components/Header/Header";
import Title from "./components/Title/Title";
import Category from "./components/Category/Category";
import { CartProvider } from "./context/CartContext";

function App() {
  return (
    <div className="App">
      <CartProvider>
        <Header />
        <Title />
        <BreadCrumb />
        <Category />
      </CartProvider>
    </div>
  );
}

export default App;
