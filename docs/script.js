const buttons = document.querySelectorAll(".btn");

const buttonClick = () => {
  buttons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      let buttonsData = e.target.dataset.clicked;
      if (buttonsData == "0") {
        e.target.dataset.clicked = "1";
        e.target.classList.add("btn-shake");
        e.target.innerHTML = "Copied";
      } else if (buttonsData == "1") {
        e.target.dataset.clicked = "0";
        e.target.classList.remove("btn-shake");
        e.target.innerHTML = "Copy";
      }
      findSvgCode(e);
    });
  });
};

const findSvgCode = (e) => {
  const svgContent = e.target.parentElement.previousElementSibling.innerHTML;
  createTextArea(svgContent);
};

const createTextArea = (svgContent) => {
  const createdTxtArea = document.createElement("textarea");
  createdTxtArea.value = "";
  createdTxtArea.value = svgContent;
  document.body.appendChild(createdTxtArea);
  handleCopy(createdTxtArea);
};

const handleCopy = (createdTxtArea) => {
  createdTxtArea.select();
  document.execCommand("copy");
  document.body.removeChild(createdTxtArea);
};

buttonClick();
