import { useTranslation } from 'react-i18next';
import logo from './img/logo.webp'
import hero from './img/hero.webp'
import { HiMiniMagnifyingGlass } from 'react-icons/hi2';
import { SlBasket } from 'react-icons/sl';
import './App.css';
import img1 from './img/webb.png'
import img2 from './img/kiberg.png'
import info1 from './img/info1.webp'
import info2 from './img/info2.webp'
import info3 from './img/info3.webp'
import info4 from './img/info4.webp'

function App() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    return () => {
      i18n.changeLanguage(lng);
    };
  };

  return (
    <body>
    {/* Navbar */}
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
      </div><hr />




    {/* Home page */}
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



      {/* About page */}
      <div className='about'>

        <div className="about-texts-btn">
          <div className="about-texts">
            <h1>{t('ab-text')}</h1>
            <p>{t('ab-text2')}</p>
          </div>

          <div className="about-btn">
            <button>{t('ab-btn1')}</button>
            <button>{t('ab-btn2')}</button>
            <button>{t('ab-btn3')}</button>
            <button>{t('ab-btn4')}</button>
          </div>
        </div>

        <div className="img">
          <div className="img1">
            <div className='.img'><img src={img1} alt="" /></div>
            <h2>Frontend</h2>
            <div className='p'>
              <div className='p-text'>
                <p>{('Frontend (React JS8)')}</p>
              </div>

              <div className="p-num">
                <p>2,000,000 so'm</p>
              </div>
            </div>
          </div>


          <div className="img1">
            <div className='.img'><img src={img2} alt="" /></div>
            <h2>Kiberxavsizlik and Pentesting</h2>
            <p className='p2'>2,000,000 so'm</p>
          </div>
        </div>
      </div>

      <div className="about2">
        <div className="ab-text">
          <h1>{t('start')}</h1>
          <p>{t('start2')}</p>
        </div>

        <div className="infos">
          <div className='info1'>
            <div className='info-img'>
              <img src={info1} alt="" />
            </div>

            <div className="info-text">
              <h2>{t('ab1')}</h2>
              <p>{t('t1')}</p>
            </div>
          </div>

          <div className='info1'>
            <div className='info-img'>
              <img src={info2} alt="" />
            </div>

            <div className="info-text">
              <h2>{t('ab1')}</h2>
              <p>{t('t1')}</p>
            </div>
          </div>

          <div className='info1'>
            <div className='info-img'>
              <img src={info3} alt="" />
            </div>

            <div className="info-text">
              <h2>{t('ab1')}</h2>
              <p>{t('t1')}</p>
            </div>
          </div>

          <div className='info1'>
            <div className='info-img'>
              <img src={info4} alt="" />
            </div>

            <div className="info-text">
              <h2>{t('ab1')}</h2>
              <p>{t('t1')}</p>
            </div>
          </div>

          
        </div>

      </div>


    </body>
  )
}

export default App
