// let listOfNumbers = [2, 3, 5, 7, 11];
// console.log(listOfNumbers[2]);
 
// // var name = "paulfidelis"
// //console.log(name.length)

 
// var text= prompt("type your text" )
// //var len = text.length
// //var x = text.slice(0,14)
// //alert(x)
// var first = text.slice(0,1)
// var rest = text.slice(1,text.length)
// var rest2 = rest.toLowerCase() 
// var upper = first.toUpperCase()
// //var lower = text.toLocaleLowerCase()
// alert(upper+rest2)
// // alert("the tweet has " + len + "  character" + " and you have " + (14-len) + " text remaining")

// // var name = "paul fidelis "
// // var slice = name.slice(0,7)
// // console.log(slice)
// lets create a BMI calculator
function bmiCalculator(weight,height){
    var hq = height*height
    var sql = hq
    var bmi = Math.round(weight / sql)
    return bmi
}
var bm = bmiCalculator(65,1.3)
console.log(bm)
