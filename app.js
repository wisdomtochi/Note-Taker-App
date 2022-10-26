const userInput = document.querySelector(".text-input"),
  notesBtn = document.querySelector("input"),
  noteWrapper = document.querySelector(".notes"),
  popup = document.querySelector(".popup"),
  closePopup = document.querySelector(".popup-close"),
  popupNote = document.querySelector(".popup p");

let user;
let values = [];
// The Note Template
const noteTemplate = () => {
  user = userInput.value;
  
  let html = `
  <div class="change-name">
  <input type="text" class="new-name-input" placeholder="*Rename Your Note Title*" required>
  <button type="submit" class="new-name-btn">Rename</button>
  <button type="submit" class="cancel-btn">Cancel</button>
  </div>
  <div class="note">
  <h2 class="title">My First Note</h2>
  <p>${user}</p>
  <button class="btn-view">View Details</button>
  <button class="btn-clear">Clear Note</button>
  </div>
  `;

  noteWrapper.innerHTML += html;
};

notesBtn.addEventListener("click", (e) => {
  if (userInput.value.length === 0) {
    alert("Please write a note!!!");
  } else {
    noteTemplate();
  }
  userInput.value = "";
});

noteWrapper.addEventListener("click", (e) => {
  if (e.target.classList.contains("btn-view")) {
    scrollTo(0, 0);
    popupTemplate();
    popup.style.display = "block";
    popupNote.textContent = e.target.previousElementSibling.textContent;
  } else if (e.target.classList.contains("btn-clear")) {
    e.target.parentElement.previousElementSibling.remove()
    e.target.parentElement.remove();
  }else if(e.target.classList.contains("new-name-btn")){
    if(e.target.previousElementSibling.value === ""){
      alert("Invalid Title");
    }else {
      e.target.parentElement.nextElementSibling.firstElementChild.textContent = e.target.previousElementSibling.value;
      // removing the renaming section
      e.target.parentElement.classList.remove("show");
      e.target.previousElementSibling.value = "";
    }
  }else if(e.target.classList.contains("cancel-btn")){
    e.target.previousElementSibling.previousElementSibling.value = "";
    e.target.parentElement.classList.remove("show");
  }
});

noteWrapper.addEventListener("dblclick", (e) => {
  if (e.target.classList.contains("title")) {
    e.target.parentElement.previousElementSibling.classList.add("show");
  }
});

// The Popup Template
const popupTemplate = () => {
  let html = `
  <div class="popup">
  <h4 class="popup-close">x</h4>
  <p></p>
  </div>
  `;
};

popup.addEventListener("click", (e) => {
  if (e.target.classList.contains("popup-close")) {
    popup.style.display = "none";
  }
});
