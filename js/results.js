import { results, mbtis } from "./data.js";

// 쿼리스트링 가져오기
const mbti = new URLSearchParams(location.search).get("mbti");
console.log(mbti);

const result = results[mbtis[mbti]];

const titleEl = document.querySelector(".page-title"),
  characterEl = document.querySelector(".character"),
  boxEls = document.querySelectorAll(".box"),
  jobEls = document.querySelectorAll(".job"),
  lectureEl = document.querySelector(".lecture"),
  lectureImgEl = document.querySelector(".lecture img");

titleEl.innerHTML = result.title;
characterEl.src = result.character;
boxEls.forEach(function (boxEl, index) {
  boxEl.innerHTML = result.results[index];
});
jobEls.forEach(function (jobEl, index) {
  jobEl.innerHTML = result.jobs[index];
});
lectureEl.href = result.lectureUrl;
lectureImgEl.src = result.lectureImg;
