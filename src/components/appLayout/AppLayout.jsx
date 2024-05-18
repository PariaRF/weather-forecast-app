import usePoint from "../../hooks/usePoint";
import WeatherCurrent from "../weatherCurrent/WeatherCurrent";
import WeatherHeader from "../weatherHeader/WeatherHeader";
import WeatherWeekly from "../weatherWeekly/WeatherWeekly";

function AppLayout() {
  const { timezone, current, data, isLoading } = usePoint();

  return (
    <div className="weather-layout">
      <div className="weather__container">
        <div className="weather__header">
          <WeatherHeader timezone={timezone} />
        </div>
        <div className="weather__current">
          <WeatherCurrent current={current} timezone={timezone} />
        </div>
        <div className="weather__weekly">
          <WeatherWeekly data={data} isLoading={isLoading} />
        </div>
      </div>
    </div>
  );
}

export default AppLayout;
