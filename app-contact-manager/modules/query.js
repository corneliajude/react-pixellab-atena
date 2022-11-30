import contacts from './data.js';

export const findContacts = (needle = 'query') => {
  const results = contacts.filter((contact) => {
    // trim() elimina spatiile goale de dinainte si dupa "needle"
    return needle.trim() === contact.name;
  });

  return results;
};
