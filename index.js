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

//--Exercise 12 && 13--
// // arrays to hold each type of object
// var circles = [];
// var rectangles = [];
// var ellipses = [];

// //Create SVG element
// var svg = d3.select("body")
//     .append("svg")
//     .attr("width", 400)
//     .attr("height", 400)
//     .style("border", '1px solid green');

// d3.csv("csv/shapes.csv", (data) => {
//     // sort the data into respective arrays
//     switch(data.shape){
//         case "circle":
//             circles.push(data);
//             break;
//         case "rect":
//             rectangles.push(data);
//             break;
//         case "ellipse":
//             ellipses.push(data);
//             break;
//         default:
//             break;
//     }
// }).then(() => {

//     // display the circles
//     svg.selectAll("circles")
//         .data(circles)
//         .join(
//             enter => { 
//                 enter.append("circle")
//                     .attr("cx", (d)=>d.dim1)
//                     .attr("cy", (d)=>d.dim2)
//                     .attr("r", (d)=>d.dim3)
//                     .attr("fill", (d)=>d.color);
//              },
//             exit => {
//                 exit.remove();
//             }
//         );

//     // display the rectangles
//     svg.selectAll("rect")
//         .data(rectangles)
//         .join(
//             enter => { 
//                 enter.append("rect")
//                     .attr("x", (d)=>d.dim1)
//                     .attr("y", (d)=>d.dim2)
//                     .attr("width", (d)=>d.dim3)
//                     .attr("height", (d)=>d.dim4)
//                     .attr("fill", (d)=>d.color);
//              },
//             exit => {
//                 exit.remove();
//             }
//         );

//     // display the ellipses
//     svg.selectAll("ellipse")
//         .data(ellipses)
//         .join(
//             enter => { 
//                 enter.append("ellipse")
//                     .attr("cx", (d)=>d.dim1)
//                     .attr("cy", (d)=>d.dim2)
//                     .attr("rx", (d)=>d.dim3)
//                     .attr("ry", (d)=>d.dim4)
//                     .attr("fill", (d)=>d.color);
//              },
//             exit => {
//                 exit.remove();
//             }
//         );
// });

//--Exercise 14&15--
// // csv file 
// let heartfailurecsv = 'https://raw.githubusercontent.com/akmand/datasets/master/heart_failure.csv';
// // array to hold the quantity of each age group
// let ages = [0,0,0,0];
// var barWidth = 50;
// var scaleFactor = 2;
// var height = 400;

// d3.csv(heartfailurecsv, (data) => {
//         // sort the ages into respective array index
//          if (data.age < 31) { ages[0]++; } else 
//          if (data.age < 41) { ages[1]++; } else 
//          if (data.age < 61) { ages[2]++; } else 
//          if (data.age < 101) { ages[3]++; }
//      }).then( () => {
//         console.log(ages);

//         // create the svg
//         var graph = d3.select("body")
//             .append("svg")
//             .attr("width",barWidth*ages.length)
//             .attr("height", height);

//         // create the bar
//         var bar = graph.selectAll("g")
//             .data(ages)
//             .enter()
//             .append("g")
//             .attr("transform", (d,i) =>
//                 "translate("+i*barWidth+",0)");

//         // add the bar
//         bar.append("rect")
//             .attr("width", barWidth-1)
//             .attr("y", (d)=>height-(d*scaleFactor))
//             .attr("height", d => d * scaleFactor)
//             .style("fill", (d) => {
//                 // if the data is extreme (>150), bar is red
//                 if(d > 150)
//                     return "red";
//             });

//         // add the text
//         bar.append("text")
//             .attr("x", barWidth / 2)
//             .attr("y", (d)=>height-d*scaleFactor)
//             .attr("dx", ".35em")
//             .style("fill", "black")
//             .text(d=>d);
//      });

//--Exercise 16--
// const width = 500;
// const height = 500;

// const data = [10, 15, 20, 25, 30];
// // Note different valid ways of specifying color
// const colors = ["#ffffcc","red","rgb(0,255,0","#31a354","#006837"];

// // create svg
// const svg = d3.select("body")
//     .append("svg")
//     .attr("width", width)
//     .attr("height", height)

// // process data
// const g = svg.selectAll("g")
//     .data(data)
//     .enter()
//     .append("g")
//     .attr("transform", (d,i) => {
//         return "translate(0,0)";
//     })

// // append circles
// // for data with values of 20 or less, use circles
// g.filter(d=>d<=20)
//     .append("circle")
//     .attr("cx", (d,i) => i*100+45)
//     .attr("cy", (d,i) => 100)
//     .attr("r", d => d*1.5)
//     .attr("fill", (d,i) => colors[i]);

// // append rect
// // for data with values greater than 20, use rectangles
// g.filter(d=>d>20)
//     .append("rect")
//     // since the filter has reduced selection size
//     // (i+3) compensates for the missing elements
//     .attr("x", (d,i) => (i+3)*100+20)
//     .attr("y", (d,i) => 100-(d))
//     .attr("width", d=>d*2)
//     .attr("height", d=>d*2)
//     .attr("fill", (d,i) => colors[i+3]);

// // append text
// g.append("text")
//     .attr("x", (d,i) => i*100+40)
//     .attr("y", 105)
//     .attr("stroke", "teal")
//     .attr("font-size", "12px")
//     .attr("font-family", "sans-serif")
//     .text(d=>d);

//--EXERCISE 17 & 18--
const data = [];

// graph info for display size
const width = 500;
const barHeight = 20;
const margin = 1;

// process the data
d3.csv("csv/bar.csv", (d) => {
    // parse to int with +
    data.push(+d.population)
}).then(() => createChart());

function createChart() {
    // set up the svg
    var svg = d3.select("body")
    .append("svg")
    .attr("width", width)
    .attr("height", barHeight * data.length);

    // create scale
    var scale = d3.scaleLinear()
    .domain([d3.min(data),d3.max(data)])
    .range([50,500])

    var g = svg.selectAll("g")
    .data(data)
    .enter()
    .append("g")
    .attr("transform", (d,i) => 
        "translate(0," + i * barHeight +")");

    // create the bars
    g.append("rect")
        .attr("width", d => scale(d))
        .attr("fill", d => {
            // color
            if (d < 100)
                return "green";
            else if (d > 500)
                return "red";
            else
                return "blue";
        })
        .attr("height", barHeight - margin );  
        
    // append text in bars    
    g.append("text")
        .attr("x", d => scale(d))
        .attr("y", barHeight / 2)
        .attr("dy", ".35em")
        .style("text-anchor", "end")
        .text(d => d);    
}
