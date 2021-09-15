import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import ProductItemPage from "./components/Pages/ProductItemPage";
import ProductPage from "./components/Pages/ProductPage";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Route exact path="/">
          <ProductPage />
        </Route>
        <Route exact path="/:id">
          <ProductItemPage />
        </Route>
      </div>
    </BrowserRouter>
  );
}

export default App;
