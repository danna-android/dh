export const loadState = () => {
  try {
    const serializedState = localStorage.getItem('app_state');
    return serializedState ? JSON.parse(serializedState) : undefined;
  } catch (e) {
    console.error('Could not load state', e);
    return undefined;
  }
};

export const saveState = (state: any) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('app_state', serializedState);
  } catch (e) {
    console.error('Could not save state', e);
  }
};
