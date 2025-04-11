const contactUsForm = document.querySelector(".js-contact-us-form");

const validation = new JustValidate(contactUsForm, {
  errorLabelCssClass: "form__label--error",
  errorFieldCssClass: "form__input--invalid",
  successFieldCssClass: "form__input--valid",
  errorLabelStyle: {},
});

validation
  .addField("#name", [
    {
      rule: "required",
      errorMessage: "Введите ваше имя",
    },
    {
      rule: "minLength",
      value: 3,
      errorMessage: "Имя должно содержать по крайней мере 3 символа",
    },
  ])
  .addField("#tel", [
    {
      rule: "required",
      errorMessage: "Введите ваш телефон",
    },
  ])
  .addField("#email", [
    {
      rule: "required",
      errorMessage: "Введите ваш e-mail",
    },
    {
      rule: "email",
      errorMessage: "Введите корректный e-mail",
    },
  ])
  .addField("#checkbox", [
    {
      rule: "required",
      errorMessage: "Примите пользовательское соглашение",
    },
  ])
  .onSuccess(() => {
    contactUsForm.reset();
    validation.refresh();
  });

contactUsForm.addEventListener("submit", (e) => e.preventDefault());
