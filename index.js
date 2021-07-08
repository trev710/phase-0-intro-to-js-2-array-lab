// Write your solution here!
// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name){
    cats.push(name)
}
function destructivelyPrependCat(name){
    cats.unshift(name)
}
function destructivelyRemoveLastCat(){
    cats.pop()
}
function destructivelyRemoveFirstCat(){
    cats.shift()
}
function appendCat(name) {
    const newCats=[...cats,name]
     return newCats;
    //it('appends a cat to the cats array and returns a new array, leaving the cats array unchanged.
  }S
 
function prependCat(name){
     const addArnold = [name,...cats]
     return addArnold;
     //it('prepends a cat to the cats array and returns a new array, leaving the cats array unchanged', function () {
      //expect(prependCat("Arnold")).to.have.ordered.members(["Arnold", "Milo", "Otis", "Garfield"]);
      //expect(cats).to.have.ordered.members(["Milo", "Otis", "Garfield"]);
 }
function removeLastCat () {
    const newRemovedCat = cats.slice(0,-1)
    return newRemovedCat;
    //it('removes the last cat in the cats array and returns a new array, leaving the cats array unchanged', function () {
    //expect(removeLastCat()).to.have.ordered.members(["Milo", "Otis"])
    //expect(cats).to.have.ordered.members(["Milo", "Otis", "Garfield"])
}

function removeFirstCat() {
    const firstCatRemove=cats.slice(1)
    return firstCatRemove;
    //it('removes the first cat from the cats array and returns a new array, leaving the cats array unchanged', function () {
    //expect(removeFirstCat()).to.have.ordered.members(["Otis", "Garfield"]);
    //expect(cats).to.have.ordered.members(["Milo", "Otis", "Garfield"]);
}