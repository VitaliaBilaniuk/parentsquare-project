import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})

export class DataService implements InMemoryDbService {
  
  constructor() {}

  createDb() {
    return {
      authors: {
        data: [
          { load: 40, title: 'Shandee Bayne', description: 'Jimenez Elementary School' },
          { load: 40, title: 'Lisette Murillo', description: 'Kunst(Tommie) Junior High School' },
          { load: 33, title: 'Rosa Ruiz-Mondragon', description: 'Liberty Elementary School' },
          { load: 29, title: 'Nora Jacobo', description: 'Ontiveros Elementary School' },
          { load: 26, title: 'Adriana Garcia', description: 'Ontiveros Elementary School' }
        ],
        total: 207
      },
      postsDistribution: [
        { postsNumber: 6, group: 'District Posts'},
        { postsNumber: 341, group: 'School Posts'},
        { postsNumber: 1300, group: 'Class Posts'},
        { postsNumber: 259, group: 'Group Posts'},
      ],
      // schools: [
      //   { postsNumber: 467, schoolName: 'Adam Elementary School'},
      //   { postsNumber: 576, schoolName: 'Alvin Elementary School'},
      //   { postsNumber: 572, schoolName: 'Arellanes Elementary'},
      //   { postsNumber: 79, schoolName: 'Arellanes Junior High'},
      //   { postsNumber: 92, schoolName: 'Battles Elementary'},
      //   { postsNumber: 574, schoolName: 'Bonita Elementary'},
      //   { postsNumber: 573, schoolName: 'El Camino Junior High'},
      //   { postsNumber: 576, schoolName: 'Fairlawn Elementary'},
      //   { postsNumber: 467, schoolName: 'Fesler Junior High'},
      //   { postsNumber: 467, schoolName: 'Jimenez Elemenatry'},
      //   { postsNumber: 467, schoolName: 'Kunst(Tommie) Junior'},
      //   { postsNumber: 467, schoolName: 'Liberty Elementary'},
      //   { postsNumber: 467, schoolName: 'Miller (isaac)'},
      //   { postsNumber: 467, schoolName: 'Oakley (Calvin C.)'},
      //   { postsNumber: 467, schoolName: 'Ontiveros Elemenatry'},
      //   { postsNumber: 467, schoolName: 'Rice (William)'},
      //   { postsNumber: 467, schoolName: 'Robert Bruce Elementary'},
      //   { postsNumber: 467, schoolName: 'Sanchez Elementary'},
      //   { postsNumber: 467, schoolName: 'Taylor Elementary'},
      //   { postsNumber: 467, schoolName: 'Tunnell (Martin Luther)'},
      // ]
      schools: this.generateArray()
    }
  }

  generateArray() {
    const labels = ['Adam Elementary School','Alvin Elementary School','Arellanes Elementary','Arellanes Junior High',
    'Battles Elementary', 'Bonita Elementary', 'El Camino Junior High','Fairlawn Elementary','Fesler Junior High',
    'Jimenez Elemenatry','Kunst(Tommie) Junior', 'Liberty Elementary', 'Miller (isaac)', 'Oakley (Calvin C.)',
    'Ontiveros Elemenatry', 'Rice (William)', 'Robert Bruce Elementary','Sanchez Elementary', 'Taylor Elementary',
    'Tunnell (Martin Luther)'];
    let schoolsArray:any = [];
    labels.map((item => schoolsArray.push(
      Object.assign({}, {postsNumber: Math.floor(Math.random() * (300 - 10 + 1)) + 10, schoolName: item})
    )));
    return schoolsArray;
  }
}


// data = {
//   labels: ['Adam Elementary School','Alvin Elementary School','Arellanes Elementary','Arellanes Junior High',
//            'Battles Elementary', 'Bonita Elementary', 'El Camino Junior High','Fairlawn Elementary','Fesler Junior High',
//            'Jimenez Elemenatry','Kunst(Tommie) Junior', 'Liberty Elementary', 'Miller (isaac)', 'Oakley (Calvin C.)',
//            'Ontiveros Elemenatry', 'Rice (William)', 'Robert Bruce Elementary','Sanchez Elementary', 'Taylor Elementary',
//            'Tunnell (Martin Luther)'], 
//    datasets: [
//     {
//       data: ['50','145', '572', '79', '92',
//       '11', '276', '345', '32','11', '534', '79', '92',
//       '77', '45', '654','22','424', '3454','645'],
//       backgroundColor: 'rgba(124,174,41,255)'
//     }
//   ]
// };
