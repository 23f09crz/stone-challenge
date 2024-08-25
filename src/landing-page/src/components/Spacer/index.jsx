import styles from './style.module.scss';

export default function Spacer({ height = '50px' }) {
    return (
        <div className={styles.spacer} style={{ height }} />
    );
}
