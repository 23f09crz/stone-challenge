import styles from './style.module.scss';
import { useInView, motion } from 'framer-motion';
import { useRef } from 'react';
import { slideUp, opacity } from './animation';
import Rounded from '../../common/RoundedButton';

export default function Index() {

    const phrase = "Nosso objetivo é claro: ajudar quem empreende no Brasil. Acreditamos que a tecnologia é a chave para o sucesso de qualquer negócio. Por isso, criamos um assistente no WhatsApp com Inteligência Artificial para microempreendedores. Desenvolvido para Stone, o Toni oferece uma solução digital, humanizada e extremamente intuitiva.";
    const description = useRef(null);
    const isInView = useInView(description)
    return (
        <section id="sobre">
        <div ref={description} className={styles.description}>
            <div className={styles.body}>
                <p>
                {
                    phrase.split(" ").map( (word, index) => {
                        return <span key={index} className={styles.mask}><motion.span variants={slideUp} custom={index} animate={isInView ? "open" : "closed"} key={index}>{word}</motion.span></span>
                    })
                }
                </p>
                <motion.p variants={opacity} animate={isInView ? "open" : "closed"}>Agora, você pode gerenciar suas vendas, finanças e ainda melhorar o atendimento ao cliente diretamente pelo aplicativo mais utilizado no Brasil: o WhatsApp, de forma fácil e rápida.</motion.p>
                <div data-scroll data-scroll-speed={0.1}>
                <Rounded
        className={styles.button}
        onClick={() => window.open('https://github.com/23f09crz/stone-challenge', '_blank', 'noopener noreferrer')}
    >
                <p>Acessar o Toni</p>
                    </Rounded>
                </div>
            </div>
        </div>
        </section>
    )
}
