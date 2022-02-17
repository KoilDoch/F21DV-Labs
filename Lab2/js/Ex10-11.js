// default values
const width = 200;
const height = 200;
const radius = 10;
var coords = []

var svg = d3.select("body")
    .append("svg")
    .attr("width", width)
    .attr("height", height)
    .style("border", '1px solid green')
    // follow the mouse with text
    .on("mousemove", followMouse)
    // remove when leaving svg
    .on("mouseout", () => svg.select("#follow").remove());

svg.append("text")
    .attr("id", "dynText")
    .attr("x", 10)
    .attr("y", 10)
    .attr("font-size", "12px")
    .attr("font-family", "sans-serif")
    .text("Hover over me!")
    .on("mouseover", hoverText)
    .on("mouseout", hoverAwayText);

svg.append("circle")
    .attr("cx", width/2)
    .attr("cy", height/2)
    .attr("r", 10)
    .attr("fill", "red")
    .on("mouseover", growCircle)    // grow circle 10x its radius
    .on("mouseout", shrinkCircle);       // change its radius back to default

// follows the mouse with a text element
function followMouse(event) {
    // remove old text
    svg.select("#follow").remove();
    // get the coords
    coords = d3.pointer(event);
    // create text element
    svg.append("text")
        .attr("id", "follow")
        .style("opacity", 1)
        .attr("x", coords[0]+10)
        .attr("y", coords[1])
        .attr("stroke", "black")
        .attr("font-size", "12px")
        .attr("font-family", "sans-serif")
        .text("hello");
}

// grow the circle on mouse over, linear ease
function growCircle() {
    d3.select(this)
        .transition()
        .ease(d3.easeLinear)
        .duration(100)
        .attr("r", radius*3);
}

// shrink the circle on mouse out, bounce ease
function shrinkCircle() {
    d3.select(this)
        .transition()
        .ease(d3.easeBounce)
        .duration(1000)
        .attr("r", radius);
}

// grow the text on mouse over, change color => red
function hoverText() {
    d3.select(this)
        .transition()
        .ease(d3.easeLinear)
        .duration(100)
        .attr("y", 30)
        .attr("fill", "red")
        .attr("font-size", "24px");
}

// shrink text on mouse away, change color => black
function hoverAwayText() {
    d3.select(this)
        .transition()
        .ease(d3.easeLinear)
        .duration(100)
        .attr("y", 10)
        .attr("fill", "black")
        .attr("font-size", "12px");
}