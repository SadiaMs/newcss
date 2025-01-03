import React from 'react'

const page = () => {
  return (
    <div>
    <section className='about-section' style={{backgroundImage: 'url(abbu.png)'}}>
      <div className='container'>
        <h2 className='fade-in'>About Us</h2>
        <p>
          At PetDoc, we are dedicated to providing top-notch care for your beloved pets. With a team of highly trained veterinarians and pet care experts, we ensure that your furry friends receive the love and attention they deserve. Our mission is to promote the health and well-being of pets through compassionate and professional services.
        </p>
        <p>
          Whether it's a routine check-up, vaccination, or specialized treatment, we are here to offer comprehensive care tailored to your pet's needs. We understand the bond you share with your pets, and our goal is to help them live a happy, healthy life.
        </p>
        <h2>Our Services</h2>
        <ul className='li'>
          <li>General Check-ups</li>
          <li>Vaccinations</li>
          <li>Surgical Procedures</li>
          <li>Grooming Services</li>
          <li>Emergency Care</li>
          <li>Nutrition and Diet Consultation</li>
        </ul>
        <h2>Why Choose Us?</h2>
        <ul>
          <li>Experienced and compassionate staff</li>
          <li>State-of-the-art facilities</li>
          <li>Affordable pricing</li>
          <li>Personalized care plans</li>
          <li>24/7 emergency support</li>
        </ul>
        <p>
          Join our family of happy pet owners and let us be your trusted partner in pet care. Your pet's health and happiness are our top priorities!
        </p>
      </div>
    </section>
  </div>
  )
}

export default page
