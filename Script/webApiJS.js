import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm';

const supabaseUrl = 'https://prwqavourcmcbmzgggcu.supabase.co';
const supabaseKey = 'sb_publishable_VAjpM4HC-1-NMxlMQGJfig_P19F2bi6';
const supabase = createClient(supabaseUrl, supabaseKey);

const container = document.getElementById('rest-card-parent');

const fieldOrder = [
  'id',
  'fname',
  'lname',
  'gender',
  'created_at',
  'address1',
  'address2',
  'towncity',
  'phone',
  'provider',
  'studyExplanation'
];

const formatLabel = (field) => {
  const labelMap = {
    id: 'ID',
    fname: 'First Name',
    lname: 'Last Name',
    gender: 'Gender',
    created_at: 'Created At',
    address1: 'Address 1',
    address2: 'Address 2',
    towncity: 'Town/City',
    phone: 'Phone',
    provider: 'Provider',
    studyExplanation: 'Study Explanation'
  };

  return labelMap[field] || field.replace(/_/g, ' ');
};

function renderCards(cardData) {
  if (!container) return;

  container.innerHTML = '';

  cardData.forEach(item => {
    const card = document.createElement('div');
    card.className = 'card col-md-6 col-lg-4 mb-3 shadow-sm';

    const header = document.createElement('div');
    header.className = 'card-header bg-light fw-bold';
    header.textContent = `${item.fname || ''} ${item.lname || ''}`.trim() || 'New Student';

    const body = document.createElement('div');
    body.className = 'card-body';

    const list = document.createElement('ul');
    list.className = 'list-group list-group-flush';

    fieldOrder.forEach(field => {
      const value = item[field] ?? 'Null';
      const listItem = document.createElement('li');
      listItem.className = 'list-group-item';
      listItem.innerHTML = `<strong>${formatLabel(field)}:</strong> ${value}`;
      list.appendChild(listItem);
    });

    body.appendChild(list);
    card.appendChild(header);
    card.appendChild(body);
    container.appendChild(card);
  });
}

async function loadCards() {
  const { data, error } = await supabase
    .from('user-form-table')
    .select('*')
    .order('id', { ascending: true });

  if (error) {
    console.error('Error fetching user data:', error.message);
    if (container) {
      container.innerHTML = '<div class="alert alert-danger">Unable to load data from Supabase.</div>';
    }
    return;
  }

  console.log('Supabase data:', data);
  renderCards(data || []);
}

loadCards();
