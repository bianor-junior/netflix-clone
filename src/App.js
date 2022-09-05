import categorias from './api';
import './App.css';
import Row from './components/Row';
import Banner from './components/Banner';


function App() {
  return (
    <div className="App">
      {/* menu */}
      <Banner />
      {categorias.map((category) => {
        return <Row key={category.name}
        title={category.title}
        path={category.path}
        isLarge={category.isLarge}
        />
      })}
    </div>
  );
}

export default App;
