import starActive from "../../assets/images/star-rate.svg";
import starInactive from "../../assets/images/emptySr.svg";

const Stars = ({ rating }) => {
  const starsArray = [];
  for (let i = 0; i < 5; i++) {
    if (i < rating) {
      starsArray.push(<img key={i} src={starActive} alt="étoile active" />);
    } else {
      starsArray.push(<img key={i} src={starInactive} alt="étoile inactive" />);
    }
  }

  return <figure className="stars">{starsArray}</figure>;
};

export default Stars;
