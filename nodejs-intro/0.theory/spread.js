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