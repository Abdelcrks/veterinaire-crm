export type Animal = {
    id: number;
    firstName: string;
    age: number;
    height: number;
    weight: number;
    species: string;
  }
  
export type Owner = {
    id: number;
    civility: string;
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    animals: Animal[];
}

export type AnimalWithOwner = Animal & {
    owner: Owner
}