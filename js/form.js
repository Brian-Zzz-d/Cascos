document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("form_signup");

  form.addEventListener("submit", (event) => {
      let isValid = true;

      // Obtener los campos
      const username = document.getElementById("username");
      const password = document.getElementById("password");
      const passwordConfirm = document.getElementById("password_confirm");

      // Limpiar errores previos
      document.getElementById("error_username_required").style.display = "none";
      document.getElementById("error_password_required").style.display = "none";
      document.getElementById("error_password_confirm_required").style.display = "none";
      document.getElementById("error_password_match_required").style.display = "none";

      // Validar nombre de usuario
      if (username.value.trim() === "") {
          document.getElementById("error_username_required").style.display = "block";
          isValid = false;
      }

      // Validar contraseña
      if (password.value.trim() === "") {
          document.getElementById("error_password_required").style.display = "block";
          isValid = false;
      }

      // Validar confirmación de contraseña
      if (passwordConfirm.value.trim() === "") {
          document.getElementById("error_password_confirm_required").style.display = "block";
          isValid = false;
      }

      // Validar coincidencia de contraseñas
      if (password.value.trim() !== passwordConfirm.value.trim()) {
          document.getElementById("error_password_match_required").style.display = "block";
          isValid = false;
      }

      // Evitar envío si hay errores
      if (!isValid) {
          event.preventDefault();
      }
  });
});
