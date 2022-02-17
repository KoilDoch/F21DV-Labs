// useful variables
var margin = 200; 
var width  = 400; 
var height = 300;

// create the svg
var svg = d3.select("body")
    .append("svg")
    .attr("width", width + margin)
    .attr("height", height + margin);

// append title
svg.append("text") 
.attr("transform", "translate(100,0)") 
.attr("x", 50) 
.attr("y", 50) 
.attr("font-size", "24px") 
.text("Stock Price") 

// create the scales
var x = d3.scaleBand().range([0, width]).padding(0.4); 
var y = d3.scaleLinear().range([height, 0]); 

// group for graph elements
var g = svg.append("g") 
        .attr("transform", "translate(" + 100 + "," + 100 + ")"); 

// process data
d3.csv("Lab2/csv/years.csv").then(function(data) {  
    // use this to generate colors for the bars, can be used for any size of input.
    // minimum values are blue, higher values are red (provided data is sorted)
    var colors = d3.scaleLinear().domain([1,data.length]).range(["blue","red"])

    // domains created
    x.domain( data.map(function(d) { return d.year; }) ); 
    y.domain([0, d3.max(data, function(d) { return d.value; })]); 

    // append the axis for x axis
    g.append("g") 
        .attr("transform", "translate(0," + height + ")") 
        .call(d3.axisBottom(x)) 
        .append("text") 
        .attr("y", height - 250) 
        .attr("x", width - 100) 
        .attr("text-anchor", "end") 
        .attr("stroke", "black") 
        .text("Year"); 

    // append the axis for the y axis
    g.append("g") 
        .call(d3.axisLeft(y).tickFormat(function(d){ 
            return "$" + d; 
        }).ticks(10)) 
        .append("text") 
        .attr("transform", "rotate(-90)") 
        .attr("y", 6) 
        .attr("dy", "-5.1em") 
        .attr("text-anchor", "end") 
        .attr("stroke", "black") 
        .text("Stock Price"); 

    // append the bars
    g.selectAll(".bar") 
        .data(data) 
        .enter().append("rect") 
        .attr("class", "bar") 
        .style("fill", (d, i) => {return colors(i)})
        .on("mouseover", onMouseOver)
        .on("mouseout", onMouseOut)
        .attr("x", function(d) { return x(d.year); }) 
        .attr("y", function(d) { return y(d.value); }) 
        .attr("width", x.bandwidth()) 
        .transition() 
        .ease(d3.easeLinear) 
        .duration(400) 
        .delay(function (d, i) { 
            return i * 50; 
        }) 
        .attr("height", function(d) { return height - y(d.value); }); 
});

//mouseover event handler function 
function onMouseOver(d, i) { 
    // add a class to this bar, changes color
    d3.select(this).attr('class', 'highlight'); 

    // grow the bar
    d3.select(this) 
        .transition()     // adds animation 
        .duration(400) 
        .attr('width', x.bandwidth() + 5) 
        .attr("y", function(d) { return y(d.value) - 10; }) 
        .attr("height", function(d) { return height - y(d.value) + 10; }); 

    //display the value
    g.append("text") 
        .attr('class', 'val')  
        .attr('x', function() { 
            return x(i.year); 
        }) 
        .attr('y', function() { 
            return y(i.value) - 15; 
        }) 
        .text( function(d) { return '$' + i.value; } ); // Value of the text 
} 

//mouseout event handler function 
function onMouseOut(d, i) { 
    // use the text label class to remove label on mouseout 
    d3.select(this).attr('class', 'bar'); 
    d3.select(this) 
    .transition()     // adds animation 
    .duration(400) 
    .attr('width', x.bandwidth()) 
    .attr("y", function(d) { return y(i.value); }) 
    .attr("height", function(d) { return height - y(i.value); }); 

    d3.selectAll('.val') 
    .remove() 
}