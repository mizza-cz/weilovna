if (
  document.getElementById("profile-pic") &&
  document.getElementById("input-file")
) {
  let profilePic = document.getElementById("profile-pic");
  let inputFile = document.getElementById("input-file");

  // Присваиваем обработчик события onchange только если элементы существуют
  inputFile.onchange = function () {
    profilePic.src = URL.createObjectURL(inputFile.files[0]);
  };
}
