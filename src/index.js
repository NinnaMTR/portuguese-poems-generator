function generatePoem(event) {
  event.preventDefault();

  new Typewriter("#poem", {
    strings: "Deus quer, o homem sonha, a obra nasce.",
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
