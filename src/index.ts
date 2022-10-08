import { Sorter } from './Sorter';
import { NumbersCollection } from './NumbersCollection';
import { CharactersCollection } from './CharactersCollection';
import { LinkedList } from './LinkedList';

const numbersCollection = new NumbersCollection([12315, 219, -3, -96, -5]);
numbersCollection.sort();
console.log(numbersCollection.data);

const charsCollection = new CharactersCollection('PeOnolA');
charsCollection.sort();
console.log(charsCollection.data);

const list = new LinkedList();
list.add(500);
list.add(2);
list.add(-5);
list.add(-3463);
list.add(2323623);
list.add(31);
list.sort();
list.print();
