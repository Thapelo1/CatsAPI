const generateBtn = document.querySelector(".generate");

const fetchCats = () => {
  fetch("https://api.thecatapi.com/v1/breeds?attach=0")
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      const imageOb = data[0].image;
      const catImage = imageOb.url;

      // Create element
      let imageElm = document.createElement("img");
      imageElm.setAttribute("src", `${catImage}`);

      const catImageDiv = document.querySelector(".catImageDiv");
      catImageDiv.appendChild(imageElm);
    })
    .catch((error) => console.log(error));
};

generateBtn.addEventListener("click", fetchCats);
