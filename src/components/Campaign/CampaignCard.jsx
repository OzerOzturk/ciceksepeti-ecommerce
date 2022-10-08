import React from "react";
import PropTypes from "prop-types";

const CampaignCard = ({ title, info, image, backgroundColor }) => {
  return (
    <div className="campaignCard" style={{ backgroundColor: backgroundColor }}>
      <img src={image} className="campaignCard__image" alt="image card" />
      <main className="campaignCard__main">
        <p className="campaignCard__main__title"> {title} </p>
        <button className="campaignCard__main__button"> {info} </button>
      </main>
    </div>
  );
};

export default CampaignCard;

CampaignCard.propTypes = {
  title: PropTypes.string,
  info: PropTypes.string,
  image: PropTypes.any,
  backgroundColor: PropTypes.any,
};
