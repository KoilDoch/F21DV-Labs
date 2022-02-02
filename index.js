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
// var myData = ['a', 4, 1, 'b', 6, 2, 8, 9, 'z'];

// var p = d3.select("body")
//     .selectAll("span")
//     .data(myData)
//     .enter()
//         .append('span')
//         .text(function (d, i) {
//             return d;
//         })
//         .style("color", (d,i) => {
//             console.log(typeof(d));
//             if (typeof(d) == "number")
//                 return "green";
//             else if (typeof(d) == "string")
//                 return "red";
//         });

//--EXERCISE 9--
// let titaniccsv = 'https://raw.githubusercontent.com/dsindy/kaggle-titanic/master/data/test.csv';
// let countMr = 0;
// let class3 = 0;
// d3.csv(titaniccsv, (data) => {
//     // count any names including Mr
//     if(data.Name.includes("Mr."))
//         countMr++;
//     // count any 3rd class passengers
//     if(data.Pclass == 3)
//         class3++;
// }).then( () => {
//     // .then invoked to be sure the previous process is complete
//     console.log("Number of 'Mr.'s aboard: " + countMr);
//     console.log("Number of 3rd Class Passengers: " + class3);
// });

//--EXERCISE 10--
// let heartfailurecsv = 'https://raw.githubusercontent.com/akmand/datasets/master/heart_failure.csv';
// // array to hold the quantity of each age group
// let ages = [0,0,0,0];
// d3.csv(heartfailurecsv, (data) => {
//         // sort the ages into respective array index
//         if (data.age < 31) { ages[0]++; } else 
//         if (data.age < 41) { ages[1]++; } else 
//         if (data.age < 61) { ages[2]++; } else 
//         if (data.age < 101) { ages[3]++; }
//     }).then(() => createParagraphs());

// // function called to append to the paragraphs
// function createParagraphs() {
//     d3.select("body")
//         .selectAll("p")
//         .data(ages)
//         .join(
//             enter => { enter.append("p").append("text").text(d=>d); },
//             update => { update.append("text").text(d=>d); },
//             exit => { exit.remove(); }
//         );
// }

//--Exercise 11--
// // line coordinates [x1,x2,y1,y2]
// var lines = [[100, 100, 100, 200], [100, 200, 200, 200], [200, 200, 200, 100], [200, 100, 100, 100]];
// // colors associated with each line
// var color = ["red", "blue", "green", "purple"];

// // Create SVG element
// var svg = d3.select("body")
//  .append("svg")
//  .attr("width", 400)
//  .attr("height", 400)
//  .style("border", "1px solid green");

// // add the lines
// svg.selectAll("line")
//     .data(lines)
//     .enter().append("line")
//         // for each index in the data, create a line 
//         .attr("x1", (d=>d[0]))
//         .attr("x2", (d=>d[1]))
//         .attr("y1", (d=>d[2]))
//         .attr("y2", (d=>d[3]))
//         .attr("stroke", (d,i)=>color[i] );

//--Exercise 12--
var svg = d3.select("body")
 .append("svg")
 .attr("width", 400)
 .attr("height", 400)
 .style("border", "1px solid black");

d3.csv("shapes.csv", (data) => {
    console.log(data.dimensions);
    switch (data.shape){
        case "circle":
            newCircle([data.dim1, data.dim2, data.dim3], data.color);
            break;
        case "rect":
            newRect([data.dim1, data.dim2, data.dim3, data.dim4], data.color);
            break;
        case "ellipse":
            newEllipse([data.dim1, data.dim2, data.dim3, data.dim4], data.color)
            break;
        default:
            break;
    }
});

function newCircle(dim, color){
    svg.append("circle")
        .attr("cx", dim[0])
        .attr("cy", dim[1])
        .attr("r", dim[2])
        .attr("fill", color);
}

function newRect(dim, color){
    svg.append("rect")
        .attr("x", dim[0])
        .attr("y", dim[1])
        .attr("width", dim[2])
        .attr("height", dim[3])
        .attr("fill", color);
}

function newEllipse(dim, color){
    svg.append("ellipse")
        .attr("cx", dim[0])
        .attr("cy", dim[1])
        .attr("rx", dim[2])
        .attr("ry", dim[3])
        .attr("fill", color);
}