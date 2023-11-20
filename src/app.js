// import the firebase function initialize app
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";

// get the firebase database || any function used must be imported e.g ref, push etc
import {
  getDatabase,
  ref,
  push,
  onValue,
} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";

// get the database url from the firebase project console
const appSettings = {
  databaseURL:
    "https://realtime-database-e6f12-default-rtdb.europe-west1.firebasedatabase.app/",
};

// setting the app variable and passing the appsettings const which links the project to firebase
const app = initializeApp(appSettings);

// creating database variable
const database = getDatabase(app);

// setting up the reference in the database for the project
const EndorsementListInDB = ref(database, "EndorsementList");

// Button declaration
const publishBtn = document.querySelector("#publish-btn");
const endorseEl = document.querySelector("#text-area");

publishBtn.addEventListener("click", () => {
  appendEndorsement(endorseEl);

  // clear input field after publishing
  clearEndorseEl(endorseEl);
});

function appendEndorsement(item) {
  // creates and appends the endorsement container
  let endorseElValue = item.value;
  let endorsementSection = document.querySelector("#endorsement-section");

  let endorsementSectionEl = document.createElement("div");
  endorsementSectionEl.classList.add("endorsement-container");

  endorsementSectionEl.innerHTML = `
            <p>${endorseElValue}</p>  
  `;

  endorsementSection.appendChild(endorsementSectionEl);
}

function clearEndorseEl(clear) {
  clear.value = "";
}
