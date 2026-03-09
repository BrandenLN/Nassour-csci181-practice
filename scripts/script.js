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
  "images/small6.jpg",
  "images/small7.jpg",
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
    mediumImages: [
      { r: 1, c: 3 },
      { r: 3, c: 1 },
    ],
    mediumText: { r: 3, c: 3 },
  },
  {
    large: { r: 1, c: 2 },
    mediumImages: [
      { r: 3, c: 1 },
      { r: 1, c: 4 },
    ],
    mediumText: { r: 3, c: 3 },
  },
];

const layout = layouts[Math.floor(Math.random() * layouts.length)];

function createItem(src, className, row, col, text) {
  const div = document.createElement("div");
  div.classList.add("item", className);

  if (className === "large") {
    div.style.gridRow = `${row} / span 2`;
    div.style.gridColumn = `${col} / span 2`;
  } else if (className === "medium") {
    div.style.gridRow = row;
    div.style.gridColumn = `${col} / span 2`;
  } else {
    div.style.gridRow = row;
    div.style.gridColumn = col;
  }

  if (text) {
    div.textContent = text;
    div.style.display = "flex";
    div.style.alignItems = "center";
    div.style.justifyContent = "center";
    div.style.fontSize = "1.5rem";
    div.style.color = "white";
    div.style.fontWeight = "bold";
    div.style.textAlign = "center";
  } else {
    const img = document.createElement("img");
    img.src = src;
    div.appendChild(img);
  }

  grid.appendChild(div);
}

createItem(largePhotos[0], "large", layout.large.r, layout.large.c);
createItem(
  mediumPhotos[0],
  "medium",
  layout.mediumImages[0].r,
  layout.mediumImages[0].c,
);
createItem(
  mediumPhotos[1],
  "medium",
  layout.mediumImages[1].r,
  layout.mediumImages[1].c,
);
createItem(
  null,
  "medium",
  layout.mediumText.r,
  layout.mediumText.c,
  "Different animals",
);

let smallIndex = 0;
for (let r = 1; r <= 4; r++) {
  for (let c = 1; c <= 4; c++) {
    let occupied = false;
    if (
      r >= layout.large.r &&
      r < layout.large.r + 2 &&
      c >= layout.large.c &&
      c < layout.large.c + 2
    )
      occupied = true;
    layout.mediumImages.forEach((m) => {
      if (r === m.r && c >= m.c && c < m.c + 2) occupied = true;
    });
    if (
      r === layout.mediumText.r &&
      c >= layout.mediumText.c &&
      c < layout.mediumText.c + 2
    )
      occupied = true;
    if (!occupied && smallIndex < smallPhotos.length) {
      createItem(smallPhotos[smallIndex], "small", r, c);
      smallIndex++;
    }
  }
}
