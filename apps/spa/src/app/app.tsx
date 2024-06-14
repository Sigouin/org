import { Route, Routes } from 'react-router-dom';
import { Products } from '@org/products';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.css';

function Home() {
  return <h1>Home</h1>;
}

export function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/products" element={<Products />}></Route>
    </Routes>
  );
}

export default App;
