const loanApi = 'http://localhost:3000/loans';
const loanForm = document.getElementById('loan-form');
const loanList = document.getElementById('loan-list');

loanForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const loan = {
    user_id: parseInt(loanForm.user_id.value),
    book_id: parseInt(loanForm.book_id.value),
    due_date: loanForm.due_date.value,
    status: loanForm.status.value,
  };

  await fetch(loanApi, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(loan),
  });

  loanForm.reset();
  loadLoans();
});

async function loadLoans() {
  const res = await fetch(loanApi);
  const loans = await res.json();
  loanList.innerHTML = '';
  loans.forEach(l => {
    const li = document.createElement('li');
    li.textContent = `Usuario ${l.user_id} → Libro ${l.book_id} (Estado: ${l.status})`;
    loanList.appendChild(li);
  });
}

loadLoans();
