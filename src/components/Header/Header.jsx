import {useEffect, useState} from "react";
import {formatDate} from "../../helpers/formatDate.js";
import styles from './styles.module.css';

const Header = () => {
  const [date, setDate] = useState(formatDate(new Date()));

  useEffect(() => {
    const timer = setInterval(() => {
      setDate(formatDate(new Date()));
    }, 86400000);
    return () => clearInterval(timer);
  }, []);

  return (
    <header className={styles.header}>
      <div className={styles.header__container}>
        <button className={styles.header__button}>Search</button>
      </div>
      <p className={styles.header__date}>{date}</p>
    </header>
  );
};

export default Header;