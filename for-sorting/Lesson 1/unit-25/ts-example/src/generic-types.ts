function forEachItem<TItem>(
    items: TItem[], 
    func: (item: TItem, index: number) => void,
) {
    for (let i = 0; i < items.length; i += 1) {
        func(items[i], i);
    }
}

interface Point {
    x: number;
    y: number;
}

forEachItem<Point>(
    // Property 'x' is missing in type '{ y: number; }' but required in type 'Point'
    [{x: 1, y: 2}, {y: 1}],
    (point) => {
        console.log(point);
    }
);

interface Polygon<TPoint> {
    points: TPoint[];
}

interface GeoPoint {
    lat: number;
    lng: number;
}

// Property 'points' is missing in type 
// '({ lat: number; lng: number; } | { x: number; y: number; })[]' 
// but required in type 'Polygon<GeoPoint>'.
const geoPoly: Polygon<GeoPoint> = [
    {lat: 10, lng: 20},
    {lat: 5, lng: 30},
    {x: 10, y: 20},
];

export {};
