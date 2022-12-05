import contacts from './data.js';

export const findContacts = (needle = 'query') => {
  const results = contacts.filter((contact) => {
    const values = Object.values(contact);
    // [1, 'Carol', 'Carolson', '0741000000',  'carol@carol.ro']

    const haystack = values.reduce((haystack, value) => {
      if (typeof value === 'string') {
        haystack += value;
      }
      return haystack;
    }, '');

    if (haystack.includes(needle)) {
      return true;
    }

    return false;
    // // trim() elimina spatiile goale de dinainte si dupa "needle"
    // return needle.trim() === contact.name;
  });

  return results;
};

export const createContact = (contact) => {
  // push mutates
  contacts.push(contact);
};
