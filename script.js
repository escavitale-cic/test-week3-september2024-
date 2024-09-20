const postsList = document.getElementById('posts-list');
let postArray = [];
let filteredArray = [];

/******** CARD GENERATION SECTION ********/

// Fetching all posts from API call
fetch('https://jsonplaceholder.typicode.com/posts')
.then(response => response.json())
.then(posts => {
    posts.forEach(post => {
        postArray.push(post);
        createPostCard(post);
    });
})
.catch(error => console.error('Error fetching posts:', error));

// Function to create and append a post card
function createPostCard(post) {
    const cardContainer = document.createElement('div');
    cardContainer.classList.add('col');
    const cardDiv = document.createElement('div');
    cardDiv.classList.add('card', 'h-100', 'posts-list');
    cardDiv.addEventListener('click', () => viewPostDetail(post.id));

    const cardBody = document.createElement('div');
    cardBody.classList.add('card-body');

    const cardTitle = document.createElement('h5');
    cardTitle.classList.add('card-title');
    cardTitle.textContent = post.title;

    const bodyText = document.createElement('p');
    bodyText.classList.add('card-text');
    bodyText.textContent = post.body;

    cardBody.appendChild(cardTitle);
    cardBody.appendChild(bodyText);
    cardDiv.appendChild(cardBody);
    cardContainer.appendChild(cardDiv);
    postsList.appendChild(cardContainer);
}

/******** NAVIGATION SECTION ********/

// Navigate to post detail page
function viewPostDetail(postId) {
    window.location.href = `postDetail.html?id=${postId}`;
}

/******** SEARCH SECTION ********/
document.getElementById('myInput').addEventListener("dblclick", function(){
    let text = document.getElementById("myInput").value;
    filteredArray = postArray.filter(function(elm){
        if(elm.title.includes(text)){
            return elm.id;
        }
    });
    if(this.value == ""){
        console.log(1);
        createPostCard(postArray);
    } else {
        console.log(2);
        createPostCard(filteredArray);
        /* Il controllo funziona e la conosle stampa 2 tuttavia la funzione in filter non è corretta per cui filteredArray è uguale a postArray.
        Inoltre le nuove card che popolo si vanno ad aggiungere alle precedenti quando dovrei cancellare quelle popolate dopo la risposta e mostrare solo le filtrate*/
    }
})
