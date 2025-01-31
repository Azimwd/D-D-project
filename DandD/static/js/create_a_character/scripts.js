document.addEventListener("DOMContentLoaded", function () {
  const createCharacterButton = document.querySelector(".add__character");
  if (createCharacterButton) {
      createCharacterButton.addEventListener("click", () => {
          save_character();
      });
  }
});

async function save_character() {
  const data = {
      strength: 10, dexterity: 10, constitution: 10,
      intelligence: 10, wisdom: 10, charisma: 10,
      st_strength: 1, st_dexterity: 1, st_constitution: 1,
      st_intelligence: 1, st_wisdom: 1, st_charisma: 1,
      acrobatics: 1, analysis: 1, athletics: 1, perception: 1,
      survival: 1, performance: 1, intimidation: 1, history: 1,
      sleight_of_hand: 1, magic: 1, medicine: 1, deception: 1,
      nature: 1, insight: 1, religion: 1, stealth: 1,
      persuasion: 1, animal_handling: 1,
      speed: 30, armor_class: 10,
  };

  const csrfToken = getCSRFToken();

  const response = await fetch("/create_a_character/", {
      method: "POST",
      headers: {
          "Content-Type": "application/json",
          "X-CSRFToken": csrfToken,
      },
      body: JSON.stringify(data),
  });

  const result = await response.json();

  if (result.status === "success") {
      addCharacterToPage(result.character_id, result.name, result.character_class, result.current_hp);
  }
}

function addCharacterToPage(id, name, characterClass, hp) {
  const characterContainer = document.getElementById("character-container").querySelector(".row");

  const colDiv = document.createElement("div");
  colDiv.classList.add("col-sm-6", "character-card");
  colDiv.setAttribute("data-id", id);

  colDiv.innerHTML = `
      <div class="card">
          <div class="card-body">
              <h5 class="card-title">Имя: ${name}</h5>
              <p class="card-text">Класс: ${characterClass || "-"}</p>
              <p class="card-text">Хп: ${hp !== null ? hp : "-"}</p>
              <a href="/characteristics/${id}/" class="btn btn-primary">Перейти</a>
          </div>
      </div>
  `;

  characterContainer.appendChild(colDiv);
}

function getCSRFToken() {
  return document.querySelector('meta[name="csrf-token"]').getAttribute("content");
}
