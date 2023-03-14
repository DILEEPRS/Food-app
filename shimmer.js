const Shimmer = () => {
  return (
      <div className="cardbody">
          
          
      { Array(100)
        .fill("")
        .map((elem) => {
          return(<div className="shimmer"></div>);
        })}
    </div>
  );
};

export default Shimmer;
