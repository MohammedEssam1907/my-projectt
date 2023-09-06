import React, { useContext } from 'react';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import MainHeader from './Components/MainHeader/MainHeader';
import AuthContext from './Components/Store/AuthContext';

function App() {
  const ctx = useContext(AuthContext)
  return <>
    <React.Fragment>
          <MainHeader />
            <main>
              {!ctx.isLoggedIn && <Login />}
              {ctx.isLoggedIn && <Home />}
            </main>
    </React.Fragment>
  </>;
}

export default App;
