
import { HomeTemplate } from "../components/template/HomeTemplate";
import "../styles/pages/homePage.css";

export  function Home() {
  return (
    <div className="home-page">
  

      <main className="home-content">
        <h1>Productos disponibles</h1>

        <HomeTemplate />
      </main>

  
    </div>
  );
}