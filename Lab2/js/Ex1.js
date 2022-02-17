//******************** PREPARING ********************//
//---------- SVG ----------//
const width = 700;
const height = 300;
const margin = 5;
const padding = 5;
const adj = 30

// set up the svg canvas object
const svg = d3.select("div#container")
    .append("svg")
    .attr("preserveAspectRatio", "xMinYMin meet")
    .attr("viewBox", "-"
          + adj + " -"
          + adj + " "
          + (width + adj *3) + " "
          + (height + adj*3))
    .attr("padding", padding)
    .style("margin", margin);

//---------- DATA ----------//
const dataset = d3.csv("Lab2/csv/line.csv");
dataset.then((data) => {
    //the coordinates will need to be changed to float format
    let points = data.map( (d) => {
        return {
            id: d.id,
            x: +d.x,
            y: +d.y
        }
    })
    // group the lines by id
    let lineData = d3.group(points, d => d.id);

//---------- SCALES ----------//
// scale the axis for the width and height of svg
const xScale = d3.scaleLinear().range([0, width]);
const yScale = d3.scaleLinear().range([height, 0]);

// set the domains according to the min and max of each coord
xScale.domain(d3.extent(points, (d) => {return d.x}))
yScale.domain(d3.extent(points, (d) => {return d.y}))

//---------- AXES ----------//
const xAxis = d3.axisBottom().scale(xScale);
const yAxis = d3.axisLeft().scale(yScale);

//---------- LINES ----------//
const line = d3.line()
    .x(function (d) { return xScale(d.x)})
    .y(function (d) { return yScale(d.y)});

//******************** DRAWING ********************//
//---------- AXES ----------//
svg.append("g")
    .attr("class", "axis")
    .attr("transform", `translate(0,${height})`)
    .call(xAxis);
svg.append("g")
    .attr("class", "axis")
    .call(yAxis)

//---------- LINES ----------//
const lines = svg.selectAll("lines")
    .data(lineData)
    .enter()
    .append("g");

lines.append("path")
    .attr("fill", "none")
    .attr("stroke", "black")
    .attr("stroke-width", 1.5)
    .attr("d", function(d) {
        return line(d[1]);  // pass the map values
    });

//---------- CIRCLES ----------//
lines.selectAll("circles")
    .data(d => d[1])
    .enter()
    .append("circle")
        .attr("class", "circle-marker")
        .attr("cx", function (d) { return xScale(d.x) } )
        .attr("cy", function (d) { return yScale(d.y) } )
        .attr("r", 2);
});