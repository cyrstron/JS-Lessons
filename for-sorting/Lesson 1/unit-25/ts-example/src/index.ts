const value: string = 'string';

import {sum} from './sum';

// Argument of type 'string' is not assignable 
// to parameter of type 'number'.
sum('1', 2);
