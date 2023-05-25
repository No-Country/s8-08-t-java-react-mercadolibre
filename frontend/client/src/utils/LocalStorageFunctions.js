export const getLocalStorage = key => {
  const item = localStorage.getItem(key);

  if (!item) return;
  try {
    return JSON.parse(item);
  } catch (error) {
    console.log(error);
  }
  return item;
};

export const setLocalStorage = (key, value) => {
  localStorage.setItem(key, JSON.stringify({ ...value }));
};

export const clearLocalStorage = key => {
  localStorage.removeItem(key);
};
