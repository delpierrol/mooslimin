// add bootstrap css 
import 'bootstrap/dist/css/bootstrap.min.css'
import '../styles/global.css';
import { useEffect } from "react";
import { SSRProvider } from "react-bootstrap";

export default function App({ Component, pageProps }) {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  return (
    <SSRProvider>
      <Component {...pageProps} />
    </SSRProvider>
  );
}