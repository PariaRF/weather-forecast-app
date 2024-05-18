import { transformDateFormat } from "./weatherHeader";
import { IoIosArrowDown } from "react-icons/io";

function WeatherHeader({ timezone }) {
  return (
    <>
      <div className="header__intro">
        <img
          src="/public/assets/images/the-weather-forecasting.png"
          alt="weather-forecasting-logo"
          className="header__img"
        />
        <span className="header__date">{transformDateFormat()}</span>
        <img
          src="/public/assets/icons/clear.png"
          alt="weather-icon"
          className="header__icon"
        />
      </div>

      <div className="header__search">
        <div className="search__wrapper">
          <label>{timezone}</label>
          <span>|</span>
          <IoIosArrowDown className="search__icon" />
        </div>
      </div>
    </>
  );
}

export default WeatherHeader;
