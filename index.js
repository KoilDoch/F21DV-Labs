 //--EXERCISE 3, 4 and 5--
// Creates 10 div elements
// for(let i = 0; i < 10; i++){
//     d3.select("body")
//         .append("div")
//         .text(i)
//         .style("color", function(d) {    
//             if (i < 5) {return "red"}    // first 5 elements have red text
//             else {return "green"}        // last 5 elements have green text
//         })
//         .attr("id", "div"+i);
// }
// d3.select("#div0").text("start").style("color", "purple");   // change first element to purple and 'start'

//--EXCERCISE 6--
// let data =  [ {name:'test', color: "red", val:1}, 
//         {name:'other', color: "blue", val:2},
//         {name:'b', color: "yellow", val:3} ];

// let paragraph = d3.select('body')
//     .selectAll('div')
//     .data(data)
//     .text((d,i) => {
//         console.log("d.name:" + d.name);
//         console.log("d.color: " + d.color);
//         console.log("d.val:" + d.val);
//         console.log("i:" + i);
//         console.log("this: " + this);

//         return 'cont:' + d.name + " is " + d.color;    // return value is used to set the 'text'
//     });

//--EXERCISE 7--
// let num = [10, 50, 75, 100, 200];

// let paragraph = d3.select("body")
//     .selectAll("div")
//     .data(num)
//     .text(function (d, i) {
//         return 'cont:' + d; // return value is used to set the 'text'
//     })
// .style("color", function(d, i) {
//     if ( d > 50 && d < 100 ) {
//     return "red";
//     } else {
//     return "yellow";
//     }
//     return 'blue';
// });

//--EXERCISE 8--
var myData = ['a', 4, 1, 'b', 6, 2, 8, 9, 'z'];

var p = d3.select("body")
    .selectAll("span")
    .data(myData)
    .enter()
        .append('span')
        .text(function (d, i) {
            return d;
        })
        .style("color", (d,i) => {
            console.log(typeof(d));
            if (typeof(d) == "number")
                return "green";
            else if (typeof(d) == "string")
                return "red";
        });