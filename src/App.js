import './App.css';
import {BrowserRouter, Route, Routes}from 'react-router-dom'
import Profile from './pages/profile';

function App() {
  return (
<>
<BrowserRouter>
<Routes>
  <Route
  path='/'
  element={
    <div className="App">
      <a href="http://fadfaasd.herokuapp.com/api/v1/auth/google">
        <h1>Login google</h1> </a>
    </div>
  }
  />
  <Route
  path='/:token'
  element = {
    <Profile/>
  } 
  />
</Routes>
</BrowserRouter>
</>
 
  );
}

export default App;
