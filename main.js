async function changeText(text, delay) {
  await new Promise((resolve) => {
    setTimeout(() => {
      content.textContent = text;
      resolve();
    }, delay);
  });
}

const content = document.getElementById("content");
const message = document.getElementById("message");
const yes = document.getElementById("yes");
const no = document.getElementById("no");
var messageCounter = 0;

async function main() {
  await changeText("Hi baby", 1000);
  await changeText("I know it's a little bit late to ask you this", 2500);
  await changeText("Pero...", 2500);

  await changeText("Will you be my Valentine?", 2500);
  document.getElementById("cute__content").style.visibility = "visible";
  document.getElementById("options").style.visibility = "visible";
}

yes.addEventListener("click", () => {
  document.getElementById("cute__content").style.visibility = "hidden";
  document.getElementById("options").style.visibility = "hidden";
  document.getElementById("message").style.visibility = "hidden";

  const kiss = document.createElement("div");
  kiss.id = "kiss";
  kiss.style.visibility = "visible";

  content.textContent = "I'll see you Friday, baby. Mwua.";
  content.appendChild(kiss);
});

no.addEventListener("click", () => {
  switch (messageCounter++) {
    case 0:
      message.textContent = "aba";
      break;
    case 1:
      message.textContent = "luh siya, dalawang beses pa pinindot";
      break;
    case 2:
      message.textContent = "tangina tatlong beses pa";
      break;
    case 3:
      message.textContent = "edi wag";
      break;
    case 4:
      message.textContent = "di na nga e, dun ka na";
      break;
    case 5:
      message.textContent = "ayaw mo talaga?";
      break;
    case 6:
      message.textContent = ":((";
      break;
    case 7:
      message.textContent =
        "okay lang, alam kong hanggang ganto lang naman ako haha";
      break;
    case 8:
      message.textContent = "alam ko naman na hanggang dito lang tayo..";
      break;
    case 9:
      message.textContent = "LUL HAHAHAHAHA wala kang choice, mag-yes ka";
      break;
    case 10:
      message.textContent = "ahhh no pa rin. haha, wait";
      setTimeout(() => {
        no.style.visibility = "hidden";
        message.textContent = "ayan wala ka ng no hahaha iyak";
      }, 2500);
      break;
  }
});

main();
