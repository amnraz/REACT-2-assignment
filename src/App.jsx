import React, { useReducer } from 'react';
import './App.css'; // We'll define light and dark styles here

const initialState = {
  theme: 'light'
};

function themeReducer(state, action) {
  switch (action.type) {
    case 'TOGGLE_THEME':
      return {
        ...state,
        theme: state.theme === 'light' ? 'dark' : 'light'
      };
    default:
      return state;
  }
}

function App() {
  const [state, dispatch] = useReducer(themeReducer, initialState);

  const toggleTheme = () => {
    dispatch({ type: 'TOGGLE_THEME' });
  };

  const themeStyles = {
    backgroundColor: state.theme === 'light' ? '#fff' : '#333',
    color: state.theme === 'light' ? '#000' : '#fff',
    minHeight: '100vh',
    padding: '50px',
    transition: 'all 0.3s ease'
  };

  return (
    <div style={themeStyles}>
      <h1>Current Theme: {state.theme.toUpperCase()}</h1>
      <button onClick={toggleTheme}>
        Toggle Theme
      </button>
    </div>
  );
}

export default App;
