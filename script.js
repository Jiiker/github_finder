const searchBarBox = document.querySelector(".search-bar-box");
const searchBar = document.querySelector(".search-bar");
const profile = document.querySelector(".profile");


function getProfile(object) {
  const profileBox = document.createElement("section")

  profile.appendChild(profileBox);
  profileBox.className = "profile-box";

  profileBox.innerHTML = `
  <div class="profile-left-section">
    <img class="profile-avatar-url" src="${object.avatar_url}">
    <button class="profile-html-url" onclick="location.href='${object.html_url}'" >View Profile</button>
  </div>
  <div class="profile-right-section">
    <section class="profile-right-section-top">
      <box class="info-box" id="public-repos">Public Repos: ${object.public_repos}</box>
      <box class="info-box" id="public-gists">Public Gists: ${object.public_gists}</box>
      <box class="info-box" id="followers">Followers: ${object.followers}</box>
      <box class="info-box" id="following">Following: ${object.following}</box>
    </section>
    <section class="profile-right-section-bottom">
      <box class="detail-info" id="login-name">ID: ${object.login}, Name: ${object.name}</box>
      <box class="detail-info" id="company">Company: ${object.company}</box>
      <box class="detail-info" id="blog">Website/Blog: ${object.blog}</box>
      <box class="detail-info" id="location">Location: ${object.location}</box>
      <box class="detail-info" id="created-at">Member Since: ${object.created_at}</box>
    </section>
  </div>
  `
}

function getRepository(object) {
  const repository = document.createElement("section");
  const repoTitle = document.createElement("div");
  
  repository.className = "repository";
  repoTitle.className = "repo-title";
  repoTitle.innerText = "Latest Repos";
  
  profile.appendChild(repository);
  repository.appendChild(repoTitle);

  for (let idx = 0; idx < object.length; idx++) {
    const repoBox = document.createElement("div");
    repoBox.className = "repo-box";
    repository.appendChild(repoBox);

    repoBox.innerHTML = `
      <text class="repo-name">${object[idx].name}</text>
      <box class="repo-reput-box" id="stargazers-count">Stars: ${object[idx].stargazers_count}</box>
      <box class="repo-reput-box" id="watchers-count">Watchers: ${object[idx].watchers_count}</box>
      <box class="repo-reput-box" id="forks_count">Forks: ${object[idx].forks_count}</box>
    `
  }
}

searchBarBox.addEventListener ("submit", (event) => {
  event.preventDefault();
  let searchName = searchBar.value;
  
  fetch(`https://api.github.com/users/${searchName}`)
  .then((res) => res.json())
  .then((user) => {
    if (user.message == "Not Found") {
      profileBox.innerHTML = "";
      alert("User dosen't exist. Please check the user name.");
    }
    else {
      profile.innerHTML = "";
      getProfile(user);
      if (user.public_repos > 0) {
        fetch(`https://api.github.com/users/${searchName}/repos`)
        .then((res) => res.json())
        .then((repos) => {
          getRepository(repos);
        });
      }
    }
  });
});