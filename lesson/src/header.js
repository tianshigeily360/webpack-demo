function header() {
  var root = document.getElementById("root");
  var header = document.createElement("div");
  header.innerText = "header";
  root.append(header);
}

// export default header;
module.exports = header;
