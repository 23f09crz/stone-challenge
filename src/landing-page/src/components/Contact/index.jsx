import styles from './style.module.scss';
import Image from 'next/image';
import Rounded from '../../common/RoundedButton';
import { useRef } from 'react';
import { useScroll, motion, useTransform, useSpring } from 'framer-motion';
import Magnetic from '../../common/Magnetic';

export default function index() {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start end", "end end"]
    })
    const x = useTransform(scrollYProgress, [0, 1], [0, 100])
    const y = useTransform(scrollYProgress, [0, 1], [-500, 0])
    const rotate = useTransform(scrollYProgress, [0, 1], [120, 90])
    return (
        <section id="contatos">
        <motion.div style={{y}} ref={container} className={styles.contact}>
            <div className={styles.body}>
                <div className={styles.title}>
                    {/* <span> */}
                        {/* <div className={styles.imageContainer}>
                            <Image 
                            fill={true}
                            alt={"image"}
                            src={`/images/background.jpg`}
                            />
                        </div>
                        <div className={styles.imageContainer}>
                            <Image 
                            fill={true}
                            alt={"image"}
                            src={`/images/background.jpg`}
                            />
                        </div>
                        <div className={styles.imageContainer}>
                            <Image 
                            fill={true}
                            alt={"image"}
                            src={`/images/background.jpg`}
                            />
                        </div> */}
                        <h2>Toni by Aurum and Stone. Let's work</h2>
                    {/* </span> */}
                    <h2>together</h2>
                    <motion.div style={{x}} className={styles.buttonContainer}>
                        <Rounded  backgroundColor={"#2ECC71"} className={styles.button}>
                            <p>Entre em contato</p>
                        </Rounded>
                    </motion.div>
                    <motion.svg style={{rotate, scale: 2}} width="9" height="9" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8 8.5C8.27614 8.5 8.5 8.27614 8.5 8L8.5 3.5C8.5 3.22386 8.27614 3 8 3C7.72386 3 7.5 3.22386 7.5 3.5V7.5H3.5C3.22386 7.5 3 7.72386 3 8C3 8.27614 3.22386 8.5 3.5 8.5L8 8.5ZM0.646447 1.35355L7.64645 8.35355L8.35355 7.64645L1.35355 0.646447L0.646447 1.35355Z" fill="white"/>
                    </motion.svg>
                </div>
                <div className={styles.nav}>
                        <Rounded>
                            <p>jose.silva@sou.inteli.edu.br</p>
                        </Rounded>
                        <Rounded>
                            <p>lggmarques28@gmail.com</p>
                        </Rounded>
                        <Rounded>
                            <p>rhyanlemos05@gmail.com</p>
                        </Rounded>
                        <Rounded>
                            <p>pedrocruzbusiness@gmail.com</p>
                        </Rounded>
                        <Rounded>
                            <p>yagotorelly51@gmail.com</p>
                        </Rounded>
                        {/* <Rounded>
                            <p>+31 6 27 84 74 30</p>
                        </Rounded> */}
                </div>
                <div className={styles.info}>
                    <div>
                        <span>
                            <h3>Version</h3>
                            <p>2024 © Edition</p>
                        </span>
                        <span>
                            <h3>Aurum</h3>
                            <p>17:22 PM GMT+3</p>
                        </span>
                    </div>
                    <div>
    <span>
        <h3>LinkedIn</h3>
        <Magnetic>
            <p>
                <a href="https://www.linkedin.com/in/josevalencar" target="_blank" rel="noopener noreferrer">José</a>
            </p>
        </Magnetic>
    </span>
    <Magnetic>
        <p>
            <a href="https://www.linkedin.com/in/luiz-profile" target="_blank" rel="noopener noreferrer">Luiz</a>
        </p>
    </Magnetic>
    <Magnetic>
        <p>
            <a href="https://www.linkedin.com/in/rhyan-lemos-silveira/" target="_blank" rel="noopener noreferrer">Rhyan</a>
        </p>
    </Magnetic>
    <Magnetic>
        <p>
            <a href="https://www.linkedin.com/in/pedro-henrique-coutinho-cruz/" target="_blank" rel="noopener noreferrer">Pedro</a>
        </p>
    </Magnetic>
    <Magnetic>
        <p>
            <a href="https://www.linkedin.com/in/yago-torelly-de-araujo-02a22a265?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank" rel="noopener noreferrer">Yago</a>
        </p>
    </Magnetic>
</div>

                </div>
            </div>
        </motion.div>
        </section>
    )
}
