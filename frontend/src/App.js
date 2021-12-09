import { Route, Routes, Navigate } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Profile from './components/Profile/Profile';
import AddArticle from './components/AddArticle.js/AddArticle';
import Article from './components/Article/Article';
import ArticlesList from './components/ArticlesList/ArticlesList';

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
        <Route path='/articles/*' element={<ArticlesList />} />
        <Route path='/add' element={<AddArticle />} />
        <Route path='/articles/:id' element={<Article />} />
      </Routes> 
    </div>
  );
}


export default App;

//import Article from './components/Article/Article';

/*      
        <Route path='/articles' element={<Navigate to ="/ArticlesList" />} />
        <Route path='/articles' element={<ArticlesList />} />
        <Route path="/user" element={<FormDataBoardUser />} />    
        
*/

//https://stackoverflow.com/questions/58924617/componentwillreceiveprops-has-been-renamed