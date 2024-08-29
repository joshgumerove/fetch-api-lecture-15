const url = "https://api.github.com/users/joshgumerove/repos";

fetch(url)
  .then((response) => response.json())
  .then((repos) => {
    const projectSection = document.getElementById("projectSection");
    const projectList = projectSection.querySelector("ul");
    let count = 0;
    repos.forEach((repo) => {
      if (count > 10) {
        return;
      }
      const project = document.createElement("li");
      project.innerText = repo.name;
      projectList.append(project);
      count += 1;
    });
  })
  .catch((e) => console.log(e));
