$(document).ready(function () {
  // Общие настройки валидации
  $.validator.addMethod(
    "letters",
    function (value, element) {
      return this.optional(element) || /^[a-zA-Z ]*$/.test(value);
    },
    "Please enter only letters."
  );

  // Метод валидации для телефонного номера
  $.validator.addMethod(
    "phoneCZ",
    function (value, element) {
      return this.optional(element) || /^(\+420)?\d{9}$/.test(value);
    },
    "Prosím, zadejte platné telefonní číslo ve formátu +420XXXXXXXXX nebo XXXXXXXXX."
  );

  // Валидация для первой формы
  var $form = $(".formLogin"),
    $successMsg = $(".alert");
  $form.validate({
    rules: {
      email: {
        required: true,
        email: true,
      },
      password: {
        required: true,
        minlength: 6,
        maxlength: 70,
      },
    },
    messages: {
      email: "Prosím, uveďte platnou e-mailovou adresu",
      password: "Uveďte heslo",
    },
    submitHandler: function () {
      $successMsg.show();
    },
  });

  // Валидация для второй формы
  var $formRegistration = $(".formRegistration");
  $formRegistration.validate({
    rules: {
      titul: {
        letters: true,
      },
      name: {
        required: true,
        minlength: 3,
        letters: true,
      },
      surname: {
        required: true,
        minlength: 3,
        letters: true,
      },
      emailPerson: {
        required: true,
        email: true,
      },
      telNumber: {
        phoneCZ: true,
        required: true,
      },
      passPerson: {
        required: true,
        minlength: 6,
        maxlength: 70,
      },
      passPersonn: {
        required: true,
        equalTo: "#passPerson",
      },
      street: {
        required: true,
        minlength: 4,
      },
      refNumber: {
        required: true,
      },
      refNumComp: {
        required: true,
      },
      psc: {
        required: true,
        minlength: 4,
      },
      city: {
        required: true,
      },
      state: {
        required: true,
      },
      streetComp: {
        required: true,
        minlength: 4,
      },
      pscComp: {
        required: true,
        minlength: 4,
      },
      cityComp: {
        required: true,
      },
      nameComp: {
        required: true,
        minlength: 3,
        letters: true,
      },
      dic: {
        required: true,
        minlength: 4,
      },
      ico: {
        required: true,
        minlength: 4,
      },
    },
    messages: {
      name: "Prosím, uveďte svoje jméno",
      surname: "Prosím, uveďte svoje příjmení",
      emailPerson: "Prosím, uveďte platnou e-mailovou adresu",
      telNumber:
        "Prosím, zadejte platné telefonní číslo ve formátu +420XXXXXXXXX",
      passPerson: "Prosím, uveďte heslo",
      passPersonn: "Prosím, znovu uveďte heslo",
      street: "Prosím, uveďte ulici",
      refNumber: "Prosím, uveďte číslo popisné",
      psc: "Prosím, uveďte PSČ",
      city: "Prosím, uveďte město",
      state: "Prosím, uveďte zemi",
      streetComp: "Prosím, uveďte ulici",
      pscComp: "Prosím, uveďte PSČ",
      cityComp: "Prosím, uveďte město",
      nameComp: "Prosím, uveďte název společnosti",
      ico: "Prosím, uveďte IČO",
      dic: "Prosím, uveďte DIČ",
      refNumComp: "Prosím, uveďte číslo popisné",
    },
    submitHandler: function () {
      $successMsg.show();
    },
  });

  // Обработка переключения показа/скрытия пароля
  $(".toggle-password").click(function () {
    var input = $(this).siblings($(this).attr("toggle"));
    if (input.attr("type") === "password") {
      input.attr("type", "text");
      $(this).addClass("active");
    } else {
      input.attr("type", "password");
      $(this).removeClass("active");
    }
  });

  // Показ/скрытие полей для компании
  document
    .getElementById("companyCheckbox")
    .addEventListener("change", function () {
      var companyFields = document.querySelectorAll(".company-fields");
      companyFields.forEach(function (field) {
        field.style.display = this.checked ? "block" : "none";
      }, this);
    });
});
