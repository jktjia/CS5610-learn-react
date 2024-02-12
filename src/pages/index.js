// import Head from 'next/head'
// import Image from 'next/image'
// import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import FeedbackForm from './qcomps/thankYouCrash.js'

export default function Home() {
  return (
    <div className={styles.main}>
        <FeedbackForm />
    </div>
  )
}
