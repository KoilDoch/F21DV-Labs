const width = 500;
const height = 500;

const data = [10, 15, 20, 25, 30];
// Note different valid ways of specifying color
const colors = ["#ffffcc","red","rgb(0,255,0","#31a354","#006837"];

// create svg
const svg = d3.select("body")
    .append("svg")
    .attr("width", width)
    .attr("height", height)

// process data
const g = svg.selectAll("g")
    .data(data)
    .enter()
    .append("g")
    .attr("transform", (d,i) => {
        return "translate(0,0)";
    })

// append circles
// for data with values of 20 or less, use circles
g.filter(d=>d<=20)
    .append("circle")
    .attr("class", "item")
    .attr("cx", (d,i) => i*100+45)
    .attr("cy", (d,i) => 100)
    .attr("r", d => d*1.5)
    .attr("fill", (d,i) => colors[i]);

// append rect
// for data with values greater than 20, use rectangles
g.filter(d=>d>20)
    .append("rect")
    .attr("class", "item")
    .attr("x", (d,i) => (i+3)*100+20)
    .attr("y", (d,i) => 100-(d))
    .attr("width", d=>d*2)
    .attr("height", d=>d*2)
    .attr("fill", (d,i) => colors[i+3]);

// append text
g.append("text")
    .attr("class", "value")
    .attr("x", (d,i) => i*100+40)
    .attr("y", 105)
    .attr("stroke", "black")
    .attr("font-size", "12px")
    .attr("font-family", "sans-serif")
    .text(d=>d);