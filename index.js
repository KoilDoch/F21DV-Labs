/**********************/
/* EXERCISE 3 & 4 & 5 */
/**********************/
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


/**************/
/* EXERCISE 6 */
/**************/
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


/**************/
/* EXERCISE 7 */
/**************/
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


/**************/
/* EXERCISE 8 */
/**************/
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


/**************/
/* EXERCISE 9 */
/**************/
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


/***************/
/* EXERCISE 10 */
/***************/
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


/***************/
/* EXERCISE 11 */
/***************/
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


/********************/
/* EXERCISE 12 & 13 */
/********************/
// // arrays to hold each type of object
// var circles = [];
// var rectangles = [];
// var ellipses = [];
//
// //Create SVG element
// var svg = d3.select("body")
//     .append("svg")
//     .attr("width", 400)
//     .attr("height", 400)
//     .style("border", '1px solid green');
//
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
//
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
//
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
//
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


/********************/
/* EXERCISE 14 & 15 */
/********************/
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


/***************/
/* EXERCISE 16 */
/***************/
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


/**************************/
/* EXERCISE 17 & 18 & 19 & 21 * /
/**************************/
//graph info for display size
// const width = 500;
// const barHeight = 20;
// const margin = 1;

// // returns a svg object
// const Svg = function(length) {
//     let svg = d3.select("body")
//     .append("svg")
//     .attr("width", width)
//     .attr("height", barHeight * length);
//     return svg;
// }

// // returns a new scale object
// const Scale = function(min, max) {
//     let scale = d3.scaleLinear()
//         .domain([min,max])
//         .range([50,500]);
//     return scale;
// }

// function createChart(file) {
//     const data = [];
//     // process the data
//     d3.csv(file, (d) => {
//         // parse to int with +
//         data.push(+d.population)
//     }).then(() => {
//         // create svg and scale
//         let svg = Svg(data.length);
//         let scale = Scale(d3.min(data), d3.max(data));

//         // create new group
//         let g = svg.selectAll("g")
//             .data(data)
//             .enter()
//             .append("g")
//             .attr("transform", (d,i) => 
//                 "translate(0," + i * barHeight +")");

//         // create the bars
//         g.append("rect")
//             .attr("width", d => scale(d))
//             .attr("fill", d => {
//                 // color
//                 if (d < 5000)
//                     return "green";
//                 else if (d > 10000)
//                     return "red";
//                 else
//                     return "blue";
//             })
//             .attr("height", barHeight - margin );  
                
//         // append text in bars    
//         g.append("text")
//             .attr("x", d => scale(d))
//             .attr("y", barHeight / 2)
//             .attr("dy", ".35em")
//             .style("text-anchor", "end")
//             .text(d => d);   
//     });
// }

// // create first chart
// createChart("csv/bar1.csv");
// // create second chart
// createChart("csv/bar2.csv");


/***************/
/* EXERCISE 20 */
/***************/
//// size data
// const width = 400;
// const height = 300;

// var data = [10,15,20,25,30];

// // set up svg
// var svg = d3.select("body")
//     .append("svg")
//     .attr("width", width)
//     .attr("height", height);

// // create scales
// var xscale = d3.scaleLinear()
//     .domain([0, d3.max(data)])
//     .range([0, width-100]);
// var yscale = d3.scaleLinear()
//     .domain([0, d3.max(data)])
//     .range([height/2,0]);

// // create axis'
// var x_axisBot = d3.axisBottom()
//     .scale(xscale);
// var x_axisTop = d3.axisTop()
//     .scale(xscale);
// var y_axisLeft = d3.axisLeft()
//     .scale(yscale);
// var y_axisRight = d3.axisRight()
//     .scale(yscale);

// // append the y axis'
// svg.append("g")
//     .attr("transform", "translate(50,20)")
//     .call(y_axisLeft);
// svg.append("g")
//     .attr("transform", "translate("+(width-50)+",20)")
//     .style("color", "blue")
//     .call(y_axisRight);

// // append the x axis'
// var xAxisTranslate = height/2 + 20;
// svg.append("g")
//     .attr("transform", "translate(50," + xAxisTranslate + ")")
//     .call(x_axisBot)
// svg.append("g")
//     .attr("transform", "translate(50, 20)")
//     .style("color", "blue")
//     .call(x_axisTop);


/*******************/
/* EXERCISE 21 & 28*/
/*******************/
const margin = {top: 20, right: 30, bottom: 40, left: 45, bar: 1};
const data = [50, 400, 300, 900, 250, 55, 100, 205, 500 ,671, 1000];
const width = 500 - margin.left - margin.right;
const barHeight = 20;
// colors associated with each bar
var color = d3.scaleLinear().domain([1,data.length]).range(["blue","green"]);

var svg = d3.select("body")
    .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", barHeight * data.length 
        + margin.top + margin.bottom)
    .attr("transform", 
        "translate(" + margin.left + ","+ margin.top+")");

// create the x scale
var xscale = d3.scaleLinear()
    .domain([0, d3.max(data)])
    .range([0, width]);
// create the x axis
var x_axis = d3.axisBottom()
    .scale(xscale);
// append x axis
svg.append("g")
    .attr("transform", "translate(" + margin.left + "," + 
        barHeight * data.length +")")
    .call(x_axis)

