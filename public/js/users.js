const api = 'http://localhost:3000/users';

const form = document.getElementById('user-form');
const list = document.getElementById('user-list');

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const user = {
    username: form.username.value,
    email: form.email.value,
    password: form.password.value
  };

  const res = await fetch(api, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(user)
  });

  form.reset();
  loadUsers();
});

async function loadUsers() {
  const res = await fetch(api);
  const users = await res.json();
  list.innerHTML = '';
  users.forEach(u => {
    const li = document.createElement('li');
    li.textContent = `${u.username} - ${u.email}`;
    list.appendChild(li);
  });
}

loadUsers();
