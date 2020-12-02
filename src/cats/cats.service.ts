import { Injectable } from '@nestjs/common';
import { Cat } from './interfaces/cat.interface';

@Injectable()
export class CatsService {
  private cats: Cat[] = [];
  create(cat: Cat) {
    this.cats.push(cat);
  }

  findAll(): Cat[] {
    return this.cats;
  }

  findOne(id: string): Cat {
    const result = this.cats.find((cat) => cat.id == id);
    console.log(result);
    return result;
  }

  update(id: string, cat: Cat): Cat {
    for(let i = 0; i < this.cats.length; i++) {
      console.log(cat);
      if(this.cats[i].id === id) {
        this.cats[i].name = cat.name;
        this.cats[i].age = cat.age;
        this.cats[i].breed = cat.breed;
        return this.cats[i];
      }
    }  
    return null;
  } 
  
  delete(id: string): Cat[] {
    const result = this.cats.map(x => x.id).indexOf(id);
    this.cats.splice(result, 1);
    return this.cats;
  }
}
