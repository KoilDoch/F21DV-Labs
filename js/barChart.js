/************************/
/* EXERCISE 21 & 28 & 32*/
/************************/
const margin = {top: 20, right: 30, bottom: 40, left: 45, bar: 1};
const data = [400, 300, 900, 250, 55, 100, 205, 500 ,671, 1000];
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

// append an image to the svg
svg.append("image")
    .attr("x", margin.left)
    .attr('width', width)
    .attr('height', barHeight * data.length)
    .attr("xlink:href", "bubble.jpg")
    // if this is not specified it will not stretch
    .attr("preserveAspectRatio", "none");

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
var rects = svg.selectAll(".bar")
    .data(data)
    .enter();

rects.append("rect")
    .attr("class", "bar")
    // make sure they start on the 0
    .attr("x", xscale(0) + margin.left)
    .attr("y", (d,i) => i * barHeight)
    // scale is now based on the xscale
    .attr("width", d => xscale(d))
    .attr("height", barHeight)
    .attr("fill", (d,i) => color(i));