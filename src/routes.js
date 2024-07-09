import { BrowserRouter, Routes, Route } from "react-router-dom";
import { DefaultPage } from 'components/DefaultPage';
import { Menu } from 'components/Menu'
import { Home } from './pages/Home';
import { About } from './pages/About';

export function RoutesComponent() {
  return (
    <BrowserRouter>
      <Menu />
      
      <Routes>
        <Route path="/" element={<DefaultPage />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
        </Route>

        <Route path="*" element={<div>Página não encontrada</div>} />
      </Routes>
    </BrowserRouter>
  );
}