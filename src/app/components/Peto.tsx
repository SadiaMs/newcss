import React from 'react';
import Image from 'next/image';

const Peto = () => {
  return (
    <div>
      <header className="header">
        <h1 className="header-logo">Pets Gallery</h1>
      </header>
      <main className="gallery-container">
        <div className="gallery-item">
          <Image src={"/doso.jpg" } alt="Cute Pet 1" width={300} height={300} className="gallery-image"  />
        </div>
        <div className="gallery-item">
          <Image src={"/blogf.jpg" } alt="Cute Pet 2" width={300} height={300} className="gallery-image" />
        </div>
        <div className="gallery-item">
          <Image src={"/ss.jpg"} alt="Cute Pet 3" width={300} height={300} className="gallery-image" />
        </div>
        <div className="gallery-item">
          <Image src={"/lo.jpg"} alt="Cute Pet 4" width={300} height={300} className="gallery-image" />
        </div>
      </main>
    </div>
  );
};

export default Peto;
