import { TabButton } from "../atomic/Boton";
import "../../styles/molecule/AuthTabs.css";


export function AuthTabs({ activeTab, onChange }) {
  return (
    <div className="auth-tabs">
      <TabButton
        active={activeTab === "login"}
        onClick={() => onChange("login")}
      >
        LOGIN
      </TabButton>

      <TabButton
        active={activeTab === "register"}
        onClick={() => onChange("register")}
      >
        REGISTRO
      </TabButton>
    </div>
  );
}