'use client';
import styles from './page.module.scss'
import { useEffect, useState } from 'react'
import { AnimatePresence } from 'framer-motion';
import Preloader from '../components/Preloader';
import Landing from '../components/Landing';
import Projects from '../components/Projects';
import Description from '../components/Description';
import SlidingImages from '../components/SlidingImages';
import Contact from '../components/Contact';
import ZoomParallax from '../components/ZoomParallax/index';
import Lenis from '@studio-freight/lenis';
import Card from '../components/Card';
import Spacer from '../components/Spacer';
import { useScroll } from 'framer-motion';
import { useRef } from 'react';
import { projects } from '../data';


export default function Home() {

  const [isLoading, setIsLoading] = useState(true);
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end']
  })

  useEffect( () => {
    (
      async () => {
          const LocomotiveScroll = (await import('locomotive-scroll')).default
          const locomotiveScroll = new LocomotiveScroll();

          setTimeout( () => {
            setIsLoading(false);
            document.body.style.cursor = 'default'
            window.scrollTo(0,0);
          }, 2000)
      }
    )()

    const lenis = new Lenis()
       
    function raf(time) {
        lenis.raf(time)
        requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
  }, [])

  return (
    <main ref={container} className={styles.main}>
      <AnimatePresence mode='wait'>
        {isLoading && <Preloader />}
      </AnimatePresence>
      <Landing />
      <ZoomParallax />
      <Description />
      {
        projects.map( (project, i) => {
          const targetScale = 1 - ( (projects.length - i) * 0.05);
          return <Card key={`p_${i}`} i={i} {...project} progress={scrollYProgress} range={[i * .25, 1]} targetScale={targetScale} className="body-cards"/>
        })
      }
      {/* <Projects /> */}
      <Spacer height="100px" />
      {/* <SlidingImages /> */}
      <Contact />
    </main>
  )
}
