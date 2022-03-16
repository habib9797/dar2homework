import { Movie } from './types';
import { Actor } from './types';

export const movies: Movie[] = [
   {
      id: 1,
      title: 'Batman',
      description: 'asd',
      duration: 120,
      image: 'https://cdn.mos.cms.futurecdn.net/y2FXvdPpK8WBj79PivRUgk.jpg',
   },
   {
      id: 2,
      title: 'Spiderman',
      description: 'asd',
      duration: 90,
      image: 'https://cdn.mos.cms.futurecdn.net/y2FXvdPpK8WBj79PivRUgk.jpg',
   },
   {
      id: 3,
      title: 'Robin',
      description: 'asd',
      duration: 120,
      image: 'https://cdn.mos.cms.futurecdn.net/y2FXvdPpK8WBj79PivRUgk.jpg',
   },
];
export const actors: Actor[] = [
   {
      id: 1,
      name: "Kairat",
      lastName: "Nurtas",
      old: 31,
      image:
         "https://static.365info.kz/uploads/2019/07/af9b9ac6e9f7baec96fdba99f021dc9b-e1562043773248.jpg",
   },
   {
      id: 2,
      name: "Nurtas",
      lastName: "Adambayev",
      old: 33,
      image:
         "http://sensation-booking.kz/upload/images/17306_735749_20.jpg",
   },
   {
      id: 3,
      name: "Nurlan",
      lastName: "Koyanbayev",
      old: 35,
      image: "https://m.medyanefesi.com/images/image/Kazak-sovmen-Nurlan-Koyanbayevin-Turkiyede-film-ce_fb.jpg",
   },
];
