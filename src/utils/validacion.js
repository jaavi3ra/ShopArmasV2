export function validarCorreo(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  return regex.test(email);
}

export function validarPassword(password) {
  const largoCorrecto = password.length >= 8;
  const tieneMayuscula = /[A-Z]/.test(password);
  const tieneMinuscula = /[a-z]/.test(password);
  const tieneNumero = /[0-9]/.test(password);

  return (
    largoCorrecto &&
    tieneMayuscula &&
    tieneMinuscula &&
    tieneNumero
  );
}