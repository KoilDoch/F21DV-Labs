var svg = d3.select("body") 
    .append("svg") 
    .attr("width", 500) 
    .attr("height", 500); 


var bar1 = svg.append("rect") 
    .attr("fill", "blue") 
    .attr("x", 100) 
    .attr("y", 20) 
    .attr("height", 20) 
    .attr("width", 10) 

var bar2 = svg.append("rect") 
    .attr("fill", "blue") 
    .attr("x", 120) 
    .attr("y", 20) 
    .attr("height", 20) 
    .attr("width", 10) 

var bar3 = svg.append("rect") 
    .attr("fill", "blue") 
    .attr("x", 140) 
    .attr("y", 20) 
    .attr("height", 20) 
    .attr("width", 10) 


update(); 

// grow the bars
function update() { 
    // grow first bar
    bar1.transition() 
        .ease(d3.easeLinear) 
        .duration(2000) 
        .attr("height",100) 

    // grow second bar
    bar2.transition() 
        .ease(d3.easeLinear) 
        .duration(2000) 
        .delay(2000) 
        .attr("height",100) 

    // grow third bar
    bar3.transition() 
        .ease(d3.easeLinear) 
        .duration(2000) 
        .delay(4000) 
        .attr("height",100) 
}