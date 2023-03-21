import { StrictMode } from 'react';
import ReactDOM from 'react-dom';

import Header from './Components/Header/Header';
import Main from './Components/Main/Main';
import Footer from './Components/Footer/Footer';

import Content from './Content/data';

const {
  header: { headerCopy },
  main: { mainCopy },
  footer: { currentYear, footerCopy }
} = Content;

const rootElement = document.getElementById('root');
ReactDOM.render(
  <StrictMode>
    <div id="allHolder" className="flex flex-col h-screen">
      <Header headerCopy={headerCopy} />
      <Main mainCopy={mainCopy} />
      <Footer footerYear={currentYear} footerCopy={footerCopy} />
    </div>
  </StrictMode>,
  rootElement
);

// https://codesandbox.io/s/1w0o1qv783?file=/src/index.js || https://codesandbox.io/s/basic-contentful-example-react-app-tbty6
