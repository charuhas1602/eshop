import React from 'react'
import HeroSection from '../components/HeroSection'

const Contact = () => {
  const contactTitle = "Contact Us"
  const imageUrl = `https://media.istockphoto.com/id/1311934969/photo/contact-us.jpg?s=612x612&w=0&k=20&c=_vmYyAX0aFi-sHH8eYS-tLLNfs1ZWXnNB8M7_KWwhgg=`
  return (
    <div className='container pt-4 mh-80'>
      <HeroSection title={contactTitle} image={imageUrl}></HeroSection>
      <div className="py-2">
        <iframe id="google map-contactus" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d119285.15116875761!2d74.69381912335442!3d20.885710940326316!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdec5f2c571bb47%3A0x5827ae11b9d7cb1c!2sDhule%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1677639420080!5m2!1sen!2sin" width="100%" height="300" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
      </div>
      <div className="py-2">
        <div className="form w-50 mx-auto">
          <form action="https://formspree.io/f/mayzjowy" method='POST'>
            <div class="form-group">
              <label for="exampleFormControlInput1">Name</label>
              <input type="text" name="UserName" class="form-control" id="exampleFormControlInput1" placeholder="Name" required autoComplete='off' />
            </div>

            <div class="form-group">
              <label for="exampleFormControlInput1">Email address</label>
              <input type="email" name="Email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" required autoComplete='off' />
            </div>
            <div class="form-group">
              <label for="exampleFormControlTextarea1">Example textarea</label>
              <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" required autoComplete='off' name="Message"></textarea>
            </div>
            <button type="submit" class="btn btn-primary mt-3">Submit</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact
