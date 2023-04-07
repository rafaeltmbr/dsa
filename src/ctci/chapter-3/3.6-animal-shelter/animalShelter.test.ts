import { AnimalShelter, Cat, Dog } from ".";

describe("animalShelter test suite", () => {
  test("it should dequeue null for an empty animal shelter", () => {
    const animalShelter = new AnimalShelter();

    expect(animalShelter.dequeueAny()).toBeNull();
    expect(animalShelter.dequeueCat()).toBeNull();
    expect(animalShelter.dequeueDog()).toBeNull();
  });

  test("it should dequeue animals in FIFO manner", () => {
    const animalShelter = new AnimalShelter();

    animalShelter
      .enqueue(new Dog("foxy"))
      .enqueue(new Cat("mimi"))
      .enqueue(new Dog("bel"))
      .enqueue(new Dog("max"))
      .enqueue(new Cat("browny"));

    let animal = animalShelter.dequeueAny();
    expect(animal?.name).toBe("foxy");

    animal = animalShelter.dequeueAny();
    expect(animal?.name).toBe("mimi");

    animal = animalShelter.dequeueAny();
    expect(animal?.name).toBe("bel");

    animal = animalShelter.dequeueAny();
    expect(animal?.name).toBe("max");

    animal = animalShelter.dequeueAny();
    expect(animal?.name).toBe("browny");

    animal = animalShelter.dequeueAny();
    expect(animal).toBeNull();
  });

  test("it should dequeue dogs in FIFO manner", () => {
    const animalShelter = new AnimalShelter();

    animalShelter
      .enqueue(new Dog("foxy"))
      .enqueue(new Cat("mimi"))
      .enqueue(new Dog("bel"))
      .enqueue(new Dog("max"))
      .enqueue(new Cat("browny"));

    let animal = animalShelter.dequeueDog();
    expect(animal?.name).toBe("foxy");

    animal = animalShelter.dequeueDog();
    expect(animal?.name).toBe("bel");

    animal = animalShelter.dequeueDog();
    expect(animal?.name).toBe("max");

    animal = animalShelter.dequeueDog();
    expect(animal).toBeNull();
  });

  test("it should dequeue cats in FIFO manner", () => {
    const animalShelter = new AnimalShelter();

    animalShelter
      .enqueue(new Dog("foxy"))
      .enqueue(new Cat("mimi"))
      .enqueue(new Dog("bel"))
      .enqueue(new Dog("max"))
      .enqueue(new Cat("browny"));

    let animal = animalShelter.dequeueCat();
    expect(animal?.name).toBe("mimi");

    animal = animalShelter.dequeueCat();
    expect(animal?.name).toBe("browny");

    animal = animalShelter.dequeueCat();
    expect(animal).toBeNull();
  });
});
