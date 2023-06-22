import Navigation from "./routes/navigation/navigation.component";
import { Route, Routes } from "react-router-dom";
import Home from "./routes/home/home.component";
import ItemsList from "./components/ItemsList/itemsList.component";
import Cart from "./components/Cart/cart.component";
import SignUp from "./components/SignUp/signup.component";

function App() {
  
  const About = () => {
    return (
      <h1>About page here heeey</h1>
    )
  }

  const Contact = () => {
    return (
      <h1>Contact page here heeey</h1>
    )
  }

  return (
    <Routes>
      <Route exact path="/" element={<Navigation/>}>
        <Route path="/:categoryId" element={<ItemsList/>}/>
        <Route index element={<Home/>}/>
        <Route path="cart" element={<Cart/>}/>
        <Route path="about" element={<About/>}/>
        <Route path="contact" element={<Contact/>}/>
        <Route path="sign-in" element={<SignUp/>}/>  
      </Route>
    </Routes>
  );
}

export default App;
