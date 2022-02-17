/*******************************/
/* EXERCISE 17 & 18 & 19 & 21 * /
/*******************************/
//graph info for display size
const width = 500;
const barHeight = 20;
const margin = 1;

// returns a svg object
const Svg = function(length) {
    let svg = d3.select("body")
    .append("svg")
    .attr("width", width)
    .attr("height", barHeight * length);
    return svg;
}

// returns a new scale object
const Scale = function(min, max) {
    let scale = d3.scaleLinear()
        .domain([min,max])
        .range([50,500]);
    return scale;
}

function createChart(file) {
    const data = [];
    // process the data
    d3.csv(file, (d) => {
        // parse to int with +
        data.push(+d.population)
    }).then(() => {
        // create svg and scale
        let svg = Svg(data.length);
        let scale = Scale(d3.min(data), d3.max(data));

        // create new group
        let g = svg.selectAll("g")
            .data(data)
            .enter()
            .append("g")
            .attr("transform", (d,i) => 
                "translate(0," + i * barHeight +")");

        // create the bars
        g.append("rect")
            .attr("width", d => scale(d))
            .attr("fill", d => {
                // color
                if (d < 5000)
                    return "green";
                else if (d > 10000)
                    return "red";
                else
                    return "blue";
            })
            .attr("height", barHeight - margin );  
                
        // append text in bars    
        g.append("text")
            .attr("x", d => scale(d))
            .attr("y", barHeight / 2)
            .attr("dy", ".35em")
            .style("text-anchor", "end")
            .text(d => d);   
    });
}

// create first chart
createChart("csv/bar1.csv");
// create second chart
createChart("csv/bar2.csv");