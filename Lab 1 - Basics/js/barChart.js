/************************/
/* EXERCISE 21 & 28 & 32*/
/************************/

function BarChart() {
    let obj = {}                                                            //  holds object to be returned
    const margin = {top: 20, right: 30, bottom: 40, left: 60, bar: 1};      // holds the margin data
    const data = [];         //
    const width = 500 - margin.left - margin.right;                         //
    const barHeight = 40;
    let svg;
    let x_axis, y_axis, xscale, yscale, color;

    // set data according to the csv
    obj.setData = (file) => {
        d3.csv(file, (d) => {
            data.push(d);
        }).then( () => {
            // colors associated with each bar
            color = d3.scaleOrdinal().domain(data).range(["red","blue","green","yellow"]);

            obj.createSvg();
            obj.createScale();
            obj.createBars();
        });
    }

    obj.createSvg = () => {
        svg = d3.select(".bar-chart")
        .append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", barHeight * data.length 
            + margin.top + margin.bottom)
        .attr("transform", 
            "translate(" + margin.left + ","+ margin.top+")");

        // append an image to the svg
        svg.append("image")
            .attr("x", margin.left)
            .attr('width', width)
            .attr('height', barHeight * data.length)
            .attr("xlink:href", "bar.png")
            // if this is not specified it will not stretch
            .attr("preserveAspectRatio", "none");
    }
    
    obj.createScale = () => {
        // create the x scale
        xscale = d3.scaleLinear()
            .domain([0, d3.max(data, d=>+d.population)])
            .range([0, width]);

        // create the x axis
        x_axis = d3.axisBottom()
            .scale(xscale);
            
        // append x axis
        svg.append("g")
            .attr("transform", "translate(" + margin.left + "," + 
                barHeight * data.length +")")
            .call(x_axis)

        // create the y scale using scaleband
        // using scaleband instead of scaleLinear due to 
        // the y axis being ordinal
        yscale = d3.scaleBand()
            .range([0, barHeight * data.length])
            // counting backwards down the list of elements
            .domain(data.map(d => d.city));

        // create the y axis
        y_axis = d3.axisLeft()
            .scale(yscale);

        // append y axis
        svg.append("g")
            .attr("transform", "translate(" + margin.left + ",0)")
            .call(y_axis)
    }
    
    obj.createBars = () => {
        // add the rectangle
        var rects = svg.selectAll(".bar")
            .data(data)
            .enter()
            .append("g");
                
        rects.append("rect")
            .attr("class", "bar")
            // make sure they start on the 0
            .attr("x", xscale(0) + margin.left)
            .attr("y", (d,i) => { return i * barHeight})
            // scale is now based on the xscale
            .attr("width", d => xscale(+d.population))
            .attr("height", barHeight - margin.bar)
            .attr("fill", (d,i) => {return color(i)}) 
    }

    return obj;
}

var barChart = BarChart();
barChart.setData("csv/bar1.csv");
