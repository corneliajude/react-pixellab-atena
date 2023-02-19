export default (message = '', type = 'success') => {
  const messageContainer = document.createElement('div');
  messageContainer.classList.add('alert', `alert-${type}`, 'position-relative');
  const closeMesssageButton = document.createElement('button');
  closeMesssageButton.classList.add(
    'btn',
    'btn-danger',
    'btn-sm',
    'position-absolute',
    'top-0',
    'end-0',
    'me-1',
    'mt-1',
    'close-message-button',
  );
  closeMesssageButton.innerText = 'x';

  const messageText = document.createElement('span');
  messageText.innerText = message;

  messageContainer.append(messageText, closeMesssageButton);

  // timeout to remove the messageContainer after 2 seconds
  setTimeout(() => {
    messageContainer.remove();
  }, 2000);

  return messageContainer;
};
