function getArea(shape, params) {
    switch (shape) {
        case '사각형':
            return RectangleArea(params.width, params.height);
        case '원':
            return CircleArea(params.radius);
        case '삼각형':
            return TriangleArea(params.base,params.height);
        default:
            return '도형 없음';
    }

}

function RectangleArea(width,height) {
    return width * height;
}

function CircleArea(radius) {
    return Math.PI * Math.pow(radius,2);
}

function TriangleArea(base, height) {
    return (base * height) / 2;
}

//예제
const rectangle = {width: 2, height: 10};
const circle = {radius: 3};
const triangle = {base: 4, height: 10};

console.log('사각형 너비: ', getArea('사각형',rectangle))
console.log('원 넓이: ', getArea('원',circle))
console.log('삼각형 넓이: ', getArea('삼각형',triangle))

