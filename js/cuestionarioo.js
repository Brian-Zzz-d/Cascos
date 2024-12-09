document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("form-signup");

  form.addEventListener("submit", (event) => {
      let isValid = true;

      // Obtener los campos
      const username = document.getElementById("username");
      const password = document.getElementById("password");
      const passwordConfirm = document.getElementById("password-confirm");

      // Limpiar errores previos
      document.getElementById("error-username-required").style.display = "none";
      document.getElementById("error-password-required").style.display = "none";
      document.getElementById("error-password-confirm-required").style.display = "none";
      document.getElementById("error-password-match-required").style.display = "none";

      // Validar nombre de usuario
      if (username.value.trim() === "") {
          document.getElementById("error-username-required").style.display = "block";
          isValid = false;
      }

      // Validar contraseña
      if (password.value.trim() === "") {
          document.getElementById("error-password-required").style.display = "block";
          isValid = false;
      }

      // Validar confirmación de contraseña
      if (passwordConfirm.value.trim() === "") {
          document.getElementById("error-password-confirm-required").style.display = "block";
          isValid = false;
      }

      // Validar coincidencia de contraseñas
      if (password.value.trim() !== passwordConfirm.value.trim()) {
          document.getElementById("error-password-match-required").style.display = "block";
          isValid = false;
      }

      // Evitar envío si hay errores
      if (!isValid) {
          event.preventDefault();
      }
  });
});
