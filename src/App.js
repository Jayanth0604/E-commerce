import './App.css';
import Navbar from './Navbar';
import Footer from './Footer';
import Cart from './Cart';
import Additem from './Additem';
import Item from './Item';
import Items from './Items';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { PersistGate } from 'redux-persist/es/integration/react'
import { createStore } from 'redux'
import rootReducer from './reducers/rootReducer'
import { Provider } from 'react-redux';
import ScrollToTop from 'react-scroll-to-top';
import {
  BrowserRouter as Router,
  Link,
  Routes,
  Route,
}from 'react-router-dom'
import { Persist } from 'react-persist';
import Signinpage from './Signinpage';


function App() {
  const persistConfig = {
    key: 'root',
    storage: storage,
  }
  const persistedReducer = persistReducer(persistConfig, rootReducer);
  const store = createStore(persistedReducer);
  const persistor = persistStore(store);
  return (
    <div className="App">
      <Provider store={store}>
        <PersistGate persistor={persistor}>
      <Router>
      <Navbar/>
      <Routes>
        <Route exact path='/' element={<Items/>}/>
        <Route exact path='/Additems' element={<Additem/>}/>
        <Route exact path='/Cart' element={<Cart/>}/>
        <Route exact path='/Signinpage' element={<Signinpage/>}/>
        
      </Routes>

      </Router>
      </PersistGate>
      </Provider>
      <Footer/>
    </div>
  );
}

export default App;
