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

      <h2 style={{ textDecoration: "none" }}>{name}</h2>
      <h2 className="link">{avgRating}</h2>
      <h3 className="link">{costForTwoString}</h3>
    </div>
  );
};

export default RestrauntCard;
