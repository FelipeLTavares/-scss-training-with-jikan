import styles from './animeContainer.module.scss'

export default function AnimeContainer (props: any) {
    const { images, title, url } = props;

    return (
        <>
            <div className={styles.container} onClick={() => {
                window.open(String(url), '_blank');
            }}>
                <div className={styles.animeImage}>
                    <img src={images.large} alt="" width="100%" height="100%" />
                </div>
                <div className={styles.animeTitle}>
                    {title}
                </div>
            </div>
        </>
    )
}