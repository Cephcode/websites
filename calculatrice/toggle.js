// selectionner les elements
let ball = document.querySelector(".ball");
let box = document.querySelector(".box");
let main = document.querySelector(".numbers");
let ecran = document.getElementById("screen");
let special_btn = Array.from(document.querySelectorAll(".blue"));
let btn = Array.from(document.querySelectorAll("input[type=button]"));
let equal = document.querySelector("#egale");
console.log(btn);

// JavaScript code to change the theme based on the selected checkboxes
const normalTheme = document.getElementById("first");
const darkTheme = document.getElementById("second");
const fluorescentTheme = document.getElementById("third");

// Add event listeners to the checkboxes
normalTheme.addEventListener("change", changeTheme);
normalTheme.addEventListener("click", () => {
  darkTheme.checked = false;
  fluorescentTheme.checked = false;
});
darkTheme.addEventListener("change", changeTheme);
darkTheme.addEventListener("click", () => {
  normalTheme.checked = false;
  fluorescentTheme.checked = false;
});
fluorescentTheme.addEventListener("change", changeTheme);
fluorescentTheme.addEventListener("click", () => {
  normalTheme.checked = false;
  darkTheme.checked = false;
});

function changeTheme() {
  // Check which checkboxes are selected
  if (normalTheme.checked) {
    // Apply the normal theme
    document.body.className = "normal-theme";
    box.style.justifyContent = "left";
    box.style.backgroundColor = " hsl(223, 31%, 20%)";
    ball.style.backgroundColor = "hsl(25, 98%, 40%)";
    ecran.style.backgroundColor = " hsl(224, 36%, 15%)";
    ecran.style.color = "white";

    main.style.backgroundColor = "hsl(223, 31%, 20%)";
    for (const bn of btn) {
      bn.style.backgroundColor = " hsl(30, 25%, 89%)";
      bn.style.boxShadow = "0px 3px hsl(28, 16%, 65%)";
      bn.style.color = "black";
    }
    for (const element of special_btn) {
      element.style.backgroundColor = "hsl(225, 21%, 49%)";
      element.style.boxShadow = "0px 3px hsl(224, 28%, 35%)";
      element.style.color = "white";
    }
    equal.style.backgroundColor = "hsl(25, 98%, 40%)";
    equal.style.boxShadow = "0px 3px  hsl(25, 99%, 27%)";
  } else if (darkTheme.checked) {
    // Apply the dark theme
    document.body.className = "white-theme";
    box.style.justifyContent = "center";
    box.style.backgroundColor = "  hsl(0, 5%, 81%)";
    ball.style.backgroundColor = "hsl(25, 98%, 40%)";
    ecran.style.backgroundColor = " hsl(0, 0%, 95%)";
    ecran.style.color = "black";
    main.style.backgroundColor = "hsl(0, 5%, 81%)";
    for (const bn of btn) {
      bn.style.backgroundColor = " hsl(45, 7%, 89%)";
      bn.style.boxShadow = "0px 3px hsl(35, 11%, 61%)";
      bn.style.color = "black";
    }
    for (const element of special_btn) {
      element.style.backgroundColor = "hsl(185, 42%, 37%)";
      element.style.boxShadow = "0px 3px hsl(185, 58%, 25%)";
      element.style.color = "white";
    }
    equal.style.backgroundColor = "hsl(25, 98%, 40%)";
    equal.style.boxShadow = "0px 3px  hsl(25, 99%, 27%)";
  } else if (fluorescentTheme.checked) {
    // Apply the fluorescent theme
    document.body.className = "fluorescent-theme";
    box.style.justifyContent = "right";
    box.style.backgroundColor = "  hsl(268, 71%, 12%)";
    ball.style.backgroundColor = "hsl(176, 100%, 44%)";
    ecran.style.backgroundColor = " hsl(268, 71%, 12%)";
    ecran.style.color = "hsl(52, 100%, 62%)";
    main.style.backgroundColor = "hsl(268, 71%, 12%)";
    for (const bn of btn) {
      bn.style.backgroundColor = " hsl(268, 47%, 21%)";
      bn.style.boxShadow = "0px 3px hsl(285, 91%, 52%)";
      bn.style.color = "hsl(52, 100%, 62%)";
    }
    for (const element of special_btn) {
      element.style.backgroundColor = "hsl(281, 89%, 26%)";
      element.style.boxShadow = "0px 3px hsl(290, 70%, 36%)";
      element.style.color = "hsl(0, 0%, 100%)";
    }
    equal.style.backgroundColor = "hsl(176, 100%, 44%)";
    equal.style.boxShadow = "0px 3px  hsl(177, 92%, 70%)";
    equal.style.color = "hsl(198, 20%, 13%)";
  } else {
    // If no checkboxes are selected, apply the default theme
    document.body.className = "default-theme";
  }
}
