// create the dataset
var dataset = {
    apples: [5345, 2879, 1997, 2437, 4045], 
    pears: [2654, 3657, 1342, 875, 6532]
};

// create buttons
var buttons = d3.select("body")
    .append("g")
    .attr("class", "buttons");

for(i = 0; i < 2; i++){
    buttons.append("button")
    .attr("onclick", "setData(" + i + ")")
    .text("Dataset " + (i+1))
}

// size values
var width = 460, 
    height = 300, 
    radius = Math.min(width, height) / 2; 
 
// set of colors
var color = d3.scaleOrdinal().range(d3.schemeSet3); 

// create new pie chart
var pie = d3.pie() 
.sort(null); 

// create the arcs
var arc = d3.arc() 
    .innerRadius(radius - 100) 
    .outerRadius(radius - 50); 

// create the svg
var svg = d3.select("body").append("svg") 
    .attr("width", width) 
    .attr("height", height) 
    .append("g") 
    .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")"); 

function update(data) {
    // draw the pie segments
    var path = svg.selectAll("path") 
        .data(pie(data));

    path.join(
            // create new segments if needed and at creation
            enter => {
                enter.append("path") 
                .attr("fill", function(d, i) { return color(i); }) 
                .attr("d", arc) 
                .transition() 
                        .duration(1000) 
                        .attrTween("d", function (d) { 
                            var i = d3.interpolate(d.endAngle, d.startAngle); 
                            return function (t) { 
                                d.startAngle = i(t); 
                                return arc(d); 
                            } 
                        }); 
            },
            // transition between segments
            update => {
                update.transition() 
                .duration(1000)
                .attr("fill", function(d, i) { return color(i); }) 
                .attr("d", arc) 
            }
        )
}

// based on button pressed, determing the correct dataset
function setData(index){
    switch(index){
        case 0:
            update(dataset.apples)
            break;
        case 1:
            update(dataset.pears)
            break;
        default:
            update(dataset.apples)
            break;
    }
}

update(dataset.apples);