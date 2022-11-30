const notificationBar = document.querySelector('.notification-bar');

export const addMessage = (messageElement) => {
  notificationBar.append(messageElement);
};

// Sterge mesajele afisate
export const clearMessages = () => {
  notificationBar.innerHTML = ``;
};

export default notificationBar;
