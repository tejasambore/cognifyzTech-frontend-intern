const fetchButton = document.getElementById('fetchButton');
const postsContainer = document.getElementById('postsContainer');

fetchButton.addEventListener('click', () => {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            console.log(data)
            displayPosts(data);
        })
        .catch(error => {
            console.error('Error fetching post:', error);
            postsContainer.innerHTML = '<p style="color: red;"> Failoed to fetch  posts. Please try again later.</p>';
        });
});

function displayPosts(posts) {
    postsContainer.innerHTML = ' ';
    posts.slice(0, 8).forEach(post => {
        const postElement = document.createElement('div');
        postElement.classList.add('post');
        postElement.innerHTML = `
            <h2>${post.title}</h2>
            <p>${post.body}</p>
        `;
        postsContainer.appendChild(postElement);
    });
}