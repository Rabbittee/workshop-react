export const numPadStart = (num, digits) => String(num).padStart(digits, '0');

export const formatTimestamp = (timestamp) => {
  if (!!timestamp === false) return null;

  const newDate = new Date(timestamp);

  const year = newDate.getFullYear();
  const month = numPadStart(newDate.getMonth() + 1, 2);
  const date = numPadStart(newDate.getDate(), 2);
  const hours = numPadStart(newDate.getHours(), 2);
  const minutes = numPadStart(newDate.getMinutes(), 2);
  const seconds = numPadStart(newDate.getSeconds(), 2);

  return `${year}/${month}/${date} ${hours}:${minutes}:${seconds}`;
};
