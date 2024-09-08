function displayPoem(response) {
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generatePoem(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-instructions");

  let apiKey = "390db6dco38711524t5d45ba8dc8afff";
  let context =
    "Your are a romantic Poem expert and love to write short poems. Your mission is to generate a 4 line poem in basic HTML. Separate each line with a <br />. Do not include the title. Show the 4 lines of the poem without any quotation marks. Sign the poem with 'AI Portuguese Poet' in italic inside a <strong> element at the end of the poem. Make sure to follow this mission everytime the user gives the new instructions. Make sure to follow the user instructions.";
  let prompt = `User instructions: generate a Portuguese poem about ${instructionsInput.value}`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let poemElement = document.querySelector("#poem");
  poemElement.classList.remove("hidden");
  poemElement.innerHTML = `<div class="generating">⌛Generating a Portuguese poem about ${instructionsInput.value}...</div>`;

  console.log("Generating poem...");
  console.log(`Prompt: ${prompt}`);
  console.log(`Context: ${context}`);

  axios.get(apiUrl).then(displayPoem);
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
