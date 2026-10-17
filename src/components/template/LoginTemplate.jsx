import { FormTitle } from "../molecule/FormTitle";
import { AuthTabs } from "../molecule/AuthTabs";
import { FormInput } from "../molecule/FormInput";
import { PasswordInput } from "../molecule/passwordInput";
import { Boton } from "../atomic/Boton";

import "../../styles/pages/loginPage.css";

export function LoginTemplate({
  email,
  password,
  onEmailChange,
  onPasswordChange,
  onSubmit,
  onTabChange,
  message = "",
  emailError = "",
  passwordError = "",
}) {
  return (
    <div className="auth-page">
      <section className="auth-container">

        <FormTitle
          eyebrow="GROVE MARKET ACCESO"
          title="INICIAR SESIÓN"
          description="Accede a tu cuenta para administrar tu stash."
        />

        <AuthTabs
          activeTab="login"
          onChange={onTabChange}
        />

        <form
          className="auth-form"
          onSubmit={onSubmit}
          noValidate
        >
          <FormInput
            label="CORREO"
            id="login-email"
            type="email"
            placeholder="usuario@email.com"
            value={email}
            onChange={onEmailChange}
            autoComplete="email"
            error={emailError}
          />

          <PasswordInput
            label="CONTRASEÑA"
            id="login-password"
            placeholder="Tu contraseña"
            value={password}
            onChange={onPasswordChange}
            autoComplete="current-password"
            error={passwordError}
          />

          <Boton type="submit" className="auth-submit" >
            ENTRAR
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