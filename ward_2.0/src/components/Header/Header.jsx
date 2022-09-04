import { RouteLink } from "../RouteLink/RouteLink";
import "./Header.scss";

export const Header = () => {
  return (
    <header className="header">
      <nav className="header__navbar">
        <RouteLink path='/' icon='home-icon_fuuhmt' linkName='Home' />
        <RouteLink path='/quiz' icon='quiz-icon_nowh80' linkName='Quiz' />
        <RouteLink path='/vocabulary' icon='cup-icon_qmimn7' linkName='Vocabulary' />
      </nav>
    </header>
  );
};
