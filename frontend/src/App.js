import { Route, Routes } from 'react-router-dom';


import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
//import Article from './components/Article/Article';
//import Profile from './components/Profile/Profile';

import "bootstrap/dist/css/bootstrap.min.css";


function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
      </Routes> 
    </div>
  );
}


export default App;

/*      <Route path="/user" component={<FormDataBoardUser />} />
        <Route path="/admin" component={<BoardAdmin />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/article' element={<Article />} />
*/

//https://stackoverflow.com/questions/58924617/componentwillreceiveprops-has-been-renamed