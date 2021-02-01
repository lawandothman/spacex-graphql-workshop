import { gql, useQuery } from "@apollo/client";
import Launch from "../components/Launch";

const GET_LAUNCHES = gql`
  query {
    launchesPast(limit: 10, offset: 10) {
      id
      mission_name
      links {
        flickr_images
      }
      rocket {
        rocket_name
      }
      launch_date_utc
    }
  }
`;

const HomeScreen = () => {
  const { loading, error, data } = useQuery(GET_LAUNCHES);

  if (loading) return <h4>Loading...</h4>;
  if (error) console.error(error);

  return (
    <div style={{ display: "grid", gridTemplateColumns: "1fr" }}>
      {data.launchesPast.map((launch) => (
        <Launch key={launch.id} launch={launch} />
      ))}
    </div>
  );
};

export default HomeScreen;
