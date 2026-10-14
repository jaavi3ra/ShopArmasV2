
import { HomeTemplate } from "../components/template/HomeTemplate";
import "../styles/pages/homePage.css";

export  function Home() {
  return (
    <div>
      <HomeTemplate stock={4}>

      <div>Card 1</div>
      <div>Card 2</div>
      <div>Card 3</div>

    </HomeTemplate>
    </div>
  );
}