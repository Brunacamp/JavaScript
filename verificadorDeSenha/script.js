function verificarSenha() {
      const senha = document.getElementById('senha').value;
      const resultado = document.getElementById('resultado');

      let forca = 0;

      if (senha.length >= 8) forca++;
      if (/[A-Z]/.test(senha) && /[a-z]/.test(senha)) forca++;
      if (/\d/.test(senha)) forca++;
      if (/[\W_]/.test(senha)) forca++;

      // Reset classes
      resultado.className = 'strength';

      if (forca <= 1) {
        resultado.textContent = 'Senha Fraca';
        resultado.classList.add('fraca');
      } else if (forca === 2 || forca === 3) {
        resultado.textContent = 'Senha Média';
        resultado.classList.add('media');
      } else if (forca === 4) {
        resultado.textContent = 'Senha Forte';
        resultado.classList.add('forte');
      } else {
        resultado.textContent = '';
      }
    }