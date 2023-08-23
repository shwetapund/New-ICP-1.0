console.log("argument and return")

function calRectArea(length, width)
{
    const area = length * width;

    return area;
}

const area = calRectArea(10, 20)
console.log(area)

console.log("argument but no return")

function calRectArea1(length, width)
{
    const area = length * width;

    console.log(`area of rectangle: ${area}`)
}
calRectArea1(20, 30)

console.log("No argument but return")

function calRectArea2()
{
    const length = 5;
    const width = 10;
    const area = length * width;

    return area;
}
const areaOfRect = calRectArea2(area)
console.log(areaOfRect)

console.log("no argument and no return")

function calRectArea3()
{
    const length = 4;
    const width = 8;

    const area = length * width;
    console.log(`Area of Rectangle: ${area}`)
}
calRectArea3()
