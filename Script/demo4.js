import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm';

const supabaseUrl = 'https://prwqavourcmcbmzgggcu.supabase.co';
const supabaseKey = 'sb_publishable_VAjpM4HC-1-NMxlMQGJfig_P19F2bi6';
const supabase = createClient(supabaseUrl, supabaseKey);

const authForm = document.getElementById('authForm');
const authMessage = document.getElementById('authMessage');
const loggedInArea = document.getElementById('loggedInArea');
const userEmail = document.getElementById('userEmail');
const logoutBtn = document.getElementById('logoutBtn');

async function updateAuthUI(session) {
if (session && session.user) {
    loggedInArea.classList.remove('d-none');
    userEmail.textContent = session.user.email;
} else {
    loggedInArea.classList.add('d-none');
    userEmail.textContent = '';
}
}

async function checkSession() {
const { data: { session }, error } = await supabase.auth.getSession();

if (error) {
    console.error('Session error:', error);
    return;
}

updateAuthUI(session);
}

authForm.addEventListener('submit', async (e) => {
e.preventDefault();

const email = document.getElementById('username').value.trim();
const password = document.getElementById('password').value.trim();
const action = e.submitter.dataset.action;

if (!email || !password) {
    authMessage.textContent = 'Please enter both email and password.';
    authMessage.className = 'mt-3 text-danger';
    return;
}

let result;

if (action === 'signup') {
    result = await supabase.auth.signUp({
    email: email,
    password: password
    });
} else {
    result = await supabase.auth.signInWithPassword({
    email: email,
    password: password
    });
}

if (result.error) {
    authMessage.textContent = result.error.message;
    authMessage.className = 'mt-3 text-danger';
    return;
}

authMessage.textContent = action === 'signup'
    ? 'Account created successfully.'
    : 'Login successful!';
authMessage.className = 'mt-3 text-success';

authForm.reset();
await checkSession();
});

logoutBtn.addEventListener('click', async () => {
const { error } = await supabase.auth.signOut();

if (error) {
    authMessage.textContent = error.message;
    authMessage.className = 'mt-3 text-danger';
    return;
}

authMessage.textContent = 'You have been logged out.';
authMessage.className = 'mt-3 text-info';
updateAuthUI(null);
});

checkSession();