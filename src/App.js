import "./scss/main.scss";

import BreadCrumb from "./components/BreadCrumb/BreadCrumb";
import Header from "./components/Header/Header";
import Title from "./components/Title/Title";

function App() {
  return (
    <div className="App">
      <Header />
      <Title />
      <BreadCrumb />
    </div>
  );
}

export default App;
