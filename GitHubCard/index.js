import axios from 'axios';
/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/
axios
  .get('https://api.github.com/users/bigknell')
  .then((response)=>{
    const user = response.data;

    const myCard = gitCardMaker(user);

    document.querySelector('.cards').appendChild(myCard);
  })
  .catch((error)=>{
    error = "Error! Couldn't get data from the api"
    console.log(error);
  })

/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3.
*/

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/

/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/
axios 
.get('https://api.github.com/users/bigknell/followers')
.then((response)=>{
  const followerAPI = response.data;
  const followersArray = followerAPI;
  followersArray.forEach((item)=>{
    const followerCard = gitCardMaker(item)
    document.querySelector('.cards').appendChild(followerCard);
  })

})
.catch((error)=>{
  error = "Error couldn't get follwers from api"
  console.log(error);
})



// followersArray.forEach()



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

function gitCardMaker({avatar_url,name, login,location,html_url,followers,following,bio}){

  // instantiating the elements
  const card = document.createElement('div'); //parent div
  const image = document.createElement('img'); //card image
  const cardInfo = document.createElement('div'); //elements under this will be nested in cardInfo.
  const realName = document.createElement('h3'); // the users actual name
  const userName = document.createElement('p'); // the users user name
  const userLocation = document.createElement('p'); //the users location
  const profile = document.createElement('p'); //profile will have an a tag nested witin it. cardInfo -> profile -> link
  const profileLink = document.createElement('a'); //link to user gitHub
  const userFollowers = document.createElement('p'); //users follower count
  const userFollowing =  document.createElement('p'); //users follwing count
  const userBio = document.createElement('p'); //users bio

  // creating the hierarchy
  card.appendChild(image);
  card.appendChild(cardInfo);

  cardInfo.appendChild(realName);
  cardInfo.appendChild(userName);
  cardInfo.appendChild(userLocation);
  cardInfo.appendChild(profile);  
  // profile.appendChild(profileLink); //linked nsted within profile

  cardInfo.appendChild(userFollowers);
  cardInfo.appendChild(userFollowing);
  cardInfo.appendChild(userBio);


  // setting class names
  card.classList.add('card');
  cardInfo.classList.add('card-info');
  realName.classList.add('name');
  userName.classList.add('username');

  // setting attributes
  image.src = avatar_url;
  profileLink.href = html_url;


  // setting text
  realName.textContent = name;
  userName.textContent = login;
  userLocation.textContent = `Location: ${location}`;
  profile.textContent = 'Profile: ' + profileLink
  profileLink.textContent = html_url;
  userFollowers.textContent = `Followers: ${followers}`;
  userFollowing.textContent = `Following: ${following}`;
  userBio.textContent = `Bio: ${bio}`;

  return card;
}


/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
