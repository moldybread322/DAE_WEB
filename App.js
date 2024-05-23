import React from 'react';
import './App.css'; // Import your CSS file
import CatImage from './CatImage'; // Import the CatImage component

const App = () => {
  const initialImageUrl = "https://tse3.explicit.bing.net/th?id=OIP.-d3JKGX5ZJ3Y3U7ybY8h8gHaE7&pid=Api&P=0&h=220";
  
  return (
    <div className="App">
      <h1>Welcome to Flickering Micro Cat</h1>
      <CatImage imageUrl={initialImageUrl} />
      <footer>&copy; 2024 Flickering Micro Cat</footer>
    </div>
  );
};

export default App;
