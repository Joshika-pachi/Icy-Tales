import logo from './logo.svg';
import './App.css';
import NavLayout from './Common_Components/NavLayout';
import Footer from './Common_Components/Footer';
// function App() {
//   return (
//     <div className="App" style={{backgroundColor:'lightblue'}}>
//       <NavLayout />
//     </div>
//   );
// }

// export default App;

function App() {
  return (
    <div
      className="App">
      <NavLayout />
      <Footer />
    </div>
  );
}

export default App;