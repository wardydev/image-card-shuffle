const imgCard = document.querySelector(".image-card");
imgCard.addEventListener("click", function (e) {
  let imgNumber = Math.floor(Math.random() * 57) + 1;
  if (imgNumber !== 1) {
    e.target.src = "./images/card-" + imgNumber + ".png";
    e.target.classList.add("active");
    setTimeout(() => {
      e.target.classList.remove("active");
    }, 300);
  }
});
