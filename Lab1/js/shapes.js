/********************/
/* EXERCISE 12 & 13 */
/********************/
// arrays to hold each type of object
var circles = [];
var rectangles = [];
var ellipses = [];

//Create SVG element
var svg = d3.select("body")
    .append("svg")
    .attr("width", 400)
    .attr("height", 400)
    .style("border", '1px solid green');

d3.csv("csv/shapes.csv", (data) => {
    // sort the data into respective arrays
    switch(data.shape){
        case "circle":
            circles.push(data);
            break;
        case "rect":
            rectangles.push(data);
            break;
        case "ellipse":
            ellipses.push(data);
            break;
        default:
            break;
    }
}).then(() => {

    // display the circles
    svg.selectAll("circles")
        .data(circles)
        .join(
            enter => { 
                enter.append("circle")
                    .attr("cx", (d)=>d.dim1)
                    .attr("cy", (d)=>d.dim2)
                    .attr("r", (d)=>d.dim3)
                    .attr("fill", (d)=>d.color);
             },
            exit => {
                exit.remove();
            }
        );

    // display the rectangles
    svg.selectAll("rect")
        .data(rectangles)
        .join(
            enter => { 
                enter.append("rect")
                    .attr("x", (d)=>d.dim1)
                    .attr("y", (d)=>d.dim2)
                    .attr("width", (d)=>d.dim3)
                    .attr("height", (d)=>d.dim4)
                    .attr("fill", (d)=>d.color);
             },
            exit => {
                exit.remove();
            }
        );

    // display the ellipses
    svg.selectAll("ellipse")
        .data(ellipses)
        .join(
            enter => { 
                enter.append("ellipse")
                    .attr("cx", (d)=>d.dim1)
                    .attr("cy", (d)=>d.dim2)
                    .attr("rx", (d)=>d.dim3)
                    .attr("ry", (d)=>d.dim4)
                    .attr("fill", (d)=>d.color);
             },
            exit => {
                exit.remove();
            }
        );
});