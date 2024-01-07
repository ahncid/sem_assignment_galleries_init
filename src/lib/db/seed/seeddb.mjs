import { exit } from 'process';
import dbConnect from '../dbConnect.mjs';
import galleryModel from '../models/gallery.model.mjs';
import authorModel from '../models/author.model.mjs';
import imageModel from '../models/image.model.mjs';
import fs from 'fs'

await dbConnect();

const loadJSON = (path) => JSON.parse(fs.readFileSync(new URL(path, import.meta.url)));
const galleries = loadJSON('./seedfile.json');

const simultateWrite = false;

for (const gallery of galleries) {
  const { title, year, authors } = gallery;

  let model = { 
    "name" : title, 
    "year" : year

   }

   let createGallery = simultateWrite ? model :  await galleryModel.create(model);

   console.log('createGallery', createGallery)

   for (const elem of authors) {

    const { author, gallery, niceUrl, images } = elem;
   
    let newAuthorModel = { 
        "author" : author, 
        "gallery" : gallery,
        "niceUrl" : niceUrl
    }

    let createAuthor = simultateWrite ? newAuthorModel : await authorModel.create(newAuthorModel);
    console.log('createAuthor', createAuthor)

    for (const img of images) {
        let newImageModel = { 
            ...img
        }
    
        let createImage = simultateWrite ? newImageModel : await imageModel.create(newImageModel);
        // console.log('createImage', createImage)
    }   

   }
  

  
}
console.log('DB Populated')
exit();