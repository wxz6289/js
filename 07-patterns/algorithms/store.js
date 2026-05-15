function createStore(reducer) {
  let state = reducer();
  const listeners = [];

  const dispatch = (action) => {
    console.log(action, 'action')
    state = reducer(action);
    listeners.forEach(listener => listener());
  }

  const getState = () => state;

  const subscribe = callback => {
    listeners.push(callback);
    return () => {
      const index = listeners.indexOf(callback);
      listeners.splice(index, 1);
    }
  }

  return {
    dispatch,
    getState,
    subscribe
  }
}

function reducer(state, action) {
  if (action?.type == 'increment') {
    let { count } = state;
    return { ...state, count: count + 1 };
  } else {
    return { count: 0 };
  }
}

const store = createStore(reducer);
console.log(store.getState());
store.subscribe(() => console.log('subsribe:', store.getState()));
store.dispatch({ type: 'increment' });