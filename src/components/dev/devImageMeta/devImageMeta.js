'use client'
import { useState } from 'react';
import MagnifyingGlassToggle from '@/components/icons/magnifyingIcon';
import styles from './devImageMeta.module.css';


const DevImageMeta = ({ meta }) => {
    const [showMeta, setShowMeta] = useState(false);

    if (!meta) return <p>No metadata available.</p>;

    const { author, gallery, width, height, Model, path, name, created, Flash, Software } = meta;

    const toggleShowMeta = () => {
        setShowMeta(!showMeta);
    };
 
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
                    <li>Created: {created}</li>
                    <li>Flash: {Flash}</li>
                    <li>Software: {Software}</li>
                </ul>
            )}
        </div>
    );
};


export default DevImageMeta;
