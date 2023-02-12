import { Routes, Route } from "react-router-dom";
import Home from "./routes/Home/home.route";
import Navigation from "./routes/navigation/navigation.routes";
import CategoryPage from "./routes/category-page/category-page.routes";
import Checkout from "./routes/checkout/checkout.routes";
import Authentication from './routes/authentication/authentication.component'
import ProductPage from "./routes/singleproduct-page/product-page.routes";
import { useSelector } from "react-redux";


const App = () => {
  const { user } = useSelector(state => state.authReducer)
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={user?.email ? <Home /> : <Authentication />} />
        <Route path="help" element={user?.email ? <Help /> : <Authentication />} />
        <Route path='auth' element={<Authentication />} />
        <Route path="category/:id" element={user?.email ? <CategoryPage /> : <Authentication />} />
        <Route path="checkout" element={user?.email ? <Checkout /> : <Authentication />} />
        <Route path="productPage/:id" element={user?.email ? <ProductPage /> : <Authentication />} />
      </Route>
    </Routes>
  );
};

const Help = () => {
  return <h1>Hello help page</h1>;
};

export default App;
