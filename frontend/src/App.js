import { Route, Routes, Navigate } from 'react-router-dom';


import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Profile from './components/Profile/Profile';

import "bootstrap/dist/css/bootstrap.min.css";


function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Navigate to ="/Home" />} />
        <Route path='/home/*' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/profile' element={<Profile />} />
      </Routes> 
    </div>
  );
}


export default App;

//import Article from './components/Article/Article';

/*      <Route path="/user" component={<FormDataBoardUser />} />
        <Route path="/admin" component={<BoardAdmin />} />       
        <Route path='/article' element={<Article />} />
*/

//https://stackoverflow.com/questions/58924617/componentwillreceiveprops-has-been-renamed