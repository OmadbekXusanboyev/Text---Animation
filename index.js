const containerEl = document.querySelector(".container");

const workName = ["Web Developer", "Front-End Developer","Telegam Bot Developer"];

let count = 0;

let characterIndex = 0;

const typeText = () => {
     characterIndex++;
     containerEl.innerHTML = `
          <h1>I am a ${workName[count].slice(0, characterIndex)}</h1>
     `;
     if (characterIndex === workName[count].length) {
          count++;
          characterIndex = 0;
     }
     if (count === workName.length) {
          count = 0;
     }
     setTimeout(typeText, 200);

}

typeText()