import Image from 'next/image';
import styles from './devGalleryImage.module.css';
import DevImageMeta from '../devImageMeta/devImageMeta';

const DevGalleryImage = ({image}) => {
console.log(image);

    const metaData1 = image.meta.image;
    const metaData2 = image.meta.exif;
    const metaData3 = image;
    
    const metaData = {...metaData1, ...metaData2, ...metaData3};
    
    return (
        <div>
            <Image
                src={image.path}
                alt={`Portfolio billede taget af ${image.author} udstillet i halleriet ${image.gallery}`}
                className={styles.image}
                width={image.width}
                height={image.height}
            />
            <DevImageMeta meta={metaData} />
        </div>
    );
};

export default DevGalleryImage;
