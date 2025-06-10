import "./App.css";
import { gql, useQuery } from "@apollo/client";

const GET_ALL_DRIVERS_AND_THEIR_CAR = gql`
  query {
    drivers {
      name
      age
      cars {
        name
        model
      }
    }
  }
`;

function App() {
  const { loading, error, data } = useQuery(GET_ALL_DRIVERS_AND_THEIR_CAR);

  if (loading) return <p>LOADING..._...</p>;
  if (error) return <p>ERROR {error.message}</p>;
  // console.log("data--->", data);
  return (
    <div className="container">
      {data ? (
        <div className="drivers-grid">
          {data.drivers.map((driver) => (
            <div key={driver.name} className="driver-card">
              <h2 className="driver-name">{driver.name}</h2>
              <p className="driver-age">Age: {driver.age}</p>
              <div className="cars-container">
                {driver.cars.length > 0 ? (
                  driver.cars.map((car, i) => (
                    <div key={i} className="car-item">
                      <h3 className="car-name">{car.name}</h3>
                      <p className="car-model">Model : {car.model}</p>
                    </div>
                  ))
                ) : (
                  <div className="car-item">
                    <p className="car-model">The driver doesn't has cars</p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="cars-container">No data available</div>
      )}
    </div>
  );
}

export default App;
