import React, { useState } from 'react';

const CatImage = ({ imageUrl }) => {
  const [currentImageUrl, setCurrentImageUrl] = useState(imageUrl);

  const handleImageUrlChange = (event) => {
    setCurrentImageUrl(event.target.value);
  };

  return (
    <div className="cat-image">
      <img src={currentImageUrl} alt="Flickering Micro Cat" />
      <div>
        <input type="text" value={currentImageUrl} onChange={handleImageUrlChange} />
      </div>
    </div>
  );
};

export default CatImage;
