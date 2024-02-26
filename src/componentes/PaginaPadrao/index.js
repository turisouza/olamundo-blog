import Banner from "componentes/Banner";
import { Outlet } from "react-router-dom";

export default function PaginaPadrao() {
  return (
    <main>
      <Banner />

      <Outlet />
      {/* Componente do Reacto DOM que vai renderizar a rota que vier da URL do Routes.js */}
    </main>
  );
}
