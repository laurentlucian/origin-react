import React from "react";

const PhotoItem = props => {
  const handleClick = () => {
    
  }
  return props.item.map(item => {
    return (
      <div className="photo-item">
        <img key={item.id} src={item.urls.small} alt={item.description} onClick={handleClick}/>
      </div>
    );
  });
};

export default PhotoItem;
