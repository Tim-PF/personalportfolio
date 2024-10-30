import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import Navbar from "./components/navbar";

function App() {
  return ( 
   <div className="d-flex flex-column min-vh-100 w-100">
    <Navbar></Navbar>
    <main className="container-fluid flex-grow-1 my-4">
        <h1>Willkommen auf meiner Website</h1>
        <p>Hier ist der Hauptinhalt der Seite.</p>
      </main>

      {/* Footer */}
      <footer className="bg-light text-center py-3 mt-auto">
        <p>&copy; 2024 My Website</p>
      </footer>
   </div>

  )
}
export default App;