// chapter 159
import { styleBody, addTitle, contact } from './dom';

// console.log('index file');

addTitle('Test');
styleBody();
addTitle('Andres Ninja');

// console.log(contact);

// chapter 160 - we can name it as we want for example users, test, x ....
import users, { getPremUsers } from './data';

const premUsers = getPremUsers(users);
console.log(users, premUsers);

// chapter 162
console.log('Test 2');
