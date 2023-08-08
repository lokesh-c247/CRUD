import Read from "./Read/Read";
import  { Outlet, createBrowserRouter } from "react-router-dom";
import Create from "../src/components/Create/Create";
import Edit from "../src/components/Edit/Edit";
import Header from "./components/Header/Header";
import Error from "./Error/Error";


const App = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  )
}


export const appRouter = createBrowserRouter([
  {
    path : "/",
    element : <App/>,
    errorElement: <Error />,
    children: [
      {
        path : "/",
        element : <Read/>
      },
      {
        path : "/create",
        element : <Create/>
      },
      {
        path : "/edit",
        element : <Edit/>
      }
    ]
  }
])




export default App;
