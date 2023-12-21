

import Retes from '../common/rates';
import './Header.scss';

const Header = () => {
  return (
    <header className='header container'>
      <div className='header__logo'>
        $₴€ Exchange Rates
      </div>
      <div className='header__list'>
        <Retes />
      </div>
    </header>
  )
}

export default Header;