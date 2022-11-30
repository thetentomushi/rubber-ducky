/* Rubber Duck Types */
export const TYPE = {
  normal: "normal",
  animated: "animated",
  frog: "frog",
  penguin: "penguin",
  chameleon: "chameleon",
  batman: "batman",
  pig: "pig",
  ghost: "ghost"
};

const rubberDucks = {
  normal: {
    name: "Rubber Duck",
    imagePath: "https://cdn-icons-png.flaticon.com/512/1012/1012677.png"
  },
  animated: {
    name: "Animated Rubber Duck",
    imagePath: "https://i.gifer.com/embedded/download/4foo.gif"
  },
  frog: {
    name: "Frog Rubber Duck",
    imagePath: "https://cdn-icons-png.flaticon.com/512/1587/1587055.png"
  },
  penguin: {
    name: "Penguin Rubber Duck",
    imagePath: "https://cdn-icons-png.flaticon.com/512/826/826963.png"
  },
  chameleon: {
    name: "Chameleon Rubber Duck",
    imagePath: "https://cdn-icons-png.flaticon.com/512/194/194985.png"
  },
  batman: {
    name: "Batman Rubber Duck",
    imagePath: "https://cdn-icons-png.flaticon.com/512/805/805385.png"
  },
  pig: {
    name: "Pig Rubber Duck",
    imagePath: "https://cdn-icons-png.flaticon.com/512/2174/2174069.png"
  },
  ghost: {
    name: "Ghost",
    imagePath: "https://cdn-icons-png.flaticon.com/512/1235/1235112.png"
  }
};

export const getRubberDuck = (isRandom, type) => {
  if (isRandom) {
    // generate a random rubber duck
    const keys = Object.keys(TYPE);
    return rubberDucks[keys[Math.floor(Math.random() * keys.length)]];
  }
  if (type in rubberDucks) {
    return rubberDucks[type];
  } else {
    return rubberDucks[TYPE.normal];
  }
};
