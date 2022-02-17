//******************** DATA ********************//
// create 2 data_set 
const data = [[ 
{group: "A", value: 5}, 
{group: "B", value: 20}, 
{group: "C", value: 9} ],
[ 
{group: "A", value: 10}, 
{group: "B", value: 2}, 
{group: "C", value: 22},
{group: "D", value: 16} ],
[ 
{group: "A", value: 15}, 
{group: "B", value: 16}, 
{group: "C", value: 10} 
]];

// get colours
var colors = d3.scaleOrdinal().domain(data).range(["red","blue","green"])

// set the dimensions and margins of the graph 
const margin = {top: 60, right: 30, bottom: 70, left: 60}; 
const width  = 460 - margin.left - margin.right; 
const height = 400 - margin.top - margin.bottom;

//******************** DRAWING ********************//
// append the svg object to the body of the page 
var svg = d3.select('body') 
    .append('div') 
    .append("svg") 
        .attr("width", width + margin.left + margin.right) 
        .attr("height", height + margin.top + margin.bottom) 
    .append("g") 
        .attr("transform", 
        "translate(" + margin.left + "," + margin.top + ")"); 

//---------- AXIS ----------//
// add X axis
var x = d3.scaleBand() 
    .range([ 0, width]) 
    .domain(data[0].map(function(d) { return d.group; })) 
    .padding(0.2); 

svg.append("g") 
    .attr("id", "bottomAxis")
    .attr("transform", "translate(0," + height + ")") 
    .call(d3.axisBottom(x)) 

svg.append("g")
    .attr("id", "topAxis")
    .call(d3.axisTop(x)) 

// Add Y axis 
var y = d3.scaleLinear() 
    .domain([0, 22]) 
    .range([ height, 0]); 

svg.append("g") 
    .attr("id", "leftAxis")
    .attr("class", "myYaxis") 
    .call(d3.axisLeft(y)); 

svg.append("g")
    .attr("id", "rightAxis")
    .attr("transform", "translate("+width+",0)") 
    .call(d3.axisRight(y)) 


//******************** EVENTS ********************//    
// A function that create / update the plot for a given variable: 
function update(index) { 
    var u = svg.selectAll("rect") 
        .data(data[index]) 

    // change the x scale
    x.domain(data[index].map(d => d.group));
    d3.select("#bottomAxis")
        .call(d3.axisBottom(x));
    d3.select("#topAxis")
        .call(d3.axisTop(x));

    u.join( 
        // for newly created divs
        enter => {enter.append("rect") 
            .on("mouseover", displayValue)
            .on("mouseout", hideValue)
            .merge(u) 
            .transition() 
            .duration(1000) 
            .attr("x", function(d) { return x(d.group); }) 
            .attr("y", function(d) { return y(d.value); }) 
            .attr("width", x.bandwidth()) 
            .attr("height", function(d) { return height - y(d.value); }) 
            .attr("fill", colors(index))
        },
        // for updating existing
        update => {
            update.transition() 
            .duration(1000) 
            .attr("x", function(d) { return x(d.group); }) 
            .attr("y", function(d) { return y(d.value); }) 
            .attr("width", x.bandwidth()) 
            .attr("height", function(d) { return height - y(d.value); }) 
            .attr("fill", colors(index));
        },
        // removing any not used, fade out
        exit => {
            exit.transition()
            .duration(500)
            .attr("x", width)
            .style("opacity",0)
            .remove();
        }
    );
} 

// displays the value when hovering over the bar
function displayValue(d, i){
    //display the value
    svg.append("text") 
        .attr('class', 'val')  
        .attr('x', function() { 
            return x(i.group); 
        }) 
        .attr('y', function() { 
            return y(i.value) - 15; 
        }) 
        .text( function(d) { return '$' + i.value; } ); // Value of the text 
}

// hide the value of the text when not hovering
function hideValue() {
    d3.selectAll(".val").remove();
}

// Initialize the plot with the first dataset 
update(0)