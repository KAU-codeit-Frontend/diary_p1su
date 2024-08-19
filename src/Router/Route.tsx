import { createBrowserRouter } from 'react-router-dom';
import Home from '../Pages/Home/Home';
import New from '../Pages/New/New';
import Diary from '../Pages/Diary/Diary';
import Edit from '../Pages/Edit/Edit';

const Routes = () => createBrowserRouter([
  {
    children:[
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/new',
        element: <New />,
      },
      {
        path: '/edit',
        element: <Edit />,
      },
      {
        path: 'diary',
        element: <Diary />,
      },
    ]
  }
]);
export default Routes;