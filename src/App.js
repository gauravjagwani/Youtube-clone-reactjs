
import './App.css';
import Header from './components/Header';
import Body from './components/Body';
import { Provider } from 'react-redux';
import store from './utils/store';

function App() {
  return (
    <Provider store = {store}>
    <>
    <Header/>
    <Body/>
    

    
    
    {/*
    Header
    Body
      SideBar
        MenuItems
      Main COntaiuner
        ButtonList
        VideoContainer
          VideoCards

  */}
  </>
  </Provider>
    );
}

export default App;
