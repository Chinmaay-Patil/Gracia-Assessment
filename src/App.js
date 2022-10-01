import Layout from "./pages/Layout";
import { ChakraProvider } from '@chakra-ui/react'



import './App.css'

export default function App() {
  return (

    <div>
      <ChakraProvider> 
      <Layout/>
     </ChakraProvider>
    </div>




  );
}
