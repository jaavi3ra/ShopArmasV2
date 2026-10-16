import { useState } from "react";

import { LoginTemplate } from "../components/template/LoginTemplate";
import { RegisterTemplate } from "../components/template/RegisterTemplate";

import {
  validarCorreo,
  validarPassword
} from "../utils/validacion";

export function Login() {
  const [activeTab, setActiveTab] = useState("login");

  // LOGIN
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  // REGISTRO
  const [name, setName] = useState("");
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [registerEmailError, setRegisterEmailError] = useState("");
  const [registerPasswordError, setRegisterPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");

  // =========================
  // LOGIN
  // =========================

  function handleLoginSubmit(event) {
    event.preventDefault();

    setEmailError("");
    setPasswordError("");

    let formularioValido = true;

    if (!email.trim()) {
      setEmailError("El correo es obligatorio.");
      formularioValido = false;
    } else if (!validarCorreo(email)) {
      setEmailError("Ingresa un correo válido.");
      formularioValido = false;
    }

    if (!password.trim()) {
      setPasswordError("La contraseña es obligatoria.");
      formularioValido = false;
    }

    if (!formularioValido) {
      return;
    }

    console.log("Login correcto");
    console.log(email, password);
  }

  // =========================
  // REGISTRO
  // =========================

  function handleRegisterSubmit(event) {
    event.preventDefault();

    setRegisterEmailError("");
    setRegisterPasswordError("");
    setConfirmPasswordError("");

    let formularioValido = true;

    if (!registerEmail.trim()) {
      setRegisterEmailError("El correo es obligatorio.");
      formularioValido = false;
    } else if (!validarCorreo(registerEmail)) {
      setRegisterEmailError("Ingresa un correo válido.");
      formularioValido = false;
    }

    if (!registerPassword.trim()) {
      setRegisterPasswordError("La contraseña es obligatoria.");
      formularioValido = false;
    } else if (!validarPassword(registerPassword)) {
      setRegisterPasswordError(
        "Debe tener al menos 8 caracteres, una mayúscula, una minúscula y un número."
      );

      formularioValido = false;
    }

    if (!confirmPassword.trim()) {
      setConfirmPasswordError("Debes repetir la contraseña.");
      formularioValido = false;
    } else if (registerPassword !== confirmPassword) {
      setConfirmPasswordError("Las contraseñas no coinciden.");
      formularioValido = false;
    }

    if (!formularioValido) {
      return;
    }

    console.log("Registro correcto");

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

          emailError={emailError}
          passwordError={passwordError}

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

          emailError={registerEmailError}
          passwordError={registerPasswordError}
          confirmPasswordError={confirmPasswordError}

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