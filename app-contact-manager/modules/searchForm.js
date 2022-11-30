import notificationBar, {
  addMessage,
  clearMessages,
} from './notificationBar.js';
import { findContacts } from './query.js';
import createMessage from './message.js';
import { pluralize } from './utils.js';

const searchForm = document.querySelector('.search-form');

searchForm.addEventListener('submit', (event) => {
  event.preventDefault();

  // currentTarget este elementul pe care
  // am rulat addEventListener
  const form = event.currentTarget;
  const queryInput = form.q;
  const queryString = queryInput.value;

  // Sterge alertele afisate
  clearMessages();

  const contacts = findContacts(queryString);
  const contactsCount = contacts.length;

  // Afiseaza numarul de contacte gasite
  if (contactsCount < 1) {
    addMessage(createMessage('No contacts found!', 'warning'));
  } else {
    addMessage(
      createMessage(
        // Definit pentru a determina daca se foloseste pluralul
        `Found ${pluralize(contactsCount, {
          one: 'contact',
          many: 'contacts',
        })}.`,
      ),
    );
  }

  // Sterge cuvantul cautat, dupa afisarea alertei
  queryInput.value = '';
});

export default searchForm;
