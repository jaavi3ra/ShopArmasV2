import { Divider } from "../atomic/Divider";
import { FooterInfo } from "../molecule/FooterInfo";
import '../../styles/organism/footer.css';

export function Footer() {
  return (
    <footer>
      <Divider />
      <FooterInfo />
    </footer>
  );
}