// create the y scale using scaleband
// using scaleband instead of scaleLinear due to 
// the y axis being ordinal
var yscale = d3.scaleBand()
    .range([0, barHeight * data.length])
    // counting backwards down the list of elements
    .domain(data.map((d,i) => data.length - i));

// create the y axis
var y_axis = d3.axisLeft()
    .scale(yscale);

// append y axis
svg.append("g")
    .attr("transform", "translate(" + margin.left + ",0)")
    .call(y_axis)
    
// add the rectangle
svg.selectAll("rect")
    .data(data)
    .enter()
    .append("rect")
    // make sure they start on the 0
    .attr("x", xscale(0) + margin.left)
    .attr("y", (d,i) => i * barHeight)
    // scale is now based on the xscale
    .attr("width", d => xscale(d))
    .attr("height", barHeight)
    .attr("fill", (d,i) => color(i));


/****************************************/
/* EXERCISE 22 & 23 & 24 & 25 & 26 & 27 */
/****************************************/
// // Set Dimensions
// const xSize = 600;
// const ySize = 600;
// const margin = 40;
// const xMax = xSize - margin * 2;
// const yMax = ySize - margin * 2;

// // Creates a new chart
// function chart() {
//     let obj = {}
//     let objdata = [];
//     let lines = [];
//     let color = ["blue", "green"];
//     let svg;
//     let x;
//     let y;
//     let xExtent;
//     let yExtent;

//     // set the data held in the chart
//     obj.setdata = (file) => {
//         d3.csv(file, (data) => {
//             objdata.push(data);
//         }).then(() => {
//             // Get the 'limits' of the data - the full extent 
//             // (mins and max) so the plotted data fits perfects
//             xExtent = d3.extent( objdata, d=> +d.x);
//             yExtent = d3.extent( objdata, d=> +d.y);

//             // organise the object data into lines 
//             lines = d3.group(objdata, d => d.id);

//             // create the axis
//             obj.createAxis();

//             // draw the lines
//             obj.drawLine();
//         })
//     }

//     // Append SVG object to the page
//     obj.createCanvas = () => {
//         svg = d3.select("body")
//             .append("svg")
//             .attr("width", xSize)
//             .attr("height", ySize)
//             .append("g")
//             .attr("transform", "translate(" + margin + "," +
//                 margin + ")");
//     }

//     // create the axis
//     obj.createAxis = () => {
//         // X Axis
//         x = d3.scaleLinear()
//             .domain([xExtent[0], xExtent[1]])
//             .range([0, xMax]);

//         // bottom
//         svg.append("g")
//             .attr("transform", "translate(0," + yMax + ")")
//             .call(d3.axisBottom(x))
//             .attr("color", "green");    // make bottom axis green

//         // top
//         svg.append("g")
//             .call(d3.axisTop(x));

//         // Y Axis
//         y = d3.scaleLinear()
//             .domain([ yExtent[0], yExtent[1]])
//             .range([yMax,0]);

//         // left y axis
//         svg.append("g")
//             .call(d3.axisLeft(y));

//         // right y axis
//         svg.append("g")
//             .attr("transform", `translate(${yMax},0)`)
//             .call(d3.axisRight(y));
//     }

//     obj.drawLine = () => {
//         // Add the line
//         svg.selectAll(".line")
//             .data(lines)
//             .enter()
//             .append("g")
//             .attr("class", (d,i) => {return "line"+i;})
//             .append("path")
//                 .attr("fill", "none")
//                 .attr("stroke", (d,i) => color[i])
//                 .attr("stroke-width", 1.5)
//                 .attr("d", function (d) {
//                     return d3.line()
//                         .x((d) => { return x(d.x);})
//                         .y((d) => { return y(d.y)})
//                         (d[1]); // since key/value array, [1] is used to access the value
//                 });

//         // group for the dots
//         var dotGroup = svg.selectAll("dot")
//                 .data(lines)
//                 .enter()
//                 .append("g");
               
//         // append the circle dots
//         dotGroup.selectAll()
//                 .data((d) => d[1])
//                 .enter()
//                 // filter for only line 0
//                 .filter(d => d.id == 0)
//                 .append("circle")
//                     .attr("class", "circle-marker")
//                     .attr("cx", function (d) { return x(d.x) } )
//                     .attr("cy", function (d) { return y(d.y) } )
//                     .attr("r", 2)
//                     .style("fill", "red")
        
//         // append the text
//         dotGroup.selectAll()
//             .data((d) => d[1])
//                 .enter()
//                 // filter for only line 0 and every 5 elements
//                 .filter((d,i) => (d.id == 0) && (i % 5 == 0))
//                 .append("text")
//                 .text(d => `(x: ${d.x} , y: ${d.y})`)
//                 .attr("x", function (d) { return x(d.x) } )
//                 .attr("y", function (d) { return y(d.y) } )
//                 .attr("font-size", "8px");
                

//         // append the triangle dots
//         dotGroup.selectAll()
//                 .data((d) => d[1])
//                 .enter()
//                 // filter only for line 1
//                 .filter(d => d.id == 1)
//                 .append("path")
//                     // add the triangle symbol
//                     .attr("d", d3.symbol()
//                             .type(d3.symbolTriangle)
//                             .size(15))
//                     .attr("transform", function (d) { 
//                         return `translate(${x(d.x)},${y(d.y)})`})
//                     .style("fill", "red");
//     }
//     return obj;
// }

// // create a new chart and set the data
// var c = chart();
// c.createCanvas();
// c.setdata("csv/line.csv");

