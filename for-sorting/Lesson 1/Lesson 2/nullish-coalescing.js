const value1 = undefined ?? null ?? 123; // 123
const value2 = null ?? false ?? true; // false
const value3 = undefined ?? NaN ?? 0; // NaN

let name;

const currentUserName = name ?? 'Anonymous'; // 'Anonymous'
