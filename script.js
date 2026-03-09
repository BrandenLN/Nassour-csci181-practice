const grid = document.getElementById("grid");

let largePhotos = [
  "images/large1.jpg",
  "images/large2.jpg",
  "images/large3.jpg",
];
let mediumPhotos = [
  "images/medium1.jpg",
  "images/medium2.jpg",
  "images/medium3.jpg",
];
let smallPhotos = [
  "images/small1.jpg",
  "images/small2.jpg",
  "images/small3.jpg",
  "images/small4.jpg",
  "images/small5.jpg",
];

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

largePhotos = shuffle(largePhotos);
mediumPhotos = shuffle(mediumPhotos);
smallPhotos = shuffle(smallPhotos);

const layouts = [
  {
    large: { r: 1, c: 1 },
    medium: { r: 3, c: 1 },
    small: [
      { r: 1, c: 3 },
      { r: 2, c: 3 },
      { r: 3, c: 3 },
    ],
  },
  {
    large: { r: 1, c: 2 },
    medium: { r: 3, c: 1 },
    small: [
      { r: 1, c: 1 },
      { r: 2, c: 1 },
      { r: 3, c: 3 },
    ],
  },
  {
    large: { r: 2, c: 1 },
    medium: { r: 1, c: 1 },
    small: [
      { r: 1, c: 3 },
      { r: 2, c: 3 },
      { r: 3, c: 3 },
    ],
  },
];

const layout = layouts[Math.floor(Math.random() * layouts.length)];

function createItem(src, className, row, col) {
  const div = document.createElement("div");
  div.classList.add("item", className);
  div.style.gridRowStart = row;
  div.style.gridColumnStart = col;

  const img = document.createElement("img");
  img.src = src;

  div.appendChild(img);
  grid.appendChild(div);
}

createItem(largePhotos[0], "large", layout.large.r, layout.large.c);
createItem(mediumPhotos[0], "medium", layout.medium.r, layout.medium.c);

layout.small.forEach((pos, index) => {
  createItem(smallPhotos[index], "small", pos.r, pos.c);
});
