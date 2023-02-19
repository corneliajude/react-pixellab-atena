const notificationBar = document.querySelector('.notification-bar');

export const addMessage = (messageElement) => {
  notificationBar.append(messageElement);
};

export const clearMessages = () => {
  notificationBar.innerHTML = '';
};

// event delegation for closeMessageButton
notificationBar.addEventListener('click', (event) => {
  const { target } = event;

  if (
    target.nodeName !== 'BUTTON' ||
    !target.classList.contains('close-message-button')
  ) {
    return;
  }
  clearMessages();
});

export default notificationBar;
