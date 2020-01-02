const possibilities = ["walcz", "uciekaj"];

const h1 = document.querySelector("h1");
const input = document.querySelector("input");
const btnA = document.querySelector("button.add");
const btnC = document.querySelector("button.clean");
const btnAd = document.querySelector("button.showAdvice");
const btnO = document.querySelector("button.showOptions");

const addPoss = e => {
  if (input.value == 0) {
    alert("Nie możesz dodawać pustych rad");
  } else {
    e.preventDefault();
    possibilities.push(input.value);
    alert(`Dodałeś radę: ${input.value}`);
    input.value = "";
  }
};

const showOption = () => {
  if (possibilities.length == 0) {
    alert("Nie mam rozwiązań, musisz je dopisać. Albo poproś o to kogoś");
  } else {
    textAlert = "Możliwe rozwiązania: \n";
    possibilities.forEach(poss => {
      textAlert += `- ${poss} \n`;
    });

    alert(textAlert);
  }
};

const cleanPoss = e => {
  e.preventDefault();
  possibilities.length = 0;
  h1.textContent = "";
};

const showAdvice = e => {
  if (possibilities.length == 0) {
    alert(
      "Nie mamy żadnej odpowiedzi, dodaj je lub poproś kogoś, żeby to zrobił"
    );
  } else e.preventDefault();
  h1.textContent =
    possibilities[Math.floor(Math.random() * possibilities.length)];
};

btnA.addEventListener("click", addPoss);
btnC.addEventListener("click", cleanPoss);
btnAd.addEventListener("click", showAdvice);
btnO.addEventListener("click", showOption);
