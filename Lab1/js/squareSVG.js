/***************/
/* EXERCISE 11 */
/***************/
// line coordinates [x1,x2,y1,y2]
var lines = [[100, 100, 100, 200], [100, 200, 200, 200], [200, 200, 200, 100], [200, 100, 100, 100]];
// colors associated with each line
var color = ["red", "blue", "green", "purple"];

// Create SVG element
var svg = d3.select("body")
 .append("svg")
 .attr("width", 400)
 .attr("height", 400)
 .style("border", "1px solid green");

// add the lines
svg.selectAll("line")
    .data(lines)
    .enter().append("line")
        // for each index in the data, create a line 
        .attr("x1", (d=>d[0]))
        .attr("x2", (d=>d[1]))
        .attr("y1", (d=>d[2]))
        .attr("y2", (d=>d[3]))
        .attr("stroke", (d,i)=>color[i] );