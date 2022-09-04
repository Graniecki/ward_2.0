import classNames from "classnames";
import { NavLink } from "react-router-dom";
import './RouteLink.scss';

export const RouteLink = ({ path, icon, linkName }) => (
  <NavLink
    to={path}
    className={({ isActive }) => classNames("route-link", {
        "active": isActive,
      })
    }
  >
    <div className="route-link__wrapper">
      <img
        className="route-link__icon"
        src={`https://res.cloudinary.com/drxhx6l44/image/upload/v1661627797/ward_2.0/${icon}.png`}
        alt={icon}
      />
      <span className="route-link__name">{linkName}</span>
    </div>
  </NavLink>
);
