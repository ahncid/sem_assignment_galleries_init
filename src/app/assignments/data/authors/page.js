import { fetchAuthors } from '@/lib/data.service';
import styles from './page.module.css'
import DevDebugJson from '@/components/dev/devDebugJson/devDebugJson';


const Page = async () => {

    const authors = await fetchAuthors();

    return (

        <main className={styles.page}>
            
            <h1>Alt Author Data</h1>
          
  

            <h2>Hvert Enkelt Author</h2>
            {authors.map((author, index) => {
                return <DevDebugJson key={index} content={author}></DevDebugJson>
            })}
        </main>

    );

}

export default Page