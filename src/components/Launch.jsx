const Launch = ({ launch }) => {
  return (
    <div style={{ margin: "auto", width: "80%", textAlign: "center" }}>
      <img
        src={launch.links.flickr_images[0]}
        alt={launch.mission_name}
        width="600"
      />
      <h4>{launch.mission_name}</h4>
    </div>
  );
};

export default Launch;
