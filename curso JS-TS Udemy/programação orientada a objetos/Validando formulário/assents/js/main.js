(function Main() {

  const checkbox = document.querySelector('.checkbox');

  checkbox.addEventListener('click', showPassword);

  function showPassword() {
    const checkboxPassword = document.querySelector('#showPassword');
    const password = document.querySelectorAll('.pass');

    if (checkboxPassword.checked) {
      password.forEach(ele => ele.type = 'text')
    } else {
      password.forEach(ele => ele.type = 'password')
    }
  };

  class ValidaFormulário {
    constructor({name, lastname, cpf, user, password, repeatPassword}) {
      Object.defineProperty(this, 'cpf', {
        enumerable: false,
        writable: false,
        configurable: false,
        value: cpf.replace(/\D+/g, '')
      });
      Object.defineProperty(this, 'password', {
        enumerable: false,
        writable: false,
        configurable: false,
        value: password
      });
      Object.defineProperty(this, 'repeatPassword', {
        enumerable: false,
        writable: false,
        configurable: false,
        value: repeatPassword
      });
      this.name = name;
      this.lastname = lastname;
      this.user = user;
    }

    validField() {
      let valid = true;

      for (const iterator of form.querySelectorAll('.invalid')) {
        iterator.remove();
      }

      for(const target of form.querySelectorAll('.valid')) {
        const label = target.previousElementSibling.innerText.replace(':', '');

        if (!target.value) {
          this.createError(`O campo ${label} não pode estar vazio`, target)
          valid = false;
        }

        if (target.classList.contains('cpf')) {
          if (!new ValidaCpf(this.cpf).validar()) {
            this.createError(`O CPF deve ser válido`, target);
            valid = false;
          };
        }

        if (target.classList.contains('user')) {
          if (!this.validUser()) valid = false;
        }

        if (target.classList.contains('password')) {
          if (!this.validPassword()) valid = false
        }
      }

      return valid
    }

    validUser() {
      let valid = true;
      const inputUser = form.querySelector('#user');
      const regex = /[^a-zA-Z0-9]/g;

      if (this.user.match(regex) !== null) {
        this.createError("O usuário só pode conter letras e/ou números", inputUser);
        valid = false;
      }

      if (this.user.length < 3 || this.user.length > 12) {
        this.createError("O usuário deve ter entre 3 e 12 caracteres", inputUser);
        valid = false;
      }

      return valid;
    }

    validPassword() {
      let valid = true;
      const inputPassword = form.querySelector('#password');
      const inputRepeatPassword = form.querySelector("#repeatPassword");

      if (this.password.length < 6 || this.password.length > 12) {
        this.createError('A senha precisa ter entre 6 a 12 caracteres', inputPassword);
        valid = false;
      }
      

      if (this.password != this.repeatPassword) {
        this.createError('As senhas devem ser iguais', inputRepeatPassword)
        valid = false;
      } 

      return valid;
    }

    createError(msg, target) {
      const span = document.createElement('span');
      span.innerText = msg;
      span.classList.add('invalid');
      target.insertAdjacentElement("afterend", span); // insere um elemento ao final do pai do elemento chamado
    }

    validar(ev) {
      ev.preventDefault();

      if (this.validField()) {
        alert('Formulário enviado')
        form.submit();
      }
    }
  }

  class ValidaCpf {
    constructor(cpfEnviado) {
      Object.defineProperty(this, "cpfLimpo", {
        enumerable: false,
        writable: false,
        configurable: false,
        value: cpfEnviado.replace(/\D+/g, '')
      })
    }
  
    isSequence() {
      return this.cpfLimpo.charAt(0).repeat(11) === this.cpfLimpo;
    }
  
    geraDigito(cpfSemDigito) {
      let total = 0;
      let reverso = cpfSemDigito.length + 1;
  
      for(let stringNumerica of cpfSemDigito) {
        total += Number(stringNumerica) * reverso;
        reverso--;
      }
  
      const digito = 11 - (total % 11);
      return digito <= 9 ? String(digito) : '0';
    }
  
    geraNovoCpf() {
      const nineDigits = this.cpfLimpo.slice(0, -2);
      const oneDigite = this.geraDigito(nineDigits);
      const twoDigite = this.geraDigito(nineDigits + oneDigite)
  
      return this.validarIgualdade(nineDigits + oneDigite + twoDigite);
    }
  
    validarIgualdade(cpf) {
      return cpf === this.cpfLimpo;
    }
  
    validar() {
      if (!this.cpfLimpo) return false;
      if (typeof this.cpfLimpo !== 'string') return false;
      if (this.cpfLimpo.length !== 11) return false;
      if (this.isSequence()) return false
      if (this.geraNovoCpf()) return true
      return false;
    }
  }

  function CreateUser() {
    return {
        name: document.querySelector("#name").value,
        lastname: document.querySelector("#lastname").value,
        cpf: document.querySelector("#cpf").value,
        user: document.querySelector("#user").value,
        password: document.querySelector("#password").value,
        repeatPassword: document.querySelector("#repeatPassword").value
    }
  }

  const form = document.querySelector('form');
  form.addEventListener('submit', (ev) => {
    const data = new CreateUser();
    const validarForm = new ValidaFormulário(data);
    validarForm.validar(ev);
  });
})();