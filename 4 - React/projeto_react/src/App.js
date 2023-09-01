import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/About";
import { CounterProvider } from "./context/counter";
import CounterPage from "./pages/Counter";
import AddPage from "./pages/AddPayment";
import Extract from "./pages/Extract"

function App() {
  return (
    <>
      <CounterProvider>
        <NavBar />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/sobre' element={<AboutPage />} />
          <Route path='/count' element={<CounterPage />} />
          <Route path='/addPayment' element={<AddPage/>} />
          <Route path='/extract' element={<Extract/>} />
        </Routes>
      </CounterProvider>
    </>
  );
}
 
export default App;