import { returnGreeting } from './greetings_module.js';   // to run in a browser -> import from js
// all exported components in the module
import * as allGreetingFunctions from './greetings_module.js';
// with changing the name
import { returnGreeting as greetingFunction } from './greetings-utilities_module.js';

returnGreeting('Hola!')
allGreetingFunctions.returnGreeting('Bonjour');
greetingFunction('Ciao!');

