import { useTranslation } from 'react-i18next';
import logo from './img/logo.webp'
import hero from './img/hero.webp'
import { HiMiniMagnifyingGlass } from 'react-icons/hi2';
import { SlBasket } from 'react-icons/sl';
import './App.css';

function App() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    return () => {
      i18n.changeLanguage(lng);
    };
  };

  return (
    <>
      <div className='nav'>
        <div className='logo-links'>
          <div className='logo'>
            <img src={logo} alt="" />
          </div>

          <ul className='nav-links'>
            <li>{t('home')}</li>
            <li>{t('courses')}</li>
            <li>{t('contact')}</li>
          </ul>
        </div>

        <div className='nav-btn'> 
          <button className='icon'><HiMiniMagnifyingGlass /></button>
          <button onClick={changeLanguage('en')}>ENG</button>
          <button onClick={changeLanguage('uz')}>UZB</button>
          <button onClick={changeLanguage('ru')}>RUS</button>
          <button className='icon'><SlBasket /></button>
          <button className='log'>{t('log')}</button>
        </div>
      </div>



      <div className='home'>
        <div className='texts'>
          <h1>{t('text')}</h1>
          <p>{t('text2')}</p>
          <button className='home-btn'>{t('find')}</button>
        </div>

        <div className='hero'>
          <img src={hero} alt="" />
        </div>
      </div>
    </>
  )
}

export default App
