/**************/
/* EXERCISE 9 */
/**************/
let titaniccsv = 'https://raw.githubusercontent.com/dsindy/kaggle-titanic/master/data/test.csv';
let countMr = 0;
let class3 = 0;
d3.csv(titaniccsv, (data) => {
    // count any names including Mr
    if(data.Name.includes("Mr."))
        countMr++;
    // count any 3rd class passengers
    if(data.Pclass == 3)
        class3++;
}).then( () => {
    // .then invoked to be sure the previous process is complete
    console.log("Number of 'Mr.'s aboard: " + countMr);
    console.log("Number of 3rd Class Passengers: " + class3);
});