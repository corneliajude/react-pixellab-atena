const stageContent = document.querySelector('.stage');

export const clearStage = () => {
  stageContent.innerHTML = '';
};

export default stageContent;

export const pluralize = (count, { one = '', many = '' }) => {
  return `${count} ${count > 1 ? many : one}`;
};
