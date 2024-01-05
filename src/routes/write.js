// SOFT DELETE logic (PATCH: add delete attr)

var idDelete;
var deleteForm = document.forms["delete-course-form"];

function deleteActive(event) {
  const deleteBtn = event.target;

  idDelete = deleteBtn.getAttribute("data-id");

  const nameDelete = deleteBtn.getAttribute("data-name");

  console.log(idDelete);

  const notiForm = document.getElementById("delete-course-modal");

  const formDesc = notiForm.querySelector(".modal-body");

  formDesc.innerHTML = `Bạn chắc chắn muốn xóa khóa học ${nameDelete}?`;
}

var deleteConfirmBtn = document.querySelector("#btn-delete-course");

deleteConfirmBtn.onclick = function () {
  deleteForm.action = "/courses/delete/" + idDelete + "?_method=DELETE";

  deleteForm.submit();
};
// DELETE logic

var idSelected;
var deleteForm = document.forms["delete-course-form"];

function deleteActive(event) {
  const deleteBtn = event.target;

  idSelected = deleteBtn.getAttribute("data-id");

  const nameDelete = deleteBtn.getAttribute("data-name");

  console.log(idSelected);

  const notiForm = document.getElementById("noti-course-modal");
  console.log(notiForm);

  const formDesc = notiForm.querySelector(".modal-body");

  formDesc.innerHTML = `Hành động này không thể khôi phục! Bạn chắc chắn muốn xóa khóa học ${nameDelete}?`;
}

var deleteConfirmBtn = document.querySelector("#btn-delete-course");

deleteConfirmBtn.onclick = function () {
  deleteForm.action = "/courses/" + idSelected + "?_method=DELETE";

  deleteForm.submit();
};

// RECOVER  logic

var recoverForm = document.forms["recover-course-form"];

function recoverActive(event) {
  const restoreBtn = event.target;

  idSelected = restoreBtn.getAttribute("data-id");

  console.log(idSelected);

  recoverForm.action = "/courses/restore/" + idSelected + "?_method=PATCH";
  recoverForm.submit();
}
