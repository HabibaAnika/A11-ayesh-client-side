import { createBrowserRouter } from 'react-router-dom'
import Main from '../layouts/Main'
import Home from '../pages/Home'
import Login from '../pages/Authentication/Login'
import Register from '../pages/Authentication/Register'
import ErrorPage from '../pages/ErrorPage'
import AvailableFoods from '../pages/AvailableFoods'
import AddFood from '../pages/AddFood'
import MyFoods from '../pages/MyFoods'
import MyFoodReq from '../pages/MyFoodReq'
import PrivateRoute from '../routes/PrivateRoute'
import FoodDetails from '../components/FoodDetails'
import UpdateFood from '../components/UpdateFood'


const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
         path: '/all-food',
         element: <AvailableFoods/>
      },
      {
        path: '/food/:id',
        element: <PrivateRoute>
            <FoodDetails/>
        </PrivateRoute>,
        loader: ({ params }) =>
          fetch(`https://b9-a11-ayesh-server.vercel.app/food/${params.id}`),
      },
      {
        path: '/update/:id',
        element: (
          <PrivateRoute>
            <UpdateFood />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://b9-a11-ayesh-server.vercel.app/food/${params.id}`),
      },
      {
        path: '/add-food',
        element: <PrivateRoute>
             <AddFood/>
        </PrivateRoute>
      },
      {
        path: '/my-foods',
        element: <PrivateRoute>
             <MyFoods/>
        </PrivateRoute>
        
      },
      {
        path: '/my-req',
        element: <PrivateRoute>
              <MyFoodReq/>
        </PrivateRoute>
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/registration',
        element: <Register />,
      }
    ],
  }
])

export default router
