import Image from 'next/image';
import styles from './devGalleryImage.module.css';
import DevImageMeta from '../devImageMeta/devImageMeta';


const DevGalleryImage = ({image, showMeta=true}) => {

    let displayDetails = showMeta ? <DevImageMeta meta={image.meta}></DevImageMeta> : null;

    return (
        <div>
            <Image src={image.path} alt={`Portfolio billede taget af ${image.author} udstillet i halleriet ${image.gallery}`} className={styles.image} width={image.width} height={image.height} />
            {displayDetails}
        </div>
    )
};
export default DevGalleryImage