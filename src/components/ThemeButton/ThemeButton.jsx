import styles from './styles.module.css'
import {useTheme} from "../../context/ThemeContext.jsx"

function ThemeButton() {
  const {isDarkMode, toggleTheme} = useTheme()

  return (
    <button className={styles.theme_button} onClick={toggleTheme}>
      <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0_186_160)">
          <path fillRule="evenodd" clipRule="evenodd"
                d="M20 12C20 11.7016 20.1185 11.4155 20.3295 11.2045C20.5405 10.9935 20.8266 10.875 21.125 10.875H23.375C23.6734 10.875 23.9595 10.9935 24.1705 11.2045C24.3815 11.4155 24.5 11.7016 24.5 12C24.5 12.2984 24.3815 12.5845 24.1705 12.7955C23.9595 13.0065 23.6734 13.125 23.375 13.125H21.125C20.8266 13.125 20.5405 13.0065 20.3295 12.7955C20.1185 12.5845 20 12.2984 20 12ZM6.5 12C6.5 13.5913 7.13214 15.1174 8.25736 16.2426C9.38258 17.3679 10.9087 18 12.5 18C14.0913 18 15.6174 17.3679 16.7426 16.2426C17.8679 15.1174 18.5 13.5913 18.5 12C18.5 10.4087 17.8679 8.88258 16.7426 7.75736C15.6174 6.63214 14.0913 6 12.5 6C10.9087 6 9.38258 6.63214 8.25736 7.75736C7.13214 8.88258 6.5 10.4087 6.5 12ZM1.625 10.875C1.32663 10.875 1.04048 10.9935 0.829506 11.2045C0.618526 11.4155 0.5 11.7016 0.5 12C0.5 12.2984 0.618526 12.5845 0.829506 12.7955C1.04048 13.0065 1.32663 13.125 1.625 13.125H3.875C4.17337 13.125 4.45952 13.0065 4.67049 12.7955C4.88147 12.5845 5 12.2984 5 12C5 11.7016 4.88147 11.4155 4.67049 11.2045C4.45952 10.9935 4.17337 10.875 3.875 10.875H1.625ZM12.5 19.5C12.7984 19.5 13.0845 19.6185 13.2955 19.8295C13.5065 20.0405 13.625 20.3266 13.625 20.625V22.875C13.625 23.1734 13.5065 23.4595 13.2955 23.6705C13.0845 23.8815 12.7984 24 12.5 24C12.2016 24 11.9155 23.8815 11.7045 23.6705C11.4935 23.4595 11.375 23.1734 11.375 22.875V20.625C11.375 20.3266 11.4935 20.0405 11.7045 19.8295C11.9155 19.6185 12.2016 19.5 12.5 19.5ZM13.625 1.125C13.625 0.826631 13.5065 0.540483 13.2955 0.329505C13.0845 0.118526 12.7984 0 12.5 0C12.2016 0 11.9155 0.118526 11.7045 0.329505C11.4935 0.540483 11.375 0.826631 11.375 1.125V3.375C11.375 3.67337 11.4935 3.95952 11.7045 4.1705C11.9155 4.38147 12.2016 4.5 12.5 4.5C12.7984 4.5 13.0845 4.38147 13.2955 4.1705C13.5065 3.95952 13.625 3.67337 13.625 3.375V1.125ZM17.804 17.304C18.0149 17.0933 18.3009 16.975 18.599 16.975C18.8971 16.975 19.1831 17.0933 19.394 17.304L20.984 18.894C21.1827 19.1073 21.2909 19.3893 21.2858 19.6808C21.2806 19.9722 21.1626 20.2503 20.9564 20.4564C20.7503 20.6626 20.4722 20.7806 20.1808 20.7858C19.8893 20.7909 19.6073 20.6827 19.394 20.484L17.804 18.894C17.5933 18.6831 17.475 18.3971 17.475 18.099C17.475 17.8009 17.5933 17.5149 17.804 17.304ZM5.606 3.5145C5.39274 3.31578 5.11067 3.2076 4.81922 3.21274C4.52777 3.21788 4.24969 3.33595 4.04357 3.54207C3.83745 3.74819 3.71938 4.02626 3.71424 4.31772C3.7091 4.60917 3.81728 4.89124 4.016 5.1045L5.606 6.6975C5.81827 6.90233 6.1025 7.01559 6.39748 7.01289C6.69245 7.01019 6.97456 6.89174 7.18304 6.68306C7.39153 6.47437 7.50971 6.19215 7.51214 5.89718C7.51456 5.60221 7.40103 5.31808 7.196 5.106L5.606 3.5145ZM7.196 17.304C7.40668 17.5149 7.52501 17.8009 7.52501 18.099C7.52501 18.3971 7.40668 18.6831 7.196 18.894L5.606 20.484C5.39274 20.6827 5.11067 20.7909 4.81922 20.7858C4.52777 20.7806 4.24969 20.6626 4.04357 20.4564C3.83745 20.2503 3.71938 19.9722 3.71424 19.6808C3.7091 19.3893 3.81728 19.1073 4.016 18.894L5.606 17.304C5.81694 17.0933 6.10287 16.975 6.401 16.975C6.69913 16.975 6.98506 17.0933 7.196 17.304ZM20.9855 5.106C21.1842 4.89274 21.2924 4.61067 21.2873 4.31922C21.2821 4.02776 21.1641 3.74969 20.9579 3.54357C20.7518 3.33745 20.4737 3.21938 20.1823 3.21424C19.8908 3.2091 19.6088 3.31728 19.3955 3.516L17.804 5.106C17.6935 5.20899 17.6048 5.33319 17.5433 5.47119C17.4818 5.60919 17.4488 5.75816 17.4461 5.90922C17.4434 6.06027 17.4712 6.21031 17.5278 6.3504C17.5844 6.49048 17.6686 6.61773 17.7754 6.72456C17.8823 6.83139 18.0095 6.9156 18.1496 6.97218C18.2897 7.02877 18.4397 7.05655 18.5908 7.05389C18.7418 7.05122 18.8908 7.01816 19.0288 6.95667C19.1668 6.89518 19.291 6.80653 19.394 6.696L20.9855 5.106Z"
                fill={isDarkMode ? '#6C7072' : '#fafafa'}/>
        </g>
        <defs>
          <clipPath id="clip0_186_160">
            <rect width="24" height="24" fill="white" transform="matrix(0 1 -1 0 24.5 0)"/>
          </clipPath>
        </defs>
      </svg>
      <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd"
              d="M11.3102 1.56751C9.34754 1.7916 7.48787 2.56473 5.94479 3.79811C4.40171 5.03149 3.2378 6.6751 2.58674 8.54015C1.93568 10.4052 1.82388 12.4161 2.26417 14.3418C2.70446 16.2676 3.67898 18.0301 5.07582 19.4269C6.47266 20.8237 8.23516 21.7983 10.1609 22.2386C12.0866 22.6788 14.0975 22.567 15.9626 21.916C17.8276 21.2649 19.4712 20.101 20.7046 18.5579C21.938 17.0149 22.7111 15.1552 22.9352 13.1925L22.9397 13.1505C22.9818 12.7684 23.0028 12.3844 23.0027 12C23.0027 11.2095 22.007 10.6425 21.5 11.25C21.3492 11.4303 20.9206 12.0741 20.7497 12.2355C20.1657 12.7869 19.477 13.2154 18.7243 13.4957C17.9717 13.776 17.1704 13.9023 16.368 13.8671C15.5657 13.832 14.7785 13.6361 14.0532 13.2911C13.3279 12.9461 12.6793 12.459 12.1458 11.8587C11.6122 11.2584 11.2047 10.557 10.9472 9.79626C10.6897 9.0355 10.5876 8.23078 10.6469 7.42982C10.7062 6.62887 10.9258 5.84797 11.2925 5.13342C11.6592 4.41886 12.6338 3.51521 13.25 3.00001C13.856 2.49301 13.2917 1.50001 12.5027 1.50001C12.1048 1.49992 11.7071 1.52246 11.3117 1.56751"
              fill={isDarkMode ? '#5560f0' : '#6C7072'}/>
      </svg>
    </button>
  )
}

export default ThemeButton