/********************/
/* EXERCISE 14 & 15 */
/********************/
// csv file 
let heartfailurecsv = 'https://raw.githubusercontent.com/akmand/datasets/master/heart_failure.csv';
// array to hold the quantity of each age group
let ages = [0,0,0,0];
var barWidth = 50;
var scaleFactor = 2;
var height = 400;

d3.csv(heartfailurecsv, (data) => {
        // sort the ages into respective array index
         if (data.age < 31) { ages[0]++; } else 
         if (data.age < 41) { ages[1]++; } else 
         if (data.age < 61) { ages[2]++; } else 
         if (data.age < 101) { ages[3]++; }
     }).then( () => {
        console.log(ages);

        // create the svg
        var graph = d3.select("body")
            .append("svg")
            .attr("width",barWidth*ages.length)
            .attr("height", height);

        // create the bar
        var bar = graph.selectAll("g")
            .data(ages)
            .enter()
            .append("g")
            .attr("transform", (d,i) =>
                "translate("+i*barWidth+",0)");

        // add the bar
        bar.append("rect")
            .attr("width", barWidth-1)
            .attr("y", (d)=>height-(d*scaleFactor))
            .attr("height", d => d * scaleFactor)
            .style("fill", (d) => {
                // if the data is extreme (>150), bar is red
                if(d > 150)
                    return "red";
            });

        // add the text
        bar.append("text")
            .attr("x", barWidth/4)
            .attr("y", (d)=>height-d*scaleFactor)
            .attr("dx", ".35em")
            .style("fill", "black")
            .text(d=>d);
     });