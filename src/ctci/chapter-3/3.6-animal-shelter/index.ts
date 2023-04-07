import { LinkedList } from "../../../data-structures";

export class Animal {
  constructor(public name: string) {}
}

export class Cat extends Animal {}

export class Dog extends Animal {}

interface IAnimalAndIndex {
  animal: Animal;
  index: number;
}

export class AnimalShelter {
  private enqueueCount = 0;
  private cats: LinkedList<IAnimalAndIndex>;
  private dogs: LinkedList<IAnimalAndIndex>;

  constructor() {
    this.cats = new LinkedList<IAnimalAndIndex>();
    this.dogs = new LinkedList<IAnimalAndIndex>();
  }

  public enqueue(animal: Animal): AnimalShelter {
    this.enqueueCount += 1;

    const queue = animal instanceof Cat ? this.cats : this.dogs;
    queue.addToTail({ animal, index: this.enqueueCount });

    return this;
  }

  public dequeueAny(): Animal | null {
    const queue =
      this.cats.head &&
      (!this.dogs.head || this.cats.head.data.index < this.dogs.head.data.index)
        ? this.cats
        : this.dogs;

    return this.removeListHead(queue);
  }

  public dequeueCat(): Cat | null {
    return this.removeListHead(this.cats);
  }

  public dequeueDog(): Dog | null {
    return this.removeListHead(this.dogs);
  }

  private removeListHead(list: LinkedList<IAnimalAndIndex>): Animal | null {
    const animal = list.head;
    if (!animal) return null;

    list.remove(animal.data);

    return animal.data.animal;
  }
}
