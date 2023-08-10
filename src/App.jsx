import 'bootstrap/dist/css/bootstrap.min.css';
import "./styles/index.css";
import "./styles/features.css";
import Novedades from "./components/Noticias/Novedades";
import NavbarMenu from "./components/navbar/NavbarMenu";
import BannerPrincipal from "./components/banner/BannerPrincipal";

const App = () => {
  return (
    <>
      <NavbarMenu></NavbarMenu>
      <BannerPrincipal></BannerPrincipal>   
      <Novedades></Novedades>
    </>
  );
};

export default App;
