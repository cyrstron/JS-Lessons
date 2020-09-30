const currentUser = 'Vasya'; // Good
const CurrentUser = 'Vasya'; // Bad
const current_user = 'Vasya'; // Bad

const earthRadius = 12000000; // Good
const EARTH_RADIUS = 12000000; // Even Better
const er = 12000000; // Bad
const raduisZemli = 12000000; // Awful

const a = 'Green'; // Bad
const color = 'Green'; // Not good enough
const carColor = 'Green'; // Good
const carWithRoundSteeringWheelColor = 'Green'; // Too much
const carWRSWColor = 'Green'; // Still bad

let color = 'Green';
alert(color);

color = 'Dog'; // VERY BAD!
