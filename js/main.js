window.onload = () => {
  /* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
  particlesJS.load("header__particles", "assets/particles.json", () => {
    console.log("Header particles loaded");
  });

  particlesJS.load("projects__particle", "assets/particles.json", () => {
    console.log("Projects particle loaded");
  });

  // particlesJS("projects__particle")

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

  document.getElementById("btn-home").onclick = () =>
    scrollPageTo("#home", 1000);
  document.getElementById("btn-about").onclick = () =>
    scrollPageTo("#about", 1000);
  document.getElementById("btn-projects").onclick = () =>
    scrollPageTo("#projects", 1000);
};
