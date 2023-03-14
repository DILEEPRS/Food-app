import { CDN_LINK } from "./config";

const RestrauntCard = ({
  name,
  avgRating,
  costForTwoString,
  cloudinaryImageId,
}) => {
  return (
    <div className="card">
      <img src={CDN_LINK + cloudinaryImageId} />

      <h2>{name}</h2>
      <h2>{avgRating}</h2>
      <h3>{costForTwoString}</h3>
    </div>
  );
};

export default RestrauntCard;
