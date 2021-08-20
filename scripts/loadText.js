function readFile(fileName, className) {
  let url = "./text/" + fileName + ".txt";
  fetch(url)
    .then((response) => response.text())
    .then((data) => {
      const arrayOfElements = Array.from(
        document.getElementsByClassName(className)
      );
      arrayOfElements.forEach((e) => (e.innerHTML = data));
    });
}
