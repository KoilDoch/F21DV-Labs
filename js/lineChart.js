/****************************************/
/* EXERCISE 22 & 23 & 24 & 25 & 26 & 27 */
/****************************************/
// Set Dimensions
const xSize = 600;
const ySize = 600;
const margin = 40;
const xMax = xSize - margin * 2;
const yMax = ySize - margin * 2;

// Creates a new chart
function chart() {
    let obj = {}
    let objdata = [];
    let lines = [];
    let cols = [];
    let svg;
    let x;
    let y;
    let xExtent;
    let yExtent;

    // set the data held in the chart
    obj.setdata = (file) => {
        d3.csv(file, (data) => {
            objdata.push(data);
        }).then(() => {
            // Get the 'limits' of the data - the full extent 
            // (mins and max) so the plotted data fits perfects
            xExtent = d3.extent( objdata, d=> +d.x);
            yExtent = d3.extent( objdata, d=> +d.y);

            // organise the object data into lines 
            lines = d3.group(objdata, d => d.id);

            // Set colors to be used
            cols.push(d3.scaleOrdinal().domain(lines).range(["red","blue","green","yellow"]));
            cols.push(d3.scaleLinear().domain([1,100]).range(["blue","green"]))
            cols.push(d3.scaleLinear().domain([1,100]).range(["red","gold"]))

            // create the axis
            obj.createAxis();

            // draw the lines
            obj.drawLine();
        })
    }

    // Append SVG object to the page
    obj.createCanvas = () => {
        svg = d3.select("body")
            .append("svg")
            .attr("width", xSize)
            .attr("height", ySize)
            .append("g")
            .attr("transform", "translate(" + margin + "," +
                margin + ")");
    }

    // create the axis
    obj.createAxis = () => {
        // X Axis
        x = d3.scaleLinear()
            .domain([xExtent[0], xExtent[1]])
            .range([0, xMax]);

        // bottom
        svg.append("g")
            .attr("transform", "translate(0," + yMax + ")")
            .call(d3.axisBottom(x))
            .attr("color", "green");    // make bottom axis green

        // top
        svg.append("g")
            .call(d3.axisTop(x));

        // Y Axis
        y = d3.scaleLinear()
            .domain([ yExtent[0], yExtent[1]])
            .range([yMax,0]);

        // left y axis
        svg.append("g")
            .call(d3.axisLeft(y));

        // right y axis
        svg.append("g")
            .attr("transform", `translate(${yMax},0)`)
            .call(d3.axisRight(y));
    }

    obj.drawLine = () => {
        // Add the line
        svg.selectAll(".line")
            .data(lines)
            .enter()
            .append("g")
            .attr("class", (d,i) => {return "line"+i;})
            .append("path")
                .attr("fill", "none")
                .attr("stroke", (d,i) => cols[0](i))
                .attr("stroke-width", 1.5)
                .attr("d", function (d) {
                    return d3.line()
                        .x((d) => { return x(d.x);})
                        .y((d) => { return y(d.y)})
                        (d[1]); // since key/value array, [1] is used to access the value
                });

        // group for the dots
        var dotGroup = svg.selectAll("dot")
                .data(lines)
                .enter()
                .append("g");
               
        // append the circle dots
        dotGroup.selectAll()
                .data((d) => d[1])
                .enter()
                // filter for only line 0
                .filter(d => d.id == 0)
                .append("circle")
                    .attr("class", "circle-marker")
                    .attr("cx", function (d) { return x(d.x) } )
                    .attr("cy", function (d) { return y(d.y) } )
                    .attr("r", 2)
                    .style("fill", (d,i) => cols[1](i))
        
        // append the text
        dotGroup.selectAll()
            .data((d) => d[1])
                .enter()
                // filter for only line 0 and every 5 elements
                .filter((d,i) => (d.id == 0) && (i % 5 == 0))
                .append("text")
                .text(d => `(x: ${d.x} , y: ${d.y})`)
                .attr("x", function (d) { return x(d.x) } )
                .attr("y", function (d) { return y(d.y) } )
                .attr("font-size", "8px");
                

        // append the triangle dots
        dotGroup.selectAll()
                .data((d) => d[1])
                .enter()
                // filter only for line 1
                .filter(d => d.id == 1)
                .append("path")
                    // add the triangle symbol
                    .attr("d", d3.symbol()
                            .type(d3.symbolTriangle)
                            .size(15))
                    .attr("transform", function (d) { 
                        return `translate(${x(d.x)},${y(d.y)})`})
                    .style("fill", (d,i) => cols[2](i));
    }
    return obj;
}

// create a new chart and set the data
var c = chart();
c.createCanvas();
c.setdata("csv/line.csv");