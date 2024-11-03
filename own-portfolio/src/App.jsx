import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './App.css';

import Footer from './components/footer';
import Navbar from "./components/navbar";


function App() {
  return ( 
   <div className="d-flex flex-column min-vh-100 w-100">
    <Navbar></Navbar>
    <main className="container-fluid custom-main-bg flex-grow-1">
      </main>

      {/* Footer */}
    <Footer></Footer>
   </div>

  )
}
export default App;