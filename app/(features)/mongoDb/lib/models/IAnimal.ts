export interface IAnimal {
  name: string;
  scientific_name: string;
  number_of_legs: number;
  habitat: 'forest' | 'coastal' | 'savanna' | 'ocean' | 'desert';
}
