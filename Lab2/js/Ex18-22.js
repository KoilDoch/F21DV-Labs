// create 2 data_set 
const data = [[ 
{group: "A", value: 5}, 
{group: "B", value: 20}, 
{group: "C", value: 9} ],
[ 
{group: "A", value: 10}, 
{group: "B", value: 2}, 
{group: "C", value: 22} ],
[ 
{group: "A", value: 15}, 
{group: "B", value: 16}, 
{group: "C", value: 10} 
]];

// get colours
var colors = d3.scaleOrdinal().domain(data).range(["red","blue","green"])

// set the dimensions and margins of the graph 
const margin = {top: 30, right: 30, bottom: 70, left: 60}; 
const width  = 460 - margin.left - margin.right; 
const height = 400 - margin.top - margin.bottom; 

// append the svg object to the body of the page 
var svg = d3.select('body') 
    .append('div') 
    .append("svg") 
        .attr("width", width + margin.left + margin.right) 
        .attr("height", height + margin.top + margin.bottom) 
    .append("g") 
        .attr("transform", 
        "translate(" + margin.left + "," + margin.top + ")"); 

// X axis 
var x = d3.scaleBand() 
    .range([ 0, width ]) 
    .domain(data[0].map(function(d) { return d.group; })) 
    .padding(0.2); 

svg.append("g") 
    .attr("transform", "translate(0," + height + ")") 
    .call(d3.axisBottom(x)) 

// Add Y axis 
var y = d3.scaleLinear() 
    .domain([0, 20]) 
    .range([ height, 0]); 

svg.append("g") 
    .attr("class", "myYaxis") 
    .call(d3.axisLeft(y)); 

// A function that create / update the plot for a given variable: 
function update(index) { 
    var u = svg.selectAll("rect") 
        .data(data[index]) 
        
    u.enter() 
        .append("rect") 
        .merge(u) 
        .transition() 
        .duration(1000) 
        .attr("x", function(d) { return x(d.group); }) 
        .attr("y", function(d) { return y(d.value); }) 
        .attr("width", x.bandwidth()) 
        .attr("height", function(d) { return height - y(d.value); }) 
        .attr("fill", colors(index)); 
} 

// Initialize the plot with the first dataset 
update(0)