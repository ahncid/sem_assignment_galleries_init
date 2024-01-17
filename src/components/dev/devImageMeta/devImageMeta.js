'use client'
import { useState } from 'react';
import MagnifyingGlassToggle from '@/components/icons/magnifyingIcon';
import styles from './devImageMeta.module.css';

const DevImageMeta = ({ meta }) => {

    const [showMeta, setShowMeta] = useState(true);

    if (!meta) return <p>No metadata available.</p>;

    const toggleShowMeta = () => {
        setShowMeta(!showMeta);
    };

    const { author, gallery, width, height, Model, path, name, Make, Flash, Software } = meta;
 
    return (
        <div>
            <MagnifyingGlassToggle toggleShowMeta={toggleShowMeta} />
            {showMeta && (
                <ul className={styles.list}>
                    <li>Author: {author}</li>
                    <li>Gallery: {gallery}</li>
                    <li>Width: {width}</li>
                    <li>Height: {height}</li>
                    <li>Model: {Model}</li>
                    <li>Path: {path}</li>
                    <li>Name: {name}</li>
                    <li>Make: {Make}</li>
                    <li>Flash: {Flash}</li>
                    <li>Software: {Software}</li>
                </ul>
            )}
        </div>
    );
};


export default DevImageMeta;
