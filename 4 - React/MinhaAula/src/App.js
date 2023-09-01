import { Route, Router, RouterProvider, Routes, createBrowserRouter } from 'react-router-dom';
import './App.css';
import React, {useState} from 'react';
import Text from './components/Text';
import Counter from './components/Counter';
import FirstComponent from './components/FirstComponent'
import Alert from './components/Alert';
import Sass from './components/Sass';
import { Header, Main, Item } from './styled';
import ListaDeTarefas from './components/ListaDeTarefas';

import HomePage from './pages/HomePage';
import AboutPage from './pages/About';
import NavBar from './components/NavBar';
// import NotFoundPage from './pages/NotFound';


function App() {
  const [show, setShow] = useState(false);

  return (
    // <React.Fragment>
    //   {/* <FirstComponent /><br/>
    //   <Counter /><br/>
    //   <Text setShow={setShow}/><br/>
    //   <Alert show={show} setShow={setShow}/><br/> */}
    //   <Sass/>
    // </React.Fragment>
    // <React.Fragment>
    //   <Header>
    //     <Item color='red'>Menu</Item>
    //     <Item color='yellow'>Home</Item>
    //     <Item color='blue'>Sair</Item>
    //   </Header>

    //   <Main>
    //     <ListaDeTarefas/>
    //   </Main>
    // </React.Fragment> 
    <>
      <NavBar />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/sobre' element={<AboutPage />} />
          {/* <Route path='*' element={<NotFoundPage />} /> */}
        </Routes>
    </>
  );
}

export default App;

