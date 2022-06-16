import ReactDOM from 'react-dom/client';
import Router from './Router';
import GlobalStyle from './Styles/GlobalStyled';

const rootElement = document.getElementById('root');
if (!rootElement) throw new Error('Failed to find the root element');
const root = ReactDOM.createRoot(rootElement);

root.render(
  <>
    <GlobalStyle />
    <Router />
  </>
);
