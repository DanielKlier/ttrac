export const loadState = () => {
  try {
    const serializedState = localStorage.getItem('state');
    if (serializedState === null) {
      return undefined;
    }
    else {
      return JSON.parse(serializedState);
    }
  }
  catch (error) {
    return undefined;
  }
};