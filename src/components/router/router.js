import { createBrowserRouter } from 'react-router-dom';
import App from 'App';
import RouterHome from 'components/router/RouterHome';
import RouterError from 'components/router/pages/RouterError';
import RouterTaeHoon from 'components/router/pages/RouterTaeHoon';
import RouterMinJeong from 'components/router/pages/RouterMinJeong';
import RouterSoJin from 'components/router/pages/RouterSoJin';
import RouterTestPage from './pages/RouterTestPage';

const router = createBrowserRouter([
  {
    path:'/',
    element: <App />,
    children:[
      {
        path:'/', // 👈 App Outlet default 컴포넌트 
        element:<RouterHome />,
        children:[
          {
            path:'/taehoon',
            element:<RouterTaeHoon />
          },
          {
            path:'/minjeong',
            element:<RouterMinJeong />,
          },
          {
            path:'/sojin',
            element:<RouterSoJin />,
          },
          {
            path:'/test',
            element:<RouterTestPage />
          },
        ]
      },
    ]
  },
  {
    path:'*', // 그 외 모든 경로
    element:<RouterError />
  }
])

export default router;