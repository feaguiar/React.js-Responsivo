import './style.css';
import MenuIcon from '../../assets/icon2.png';
import Close from '../../assets/icon1.png';
import { useEffect, useState } from 'react';

function Menu() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.querySelector('body').style.overflow = open ? 'hidden' : 'initial';
  }, [open]);
  return (
    <div className={`${open && "menu-small"} `}>
      {open ?
        <img className='icon-close'
          style={{ display: `${open} ? 'block' : 'none'` }}
          onClick={() => setOpen(false)}
          src={Close} alt='close' />
        :
        <img className='icon-menu'
          onClick={() => setOpen(true)}
          src={MenuIcon} alt='menu' />
      }
      <ul className='menu'>
        <li>Ação</li>
        <li>Comédia</li>
        <li>Drama</li>
        <li>Infantil</li>
        <li>Aventura</li>
      </ul>

    </div>
  );
}

export default Menu;
