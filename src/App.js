
import './App.css';
import Header from './components/Header';
import Body from './components/Body';
import { Provider } from 'react-redux';
import store from './utils/store';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainContainer from './components/MainContainer';
import WatchPage from './components/WatchPage';

const appRouter = createBrowserRouter([{
  path: "/",
  element : <Body/>,
  children: [
    {
      path:"/",
      element: <MainContainer/>,
    },
    {
      path:"watch",
      element: <WatchPage/>,
    }
  ]
}])

function App() {
  return (
    <Provider store = {store}>
    <>
    <Header/>
    <RouterProvider router= {appRouter}/>
    

    
    
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
