document.addEventListener('DOMContentLoaded', () => {
    const postForm = document.getElementById('new-post-form');
    const postList = document.getElementById('post-list');

    postForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const title = document.getElementById('post-title').value;
        const content = document.getElementById('post-content').value;

        if (title && content) {
            addPost(title, content);
            postForm.reset();
        }
    });

    function addPost(title, content) {
        const post = document.createElement('div');
        post.classList.add('post');

        const postTitle = document.createElement('h3');
        postTitle.classList.add('post-title');
        postTitle.textContent = title;

        const postContent = document.createElement('p');
        postContent.classList.add('post-content');
        postContent.textContent = content;

        post.appendChild(postTitle);
        post.appendChild(postContent);
        postList.appendChild(post);
    }
});
