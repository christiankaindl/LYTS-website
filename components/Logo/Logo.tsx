import { FunctionComponent } from "react";
import * as styles from './Logo.css'

interface Props {
  accentColor?: string
  size?: 'small' | 'large' | 'xlarge'
}

const Logo: FunctionComponent<Props> = function ({ size = 'small', accentColor = 'white' }) {
  return (
    <svg aria-label="Logo with the letter LYTS" className={`${styles.logo} ${styles[size]}`} viewBox="0 0 575 240" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_35_35)">
      <path fillRule="evenodd" clipRule="evenodd" d="M105.894 47.1292C103.788 54.0168 105.247 62.29 108.164 78.8364L128.32 193.148C131.238 209.695 132.697 217.968 137.031 223.72C140.844 228.779 146.161 232.502 152.219 234.354C159.107 236.46 167.38 235.001 183.926 232.084L268.402 217.189C284.948 214.271 293.222 212.812 298.974 208.478C304.033 204.665 307.756 199.348 309.608 193.29C311.714 186.402 310.255 178.129 307.338 161.583L287.181 47.2708C284.264 30.7244 282.805 22.4513 278.471 16.6992C274.658 11.6396 269.341 7.91681 263.283 6.06452C256.395 3.95875 248.122 5.41753 231.576 8.3351L147.1 23.2304C130.554 26.148 122.28 27.6068 116.528 31.9413C111.469 35.754 107.746 41.0706 105.894 47.1292ZM145.991 69.572C142.222 70.2366 140.567 74.7159 142.997 77.6718L197.542 144.001C198.089 144.666 198.455 145.461 198.604 146.309L205.427 185.001C205.906 187.72 208.5 189.536 211.219 189.057L228.044 186.09C230.763 185.611 232.579 183.017 232.1 180.298L225.277 141.606C225.128 140.758 225.2 139.886 225.486 139.074L254.056 58.0893C255.329 54.4803 252.241 50.8373 248.472 51.5018L229.784 54.797C227.96 55.1186 226.464 56.4219 225.894 58.1843L207.692 114.538C207.573 114.907 207.26 115.18 206.878 115.247C206.497 115.314 206.109 115.165 205.871 114.859L169.493 68.1294C168.355 66.6681 166.503 65.9552 164.679 66.2768L145.991 69.572Z" fill="currentColor" />
      <path d="M7.99999 205.948C5.19974 205.948 3.79961 205.948 2.73005 205.403C1.78924 204.923 1.02433 204.158 0.544967 203.218C0 202.148 0 200.748 0 197.948V73.9145C0 71.1143 0 69.7141 0.544967 68.6446C1.02433 67.7038 1.78924 66.9389 2.73005 66.4595C3.79961 65.9145 5.19974 65.9145 8 65.9145H21.6066C24.4069 65.9145 25.807 65.9145 26.8766 66.4595C27.8174 66.9389 28.5823 67.7038 29.0616 68.6446C29.6066 69.7141 29.6066 71.1143 29.6066 73.9145V173.538C29.6066 176.338 29.6066 177.738 30.1516 178.807C30.6309 179.748 31.3958 180.513 32.3366 180.993C33.4062 181.538 34.8063 181.538 37.6066 181.538H81.6403C84.4406 181.538 85.8407 181.538 86.9103 182.082C87.8511 182.562 88.616 183.327 89.0953 184.268C89.6403 185.337 89.6403 186.737 89.6403 189.538V197.948C89.6403 200.748 89.6403 202.148 89.0953 203.218C88.616 204.158 87.8511 204.923 86.9103 205.403C85.8407 205.948 84.4406 205.948 81.6403 205.948H7.99999Z" fill="currentColor" />
      <path d="M334.732 90.3246C331.932 90.3246 330.532 90.3246 329.462 89.7796C328.522 89.3002 327.757 88.5353 327.277 87.5945C326.732 86.525 326.732 85.1248 326.732 82.3246V73.9145C326.732 71.1143 326.732 69.7141 327.277 68.6446C327.757 67.7038 328.522 66.9389 329.462 66.4595C330.532 65.9145 331.932 65.9145 334.732 65.9145H433.74C436.54 65.9145 437.94 65.9145 439.01 66.4595C439.951 66.9389 440.716 67.7038 441.195 68.6446C441.74 69.7141 441.74 71.1143 441.74 73.9145V82.3246C441.74 85.1248 441.74 86.525 441.195 87.5945C440.716 88.5353 439.951 89.3002 439.01 89.7796C437.94 90.3246 436.54 90.3246 433.74 90.3246H406.869C404.068 90.3246 402.668 90.3246 401.599 90.8695C400.658 91.3489 399.893 92.1138 399.414 93.0546C398.869 94.1242 398.869 95.5243 398.869 98.3246V197.948C398.869 200.748 398.869 202.148 398.324 203.218C397.844 204.158 397.079 204.923 396.139 205.403C395.069 205.948 393.669 205.948 390.869 205.948H377.604C374.804 205.948 373.403 205.948 372.334 205.403C371.393 204.923 370.628 204.158 370.149 203.218C369.604 202.148 369.604 200.748 369.604 197.948V98.3246C369.604 95.5243 369.604 94.1242 369.059 93.0546C368.58 92.1138 367.815 91.3489 366.874 90.8695C365.804 90.3246 364.404 90.3246 361.604 90.3246H334.732Z" fill="currentColor" />
      <path d="M551.593 106.188C549.312 106.188 548.171 106.188 547.385 105.919C546.449 105.599 546.237 105.469 545.526 104.782C544.929 104.204 544.085 102.554 542.396 99.2533C541.209 96.9315 539.511 94.9581 537.304 93.3331C533.156 90.279 527.527 88.7519 520.416 88.7519C515.584 88.7519 511.504 89.4357 508.176 90.8032C504.849 92.1251 502.296 93.9713 500.518 96.3416C498.786 98.712 497.92 101.401 497.92 104.41C497.829 106.917 498.353 109.105 499.493 110.974C500.678 112.843 502.296 114.461 504.347 115.829C506.399 117.151 508.769 118.313 511.458 119.316C514.148 120.273 517.02 121.094 520.074 121.777L532.655 124.786C538.763 126.153 544.37 127.977 549.475 130.256C554.581 132.535 559.002 135.338 562.74 138.666C566.478 141.994 569.373 145.914 571.424 150.427C573.521 154.939 574.592 160.113 574.637 165.948C574.592 174.518 572.404 181.948 568.073 188.238C563.788 194.483 557.589 199.338 549.475 202.802C541.407 206.221 531.675 207.93 520.279 207.93C508.974 207.93 499.128 206.198 490.741 202.734C482.399 199.27 475.88 194.141 471.185 187.349C467.848 182.442 465.65 176.701 464.591 170.127C464.197 167.687 464.001 166.467 464.468 165.224C464.845 164.221 465.737 163.173 466.668 162.641C467.821 161.982 469.231 161.982 472.052 161.982H485.044C487.491 161.982 488.714 161.982 489.565 162.302C490.51 162.657 490.85 162.889 491.525 163.64C492.132 164.315 492.777 165.965 494.068 169.265C494.707 170.9 495.535 172.393 496.553 173.743C498.969 176.842 502.182 179.19 506.194 180.785C510.25 182.335 514.832 183.11 519.937 183.11C524.951 183.11 529.304 182.381 532.997 180.922C536.735 179.463 539.629 177.435 541.68 174.837C543.732 172.238 544.757 169.253 544.757 165.88C544.757 162.734 543.823 160.09 541.954 157.948C540.131 155.806 537.441 153.982 533.886 152.478C530.376 150.974 526.068 149.606 520.963 148.375L505.715 144.546C493.909 141.675 484.587 137.185 477.749 131.076C470.912 124.968 467.516 116.74 467.561 106.393C467.516 97.9143 469.772 90.5069 474.331 84.1708C478.934 77.8347 485.248 72.8888 493.271 69.3333C501.293 65.7778 510.41 64 520.621 64C531.014 64 540.085 65.7778 547.834 69.3333C555.629 72.8888 561.692 77.8347 566.022 84.1708C568.896 88.3758 570.846 93.0225 571.873 98.111C572.333 100.391 572.564 101.531 572.121 102.817C571.773 103.826 570.845 104.959 569.925 105.499C568.753 106.188 567.366 106.188 564.591 106.188H551.593Z" fill="currentColor" />
      </g>
        <defs>
          <clipPath id="clip0_35_35">
            <rect width="575" height="240" fill="white"/>
          </clipPath>
        </defs>
      </svg>

    // <div className={`${styles.logo} ${styles[size]}`}>L<span className={styles.why}><span style={{ color: accentColor }}>Y</span></span>TS</div>
  )
}

export default Logo
