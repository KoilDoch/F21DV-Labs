//******************** PREPARING ********************//
//---------- BUTTONS ----------//
var buttons = d3.select("body")
    .append("g")
    .attr("class", "buttons");

for(i = 0; i < 2; i++){
    buttons.append("button")
    .attr("onclick", "update(" + i + ")")
    .text("Dataset " + (i+1))
}

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
let lineData, xScale, yScale;
const dataset = d3.csv("Lab2/csv/line.csv");
dataset.then((data) => {
    //the coordinates will need to be changed to float format
    let points = data.map( (d) => {
        return {
            id: +d.id,
            x: +d.x,
            y: +d.y
        }
    })
    // group the lines by id
    lineData = d3.group(points, d => d.id);

//---------- SCALES ----------//
// scale the axis for the width and height of svg
xScale = d3.scaleLinear().range([0, width]);
yScale = d3.scaleLinear().range([height, 0]);

// set the domains according to the min and max of each coord
xScale.domain(d3.extent(points, (d) => {return d.x}))
yScale.domain(d3.extent(points, (d) => {return d.y}))

//---------- AXES ----------//
const xAxis = d3.axisBottom().scale(xScale);
const yAxis = d3.axisLeft().scale(yScale);

//******************** DRAWING ********************//
//---------- AXES ----------//
svg.append("g")
    .attr("class", "axis")
    .attr("transform", `translate(0,${height})`)
    .call(xAxis);
svg.append("g")
    .attr("class", "axis")
    .call(yAxis)

update(0);
});

//---------- EVENTS ----------//
// update the selection
function update(index) {
    let currData = lineData.get(index)

    //---------- LINE ----------//
    let line = svg.selectAll(".line")
        .data([currData])
        .join(
            enter => {
                // create a new line
                enter.append("path")
                .attr("class", "line")
                .attr("d", d3.line()
                    .x(d => xScale(d.x))
                    .y(d => yScale(d.y)))
                .attr("fill", "none")
                .attr("stroke", "black")
                .attr("stroke-width", 2.5)
            },
            update => {
                // update the position of the line
                update.transition()
                .duration(1000)
                .attr("d", d3.line()
                    .x(d => xScale(d.x))
                    .y(d => yScale(d.y)))
                .attr("fill", "none")
                .attr("stroke", "black")
                .attr("stroke-width", 2.5)
            }
        )

    //---------- CIRCLES ----------//
    svg.selectAll("circle")
    .data(currData)
    .join(
        enter => {
            // create new circles
            enter.append("circle")
                .attr("class", "circle-marker")
                .attr("cx", d => xScale(d.x))
                .attr("cy", d => yScale(d.y))
                .attr("r", 2)
                .style("fill", "blue");
        },
        update => {
            // update the position of existing circles
            update.transition() 
            .duration(1000) 
            .attr("cx", function (d) { return xScale(d.x) } )
            .attr("cy", function (d) { return yScale(d.y) } )
        },
    );
    
}
