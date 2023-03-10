const RestrauntCard = ({
  name,
  avgRating,
  costForTwoString,
  cloudinaryImageId,
}) => {
  return (
    <div className="card">
      <img
        src={
          "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" +
          cloudinaryImageId
        }
      />

      <h2>{name}</h2>
      <h2>{avgRating}</h2>
      <h3>{costForTwoString}</h3>
    </div>
  );
};

export default RestrauntCard;