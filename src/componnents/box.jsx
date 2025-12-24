import styles from './box.module.css'

export default function Box({hightlight, fullWidth}) {
    const className = [
        styles.box,
        hightlight && styles.hightlight,
        fullWidth && styles.fullWidth
    ]
    .filter(Boolean) //filter(item => Boolean(item))
    .join(" ");

    return <div className = {className}>Box</div>
}