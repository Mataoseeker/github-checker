const fetchButton = document.getElementById('fetchButton');
const usernameInput = document.getElementById('username');
const profileDiv = document.getElementById('profile');

fetchButton.addEventListener('click', async () => {
    const username = usernameInput.value;
    if (username) {
        const response = await fetch(`https://api.github.com/users/${username}`);
        const data = await response.json();

        if (response.status === 200) {
            profileDiv.innerHTML = `
                <h2>${data.name}</h2>
                <p><strong>Username:</strong> ${data.login}</p>
                <p><strong>Followers:</strong> ${data.followers}</p>
                <p><strong>Following:</strong> ${data.following}</p>
                <p><strong>Public Repositories:</strong> ${data.public_repos}</p>
                <p><strong>Location:</strong> ${data.location || 'Not specified'}</p>
                <img src="${data.avatar_url}" alt="${data.name}'s avatar" width="150">
            `;
        } else {
            profileDiv.innerHTML = `<p class="error">User not found.</p>`;
        }
    }
});
