export const setItem = (key: string, value: unknown) => {
  try {
    console.log("Saving to localStorage:", key, value);
    localStorage.setItem(key, JSON.stringify(value));
    console.log("After saving, localStorage contains:", localStorage.getItem(key));
  } catch (error) {
    console.log(`Error saving to localstorage, ${error}`);
  }
};

export const getItem = (key: string) => {
  try {
    const item = localStorage.getItem(key);
    console.log("Retrieved from localStorage:", key, item);
    return item ? JSON.parse(item) : undefined;
  } catch (error) {
    console.error("Error reading from localStorage", error);
  }
};
