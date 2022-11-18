import { Button } from 'antd'
import styles from './index.module.css'
import img1 from '../../assets/1.jpg'
import img2 from '../../assets/2.jpg'
function B() {
  return (
    <div>
      <Button type="primary">B按钮</Button>
      <picture>
        <source
          srcSet={img1}
          media="(min-width: 600px)"
          className={styles.img}
        />
        <img src={img2} alt="" className={styles.img} />
      </picture>
    </div>
  )
}

export default B
