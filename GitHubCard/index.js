const { default: axios } = require("axios");

/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/

/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3 (line 34).
*/

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/
function gitCard(ghUserName) {
  const url = `https://api.github.com/users/${ghUserName}`;
  axios.get(url).then(response => {
    document.querySelector(".cards").appendChild(githubUserCard(response.data))

  })
    .catch(error => {
      console.error(error);
    })
    .finally(() => console.log("Test"));
}

function githubUserCard(gitObject) {
  const cardWrapper = document.createElement("div");
  const image = document.createElement("img");
  const cardInfo = document.createElement("div");
  const name = document.createElement("h3");
  const userName = document.createElement("p");
  const location = document.createElement("p");
  const proDesc = document.createElement("p");
  const address = document.createElement("a");
  const followers = document.createElement("p");
  const following = document.createElement("p");
  const bio = document.createElement("p");

  name.classList.add("name");
  userName.classList.add("username");
  cardInfo.classList.add("card-info");
  cardWrapper.classList.add("card");

  image.src = gitObject.avatar_url;
  name.textContent = gitObject.name;
  userName.textContent = gitObject.login;
  location.textContent = gitObject.location;
  proDesc.textContent = gitObject.blog;
  address.textContent = gitObject.html_url;
  address.href = gitObject.html_url;
  followers.textContent = `Followers: ${gitObject.followers}`;
  following.textContent = `Following: ${gitObject.following}`;
  bio.textContent = `Bio: ${gitObject.bio}`;

  cardWrapper.appendChild(image);
  cardWrapper.appendChild(cardInfo);
  cardInfo.appendChild(name);
  cardInfo.appendChild(userName);
  cardInfo.appendChild(address);
  cardInfo.appendChild(location);
  cardInfo.appendChild(proDesc);
  cardInfo.appendChild(followers);
  cardInfo.appendChild(following);
  cardInfo.appendChild(bio);

  return cardWrapper;
}
/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/

const followersArray = ["aingram84", "evoingram", "bigknell", "justsml", "luishrd", "tetondan"];

for (let i = 0; i < followersArray.length; i++) {
  gitCard(followersArray[i]);
}

/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

    <div class="card">
      <img src={image url of user} />
      <div class="card-info">
        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>
        <p>Location: {users location}</p>
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
*/

/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
