// CASE: OBJECT
const movePoint = ({
    x,
    y = 0,
    ...rest
}) => ({ ...rest,
    x: x + 1,
    y: y + 1
});

const p1 = {
    x: 10,
    id: 121241
}

p2 = movePoint(p1)

console.log(p1, p2);

// CASE: ARRAY

const a1 = [1, 2, 3, 4, 5, 6];
const a2 = ["A", "B", "C"];

let [first, second, ...rest] = [...a1, ...a2];

console.log(first, second, rest);