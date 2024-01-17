import Link from 'next/link'
import { fetchGalleries } from '@/lib/data.service';
import styles from './page.module.css'
import DevGalleryHero from '@/components/dev/devGalleryHero/devGalleryHero';


export default async function Page() {

    // Henter gallerier fra vores serverside data.
    const galleries = await fetchGalleries();
  
    return (
      
      <main className={styles.page}>
          <h1>Portfolie Gallerier</h1>
          {/* Loop´er over vores galleri data. */}
          {galleries.map((gallery, index) => {
              {/* Indsætter vores Hero komponent og sender "gallery" objectet med */}
              return <DevGalleryHero key={index} gallery={gallery}></DevGalleryHero>
          })}
      </main>
  
    )
  }