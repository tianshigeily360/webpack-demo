function JM() {
  const btn = document.createElement("button");
  const body = document.body;
  btn.innerHTML = "添加加敏";
  body.append(btn);
  btn.onclick = function() {
    const jm = document.createElement("div");
    jm.innerHTML = "加敏";
    body.append(jm);
  };
}

export default JM;
