// import { Button } from 'antd'
import styles from './index.module.css'
import axios from 'axios'
import { useEffect } from 'react'
import { useState, useRef } from 'react'
function A() {
  const [state, setState] = useState(null)
  const wrapRef = useRef()
  useEffect(() => {
    axios.get('http://localhost:8888/list').then((res) => {
      console.log(wrapRef.current.getBoundingClientRect())
      setState(res.data)
    })
  }, [])

  return (
    <div className={`${styles.wrap}`} ref={wrapRef}>
      {state &&
        state.map((item, index) => {
          return (
            <div key={index} className={styles.item}>
              {item.name} ---- {item.age}
            </div>
          )
        })}
    </div>
  )
}

export default A
