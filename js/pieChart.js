/********************/
/* EXERCISE 30 & 31 */
/********************/
var data = [15, 14, 18, 22, 11, 36, 7, 12, 28, 4, 30, 10];
const xSize = 400; const ySize = 400;
const margin = 40;
const xMax = xSize - margin*2;
const yMax = ySize - margin*2;

// Append SVG Object to the Page
const svg = d3.select("body")
    .append("svg")
    .attr('width', xSize )
    .attr('height', ySize )
    .append("g")
    .attr("transform","translate(" + xSize/2 + "," + ySize/2 + ")");

const radius = Math.min(xSize, ySize) / 2;
var color = d3.scaleOrdinal().domain(data).range(d3.schemeSet1);

// Generate the pie
var pie = d3.pie();

// Generate the arcs
var arc = d3.arc()
    .innerRadius(0)
    .outerRadius(radius);

//Generate groups
var arcs = svg.selectAll("arc")
    .data(pie(data))
    .enter()
    .append("g")
    .attr("class", "arc")

//Draw arc paths
arcs.append("path")
    .attr("fill", function(d, i) {
    return color(i);
    })
    .attr("d", arc);

// add text to arc
arcs.append("text")
    .text(d => d.value)
        .attr("transform", (d) => { return "translate(" + arc.centroid(d) + ")"})
        .attr("font-size", "16px");