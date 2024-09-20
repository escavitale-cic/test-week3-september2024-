// Get post id from URL
const urlParams = new URLSearchParams(window.location.search);
const postId = urlParams.get('id');

// Fetch post detail
fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
.then(response => response.json())
.then(post => {
    document.getElementById('post-title').textContent = post.title;
    document.getElementById('post-body').textContent = post.body;
})
.catch(error => console.error('Error fetching post detail:', error));

// Function to go back to the homepage
function goBack() {
    window.location.href = 'index.html';
}
