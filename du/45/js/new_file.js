let countEl = document.querySelector(".count");
let likeBtn = document.querySelector(".like-btn");
let heartIcon = document.querySelector(".heart-icon");

let count = 123;
let isLiked = false;

likeBtn.addEventListener("click", () => {
  if (!isLiked) {
    count++;
    countEl.textContent = count;
    likeBtn.classList.add("liked");
    heartIcon.classList.add("animate");
    isLiked = true;
  } else {
    count--;
    countEl.textContent = count;
    likeBtn.classList.remove("liked");
    heartIcon.classList.remove("animate");
    isLiked = false;
  }
});
