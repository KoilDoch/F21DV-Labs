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
    .on("mouseout", () => svg.select("text").remove());

svg.append("circle")
    .attr("cx", width/2)
    .attr("cy", height/2)
    .attr("r", 10)
    .attr("fill", "red")
    .on("mouseover", () => d3.select("circle").attr("r", radius*10))    // grow circle 10x its radius
    .on("mouseout", () => d3.select("circle").attr("r", radius));       // change its radius back to default

// follows the mouse with a text element
function followMouse(event) {
    // remove old text
    svg.select("text").remove();
    // get the coords
    coords = d3.pointer(event);
    // create text element
    svg.append("text")
        .style("opacity", 1)
        .attr("x", coords[0]+5)
        .attr("y", coords[1])
        .attr("stroke", "black")
        .attr("font-size", "12px")
        .attr("font-family", "sans-serif")
        .text("hello");
}

const rectWidth = 100;
const rectHeight = 20;


d3.select('body')
    .append('div')
    .style('width', rectWidth + 'px')
    .style('height', rectHeight + 'px')
    .style('background-color', 'green');

d3.selectAll("div")
    .on("mouseover", function(event){
    d3.select(this)
        .style("background-color", "orange")
        .style("width", rectWidth*2 + 'px')
        .style("height", rectHeight*2 + 'px')
        .style("border-style", 'dashed');
        })
        .on("mouseout", function(){
            d3.select(this)
            .style("background-color", "steelblue")
            .style('width', rectWidth + 'px')
            .style('height', rectHeight + 'px');
        });
