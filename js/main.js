let currentRole = 0;

const changeJob = () => {
  const roles = [
    "frontend",
    "backend",
    "fullstack",
    "ui design",
    "software development",
    "game development"
  ];
  const randIndex = Math.floor(Math.random() * roles.length);
  if (randIndex === currentRole) {
    return changeJob();
  }
  currentRole = randIndex;
  return roles[randIndex];
};

setTimeout(
  () =>
    setInterval(() => {
      document.getElementsByClassName(
        "heading-primary--sub"
      )[0].textContent = changeJob();
    }, 5000),
  100
);
