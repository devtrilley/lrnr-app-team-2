// Home page card component for content describing app

// Importing HomeCard stylesheet
import './Card.scss'

export default function Card({ icon, cardHeading, cardText }) {
  return (
    // cus stands for custom. this used used to not interffere with built in Materialize classes.
    <div className="container cus-home-card">
      <i className="material-icons teal-text text-accent-3 cus-card-icon">{icon}</i>
      <h3 className='cus-card-heading'>{cardHeading}</h3>
      <p className='cus-card-text'>{cardText}</p>
    </div>
  );
}
