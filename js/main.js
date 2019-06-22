const changeJob = () => {
  const roles = [
    "frontend",
    "backend",
    "fullstack",
    "ui/ux",
    "game development"
  ];
  const selectedRole = roles[Math.floor(Math.random() * roles.length)];
  return selectedRole;
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
