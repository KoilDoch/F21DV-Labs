/***************/
/* EXERCISE 10 */
/***************/
let heartfailurecsv = 'https://raw.githubusercontent.com/akmand/datasets/master/heart_failure.csv';
// array to hold the quantity of each age group
let ages = [0,0,0,0];
d3.csv(heartfailurecsv, (data) => {
        // sort the ages into respective array index
        if (data.age < 31) { ages[0]++; } else 
        if (data.age < 41) { ages[1]++; } else 
        if (data.age < 61) { ages[2]++; } else 
        if (data.age < 101) { ages[3]++; }
    }).then(() => createParagraphs());

// function called to append to the paragraphs
function createParagraphs() {
    d3.select("body")
        .selectAll("p")
        .data(ages)
        .join(
            enter => { enter.append("p").append("text").text(d=>d); },
            update => { update.append("text").text(d=>d); },
            exit => { exit.remove(); }
        );
}