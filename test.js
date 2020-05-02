function showModal(modalId,element) {
  var modal;

  modal = document.getElementById(modalId);
  modal.classList.add("show-modal");
}

function hideModal(modalId,element) {
  var modal;
  modal = document.getElementById(modalId);
  modal.classList.remove("show-modal");
}
