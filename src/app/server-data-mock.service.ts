import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { PostDistributionBySchoolModel } from './modules/usage-dashboard/models/usageDashboard.model';

@Injectable({
  providedIn: 'root'
})

export class ServerDataMockService implements InMemoryDbService {

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
      schools: this.generateArray()
    }
  }

  generateArray(): Array<PostDistributionBySchoolModel> {
    const labels = ['Adam Elementary School','Alvin Elementary School','Arellanes Elementary','Arellanes Junior High',
    'Battles Elementary', 'Bonita Elementary', 'El Camino Junior High','Fairlawn Elementary','Fesler Junior High',
    'Jimenez Elemenatry','Kunst(Tommie) Junior', 'Liberty Elementary', 'Miller (isaac)', 'Oakley (Calvin C.)',
    'Ontiveros Elemenatry', 'Rice (William)', 'Robert Bruce Elementary','Sanchez Elementary', 'Taylor Elementary',
    'Tunnell (Martin Luther)'];
    
    let schoolsArray:Array<PostDistributionBySchoolModel> = [];
    labels.map((item => schoolsArray.push(
      Object.assign({}, {postsNumber: Math.floor(Math.random() * (300 - 10 + 1)) + 10, schoolName: item})
    )));
    return schoolsArray;
  }
}

