type Circle = { radius: number };
type Rectangle = { width: number, height: number };

function calculateArea(shape: unknown): number | undefined {
    if (typeof shape === "object" && shape !== null) {
        //for 1st example..as it has radius in argument it will go to if block..
        //for 2nd example.. as it has both width and height it will go to elseif block...
        //for 3rd example as it doesn't have number nor undefined ..it will print undefined..
        if ("radius" in shape) {
            return Math.PI * (shape as Circle).radius ** 2;
        } else if ("width" in shape && "height" in shape) {
            return (shape as Rectangle).width * (shape as Rectangle).height;
        }
    }
    return undefined;
}


console.log(calculateArea({ radius: 2 }));
console.log(calculateArea({ width: 4, height: 10}));
console.log(calculateArea("random shape"));         
