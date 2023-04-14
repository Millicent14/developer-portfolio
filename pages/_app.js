import SSRProvider from 'react-bootstrap/SSRProvider'
import Layout from "../components/Layout";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../styles/globals.css";
import { motion } from "framer-motion";
function MyApp({ Component, pageProps, router }) {
  return (
    <SSRProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SSRProvider>
    
  );
}

export default MyApp;
