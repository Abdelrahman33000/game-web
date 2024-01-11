// src/App.js
import React, { useState } from 'react';

function App() {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = Array.from({ length: 60 }, (_, i) => `/images/${i + 1}.jpg`);

  const openModal = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="App">
      <h1 dir='rtl' style={{ textAlign: "center", margin: "20px" }}>جميع الصور</h1>
      <div className="image-grid">
        {images.map((image, index) => (
          <div key={index} className="image-item" onClick={() => openModal(image)}>
            <img src={image} alt={` ${index + 1}`} />
          </div>
        ))}
      </div>
      {selectedImage && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content">
            <span className="close-btn" onClick={closeModal}>&times;</span>
            <img src={selectedImage} alt="Selected" className="full-screen-image" />
          </div>
        </div>
      )}
      <style jsx>{`
        .image-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
          gap: 56px;
          padding: 16px;
        }

        .image-item img {
          width: 100%;
          height: 250px;
          object-fit: cover;
          cursor: pointer;
        }

        .modal-overlay {
            
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: rgba(0, 0, 0, 0.9);
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .modal-content {
          max-width: 500px; /* قيمة العرض القصوى للصورة */
          /* max-height: 500px; قيمة الارتفاع القصوى للصورة بناءً على الارتفاع الرأسي للشاشة */
          position: relative;
        }

        .close-btn {
          position: absolute;
          top: 10px;
          right: 10px;
          cursor: pointer;
          font-size: 34px;
          color: #f31414;
        }

        .full-screen-image {
            margin:"20px";
            padding: 10px;
          /* width: 50px; */
          height: 300px;
          display: block;
          
        
          
        }
      `}</style>
    </div>
  );
}

export default App;
