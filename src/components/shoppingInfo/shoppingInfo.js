var companyCheckbox = document.getElementById("companyCheckboxAddress");
if (companyCheckbox) {
  companyCheckbox.addEventListener("change", function () {
    var companyFields = document.querySelectorAll(".companyAddress-fields");
    companyFields.forEach(function (field) {
      field.style.display = this.checked ? "block" : "none";
    }, this);
  });
}
