import { useState } from "react";

import { LoginTemplate } from "../components/template/LoginTemplate";
import { RegisterTemplate } from "../components/template/RegisterTemplate";

export function Login() {
  const [activeTab, setActiveTab] = useState("login");

  //login 
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //registro
  const [name, setName] = useState("");
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  function handleLoginSubmit(event) {
    event.preventDefault();

    console.log("LOGIN");
    console.log(email, password);
  }

  function handleRegisterSubmit(event) {
    event.preventDefault();

    console.log("REGISTRO");
    console.log(
      name,
      registerEmail,
      registerPassword,
      confirmPassword
    );
  }

  return (
    <>
      {activeTab === "login" ? (
        <LoginTemplate
          email={email}
          password={password}
          onEmailChange={(e) => setEmail(e.target.value)}
          onPasswordChange={(e) => setPassword(e.target.value)}
          onSubmit={handleLoginSubmit}
          onTabChange={setActiveTab}
        />
      ) : (
        <RegisterTemplate
          name={name}
          email={registerEmail}
          password={registerPassword}
          confirmPassword={confirmPassword}
          onNameChange={(e) => setName(e.target.value)}
          onEmailChange={(e) => setRegisterEmail(e.target.value)}
          onPasswordChange={(e) =>
            setRegisterPassword(e.target.value)
          }
          onConfirmPasswordChange={(e) =>
            setConfirmPassword(e.target.value)
          }
          onSubmit={handleRegisterSubmit}
          onTabChange={setActiveTab}
        />
      )}
    </>
  );
}