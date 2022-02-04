/********************/
/* EXERCISE 30 & 31 */
/********************/

function PieChart() {
    let obj = {}
    const data = [15, 14, 18, 22, 11, 36, 7, 12, 28, 4, 30, 10];
    const color = d3.scaleOrdinal().domain(data).range(d3.schemeSet1);
    const xSize = 400; const ySize = 400;
    const radius = Math.min(xSize, ySize) / 2;
    const margin = 40;
    const xMax = xSize - margin*2;
    const yMax = ySize - margin*2;
    let svg, pie, arc;


    // set up the chart
    obj.setUpChart = () => {
        obj.createSvg();
        obj.drawArcs();
    }

    // create the svg
    obj.createSvg = () => {
        svg = d3.select(".pie-chart")
            .append("svg")
            .attr('width', xSize )
            .attr('height', ySize )
            .append("g")
            .attr("transform","translate(" + xSize/2 + "," + ySize/2 + ")");

        // Generate the pie
        pie = d3.pie();

        // Generate the arcs
        arc = d3.arc()
            .innerRadius(0)
            .outerRadius(radius);
    }

    // draw the arcs
    obj.drawArcs = () => {
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
    }

    return obj;
}

var pieChart = PieChart();
pieChart.setUpChart();