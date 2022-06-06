
import { BrowserRouter } from 'react-router-dom'
import Routing from './Routes';
import { Suspense } from 'react';
import Loader from './Components/Loader';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
      <Suspense fallback={<Loader/>} >
        <Routing />
      </Suspense>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
