import React from 'react'
import styles from '../styles/tabnav.module.css'
import Link from 'next/link'
function TabNav({tabs}) {
  return (
    <div className={styles.tabnav}>
      <Link className={styles.tab} href={`${tabs}`}>Tab 1</Link>
      <Link className={styles.tab} href={`${tabs}`}>Tab 2</Link>
    </div>
  )
}

export default TabNav