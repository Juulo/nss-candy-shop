// CANDY STORE
// We need a function that buys milk chocolate
const buyChocolate = () => {
    chocolateObject = {};
    chocolateObject.type = "Milk chocolate";

    return chocolateObject;
}
// then we need a function makes mint
const addFlavoring = (chocolateObject) => {
    chocolateObject.flavor = "Mint";

    return chocolateObject;
}
// then a function that mixes the mint and the chocolate
const makeBarkMixture = (chocolateObject) => {
    if (chocolateObject.flavor === "Mint") {
        chocolateObject.mixed = true;
    } else {
        chocolateObject.mixed = false;
    }

    return chocolateObject;
}
// then we need to bake the chocolate mix
const bakeCandy = (chocolateObject) => {
    if (chocolateObject.mixed === true) {
        chocolateObject.baked = true
    } else {
        chocolateObject.baked = false
    }
}
// then we need a process to break the chocolate into 6 peices
const breakBark = (chocolateObject) => {
    if (chocolateObject.baked === true) {
        return [
            "Mint Chocolate Bark Piece",
            "Mint Chocolate Bark Piece",
            "Mint Chocolate Bark Piece",
            "Mint Chocolate Bark Piece",
            "Mint Chocolate Bark Piece",
            "Mint Chocolate Bark Piece"
        ]
    }
}
// then we can eat the chocolate

let chocolate = buyChocolate()
let flavored = addFlavoring(chocolate)
let mix = makeBarkMixture(chocolate)
let bake = bakeCandy(chocolate)
let broken = breakBark(chocolate)

console.log(chocolate)
console.log(broken)