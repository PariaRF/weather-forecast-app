import { FaThermometerHalf } from "react-icons/fa";
import { LiaCloudSolid } from "react-icons/lia";
import { FiWind } from "react-icons/fi";
import { WiHumidity } from "react-icons/wi";
import { useEffect, useState } from "react";
import { amPmIndicator } from "../weatherCurrent/weatherCurrent";

function WeatherWeekly({ data, isLoading }) {
  const [dailyFormatted, setDailyFormatted] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      if (!isLoading && data) {
        setDailyFormatted(
          data.daily.data.map((day) => {
            const dayOfWeekName = new Date(day.day).toLocaleDateString(
              "en-US",
              {
                weekday: "long",
              }
            );
            return { ...day, day: dayOfWeekName };
          })
        );
      }
    };

    loadData();
  }, [data, isLoading]);

  return (
    dailyFormatted.length > 0 && (
      <>
        <h5>WEEKLY FORECAST</h5>
        {dailyFormatted.map((item, index) => (
          <WeeklyItem key={index} item={item} />
        ))}
      </>
    )
  );
}

export default WeatherWeekly;

function WeeklyItem({ item }) {
  const { day, weather, all_day } = item;
  const { temperature, cloud_cover, wind } = all_day;

  return (
    <div className="weekly__item">
      <div className="item__col">
        <span className="text-medium">{day}</span>
        <span className="item__col__detail">
          <img
            className="icon-extra-small"
            src={`/public/assets/icons/${
              weather
                ? amPmIndicator() === "AM"
                  ? weather
                  : weather + "n"
                : "unknown"
            }.png`}
            alt={`${weather}-icon`}
          />
          <span>{weather}</span>
        </span>
      </div>
      <div className="item__col">
        <span className="text-medium">
          <FaThermometerHalf className="small" /> {temperature}°C
        </span>
        <span className="text-medium">
          <LiaCloudSolid className="small" /> {cloud_cover.total}%
        </span>
      </div>
      <div className="item__col">
        <span className="text-medium">
          <FiWind className="small" /> {wind.speed} m/s
        </span>
        <span className="text-medium">
          <WiHumidity className="small" /> 19%
        </span>
      </div>
    </div>
  );
}
