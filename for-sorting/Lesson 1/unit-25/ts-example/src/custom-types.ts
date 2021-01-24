type Point = {
    x: number;
    y: number;
}

const point2d: Point = {
    x: 1,
    y: 2,
}

// Type '{ x: number; y: number; z: number; }' 
// is not assignable to type 'Point'.
// Object literal may only specify known properties, 
// and 'z' does not exist in type 'Point'
const point3d: Point = {x: 1, y: 2, z: 2};

type MultiDimensionPoint = {
    x: number;
    y: number;
    z?: number;
}
const point2d2: MultiDimensionPoint = {x: 1, y: 2};
const point3d2: MultiDimensionPoint = {x: 1, y: 2, z: 2};

type NumsArray = number[];

const numsArray: NumsArray = [1, 2, 3];
// Type 'string' is not assignable to type 'number'.
const numsStrArray: NumsArray = [1, '2', 3];
