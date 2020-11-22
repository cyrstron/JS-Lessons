const now = new Date();

console.log(now); // Wed Nov 18 2020 23:17:42 GMT+0200

// Thu Jan 01 1970 03:00:00 GMT+0300
const initialDate = new Date(0);

// Fri Jan 02 1970 03:00:00 GMT+0300
const numDate = new Date(24 * 3600 * 1000); 

// Thu Jan 26 2017 02:00:00 GMT+0200
const srtDate = new Date("2017-01-26");

// Sat Jan 01 2011 02:03:04 GMT+0200
const numsDate = new Date(2011, 0, 1, 2, 3, 4, 567);