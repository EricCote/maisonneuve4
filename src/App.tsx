import '~bootstrap/dist/css/bootstrap.min.css';
import '~prism-themes/themes/prism-coldark-dark.min.css';
//import '@codesandbox/sandpack-react/dist/index.css';
import './components/slides/slides.css';

import ThemeProvider from './components/dark-mode/ThemeProvider';

import { RouterProvider } from 'react-router-dom';
import router from './router';

export default function App() {
  return (
    <ThemeProvider theme='auto'>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}
