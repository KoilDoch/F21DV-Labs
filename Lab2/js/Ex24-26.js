/**
 * Exercise 24
 * The output is [16.2, 34.4, 5.2].
 * The parameter of 0.2 means that these values are a 20% increase towards the next value.
 * For example, value 20 and value 1
 * There is a difference of 19 between these values.
 * 19 * 0.2 = 3.8
 * 20 - 3.8 = 16.2
 */

/**
 * Exercise 25
 * The output value is rgb(128,64,0)
 * The value of red is rgb(255,0,0)
 * The value of green is rgb(0,128,0)#
 * 
 * By interpolating 0.5, the returned value is the halfway point between these two colors.
 * The R value is halved to 128 (realistically it should be 127.5 but RGB only accepts int)
 * The G value's final value would be 128 rather than 255, so its 0.5 value is 64.
 */

/**
 * Exercise 26
 * Below shows interpolation on dates.
 * By creating new dates, the interpolation starts at midnight of that day.
 * Hence calling 0.5 on the example would return Midnight of Monday the 21st of Febuary 2022
 */
let date = d3.interpolate(new Date("2022-02-17"), new Date("2022-02-25"))
console.log(date(0.5));