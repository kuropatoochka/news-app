import styles from './styles.module.css';

const Skeleton = ({count=1, type='banner'}) => {
  return (
    <>
      {count > 1 ? (
        <ul>
          {[...Array(count)].map((_, index) => (
            <li className={type === 'banner' ? styles.banner : styles.item} key={index}></li>
          ))}
        </ul>
      ) : <li className={type === 'banner' ? styles.banner : styles.item}></li>}
    </>
  );
};

export default Skeleton;