import { Sorter } from './Sorter';
import { NumbersCollection } from './NumbersCollection';

const numbersCollection = new NumbersCollection([12315, 219, -3, -96, -5]);
const sorter = new Sorter(numbersCollection);
sorter.sort();
console.log(numbersCollection.data);
