import * as allExports from './export.js';

import defaultImport from './export.js';

import {mul, value2 as myValue} from './export.js';

import defaultImport2, {sum, value} from './export.js';

const result = allExports.sum(2, 3);
const result2 = mul(2, 3);
