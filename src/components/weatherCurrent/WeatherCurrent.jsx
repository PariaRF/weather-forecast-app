import { amPmIndicator, formatedDate } from "./weatherCurrent";
import { FaThermometerHalf } from "react-icons/fa";
import { FiWind } from "react-icons/fi";
import { LiaCloudSolid } from "react-icons/lia";
import { WiHumidity } from "react-icons/wi";

function WeatherCurrent({ current, timezone }) {
  const { temperature, summary, icon, wind, cloud_cover } = current;

  return (
    <>
      <div className="current__row">
        <h5>CURRENT WEATHER</h5>
        <div className="current__detail">
          <div>
            <h3>{timezone}</h3>
            <h4>{formatedDate()}</h4>
          </div>
          <div>
            <h3>{temperature}°C</h3>
            <h4>{summary}</h4>
          </div>
          <div>
            <img
              className="icon_large"
              src={`/public/assets/icons/${
                icon
                  ? amPmIndicator() === "AM"
                    ? icon
                    : icon + "n"
                  : "unknown"
              }.png`}
              alt={`${icon}-icon`}
            />
          </div>
        </div>
      </div>

      <div className="current__row">
        <h5 style={{ marginBottom: "1.5rem" }}>AIR CONDITIONS</h5>
        <div className="current__detail">
          <div>
            <div className="current__detail__col">
              <FaThermometerHalf style={{ width: "27px" }} />
              <span className="small">Real Feel</span>
            </div>
            <h4 className="detail__temp small">
              {Number(temperature).toFixed()} °C
            </h4>
          </div>
          <div>
            <div className="current__detail__col">
              <FiWind className="icon_medium" />
              <span className="small">Wind</span>
            </div>
            <h4 className="detail__temp small">{wind?.speed || "00"} m/s</h4>
          </div>
          <div>
            <div className="current__detail__col">
              <LiaCloudSolid className="icon_medium" />
              <span className="small">Clouds</span>
            </div>
            <h4 className="detail__temp small">{cloud_cover} %</h4>
          </div>
          <div>
            <div className="current__detail__col">
              <WiHumidity className="icon_medium" />
              <span className="small">Humidity</span>
            </div>
            <h4 className="detail__temp small">{cloud_cover} %</h4>
          </div>
        </div>
      </div>

      <div className="current__row">
        <h5>TODAY'S FORECAST</h5>
        <div className="current__text">3 available forecast</div>
        <div className="current__detail">
          <div className="current__detail__item">
            <span>{new Date().getHours()}:00</span>
            <img
              className="icon-regular"
              src={`/public/assets/icons/${
                icon
                  ? amPmIndicator() === "AM"
                    ? icon
                    : icon + "n"
                  : "unknown"
              }.png`}
              alt={`${icon}-icon`}
            />
            <span>{temperature}°C</span>
          </div>
          <div className="current__detail__item">
            <span>{new Date().getHours()}:00</span>
            <img
              className="icon-regular"
              src={`/public/assets/icons/${
                icon
                  ? amPmIndicator() === "AM"
                    ? icon
                    : icon + "n"
                  : "unknown"
              }.png`}
              alt={`${icon}-icon`}
            />
            <span>{temperature}°C</span>
          </div>
          <div className="current__detail__item">
            <span>{new Date().getHours()}:00</span>
            <img
              className="icon-regular"
              src={`/public/assets/icons/${
                icon
                  ? amPmIndicator() === "AM"
                    ? icon
                    : icon + "n"
                  : "unknown"
              }.png`}
              alt={`${icon}-icon`}
            />
            <span>{temperature}°C</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default WeatherCurrent;
