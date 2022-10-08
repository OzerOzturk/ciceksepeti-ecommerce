import "./scss/main.scss";

import BreadCrumb from "./components/BreadCrumb/BreadCrumb";
import Header from "./components/Header/Header";
import Title from "./components/Title/Title";
import Category from "./components/Category/Category";

function App() {
  return (
    <div className="App">
      <Header />
      <Title />
      <BreadCrumb />
      <Category />
    </div>
  );
}

export default App;
