import logo from "./logo.png";
import style from "./index.less";
export function createLogo() {
  const img = new Image();
  img.src = logo;
  img.classList.add(style.logo);

  document.getElementById("root").append(img);
}
