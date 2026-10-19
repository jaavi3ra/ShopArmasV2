import React from 'react';
import { FormTitle } from "../molecule/FormTitle";
import { AuthTabs } from "../molecule/AuthTabs";
import { FormInput } from "../molecule/FormInput";
import { PasswordInput } from "../molecule/passwordInput";
import { Boton } from "../atomic/Boton";

import "../../styles/pages/registerPage.css";

export function RegisterTemplate({
  name,
  email,
  password,
  confirmPassword,
  onNameChange,
  onEmailChange,
  onPasswordChange,
  onConfirmPasswordChange,
  onSubmit,
  onTabChange,
  message = "",
  emailError = "",
  passwordError = "",
  confirmPasswordError = ""
}) {
  return (
    <div className="auth-page">
      <section className="auth-container">

        <FormTitle
          eyebrow="GROVE MARKET ACCESO"
          title="CREAR CUENTA"
          description="Regístrate para administrar tu stash."
        />

        <AuthTabs
          activeTab="register"
          onChange={onTabChange}
        />

        <form
          className="auth-form"
          onSubmit={onSubmit}
          noValidate
        >
          <FormInput
            label="NOMBRE"
            id="register-name"
            type="text"
            placeholder="Carl Johnson"
            value={name}
            onChange={onNameChange}
            autoComplete="name"
            
          />

          <FormInput
            label="CORREO"
            id="register-email"
            type="email"
            placeholder="usuario@email.com"
            value={email}
            onChange={onEmailChange}
            autoComplete="email"
            error={emailError}
          />

          <PasswordInput
            label="CONTRASEÑA"
            id="register-password"
            placeholder="Mínimo 8 caracteres"
            value={password}
            onChange={onPasswordChange}
            autoComplete="new-password"
            error={passwordError}
          />

          <PasswordInput
            label="REPETIR CONTRASEÑA"
            id="register-password-confirm"
            placeholder="Repite tu contraseña"
            value={confirmPassword}
            onChange={onConfirmPasswordChange}
            autoComplete="new-password"
            error={confirmPasswordError}
          />

          <Boton
            type="submit"
            className="auth-submit"
          >
            CREAR CUENTA
          </Boton>

          {message && (
            <div className="auth-message">
              {message}
            </div>
          )}

        </form>

      </section>
    </div>
  );
}