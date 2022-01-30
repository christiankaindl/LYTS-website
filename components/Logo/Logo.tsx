import { FunctionComponent } from "react";
import * as styles from './Logo.css'

interface Props {
  accentColor?: string
  size?: 'small' | 'large'
}

const Logo: FunctionComponent<Props> = function ({ size = 'small', accentColor = 'white' }) {
  return (
    <div className={`${styles.logo} ${styles[size]}`}>L<span className={styles.why}><span style={{ color: accentColor }}>Y</span></span>TS</div>
  )
}

export default Logo
