const getForm = document.querySelector(".form")
const getSave = document.querySelector(".save");
const getDel = document.querySelector(".del");
const getName = document.querySelector(".name");
const getPhone = document.querySelector(".phone");
const getEmail = document.querySelector(".email");
const getMsgSave = document.querySelector(".msg-save");
const getMsgDel = document.querySelector(".msg-del");

// збереження
getForm.addEventListener("submit", function (noo) {
  noo.preventDefault(); // щоб сторінка не перезавантажувалась через форму

  const contact = {
    name: getName.value,
    phone: getPhone.value,
    email: getEmail.value,
  };

  const contacts = JSON.parse(localStorage.getItem("contacts")) || [];

  contacts.push(contact)

  localStorage.setItem("contacts", JSON.stringify(contacts));
  getMsgSave.textContent = "Контакт збережено 😍";
   setTimeout(() => getMsgSave.textContent = "", 1000);
  getForm.reset();

});

// видалення всіх контактв
getDel.addEventListener("click", function (nooo) {
    nooo.preventDefault();

    localStorage.removeItem("contacts")
      getMsgDel.textContent = "Всі контакти видалено 😓";
      setTimeout(() => getMsgDel.textContent = "", 1000);
})