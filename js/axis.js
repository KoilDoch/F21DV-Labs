/***************/
/* EXERCISE 20 */
/***************/
// size data
const width = 400;
const height = 300;

var data = [10,15,20,25,30];

// set up svg
var svg = d3.select("body")
    .append("svg")
    .attr("width", width)
    .attr("height", height);

// create scales
var xscale = d3.scaleLinear()
    .domain([0, d3.max(data)])
    .range([0, width-100]);
var yscale = d3.scaleLinear()
    .domain([0, d3.max(data)])
    .range([height/2,0]);

// create axis'
var x_axisBot = d3.axisBottom()
    .scale(xscale);
var x_axisTop = d3.axisTop()
    .scale(xscale);
var y_axisLeft = d3.axisLeft()
    .scale(yscale);
var y_axisRight = d3.axisRight()
    .scale(yscale);

// append the y axis'
svg.append("g")
    .attr("transform", "translate(50,20)")
    .call(y_axisLeft);
svg.append("g")
    .attr("transform", "translate("+(width-50)+",20)")
    .style("color", "blue")
    .call(y_axisRight);

// append the x axis'
var xAxisTranslate = height/2 + 20;
svg.append("g")
    .attr("transform", "translate(50," + xAxisTranslate + ")")
    .call(x_axisBot)
svg.append("g")
    .attr("transform", "translate(50, 20)")
    .style("color", "blue")
    .call(x_axisTop);