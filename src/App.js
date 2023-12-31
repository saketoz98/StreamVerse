import "./App.css";
import Header from "./components/Header";
import Body from "./components/Body";
import { Provider } from "react-redux";
import store from "./utils/store";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainContainer from "./components/MainContainer";
import WatchPage from "./components/WatchPage";

const Layout = () => {
  return (
    <>
      <Header />
      <Body />
    </>
  );
}

const appRouter = createBrowserRouter([
  {
    path:"/",
    element: <Layout/>,
    children: [
      {
        path:"/",
        element: <MainContainer/>
      },
      {
        path:"watch",
        element: <WatchPage/>
      }
    ]
  }

]);

function App() {
  console.log("App Component");
  return (
    <Provider store={store}>
      <div >
        <RouterProvider router={appRouter} />
      </div>
    </Provider>
  );
}

export default App;
