function celsius2Farenheit(){

    var fahrenheit = 68;

    const celsius = (fahrenheit - 32) / 1.8;

    let roundCel = Math.round(celsius);

    console.log(fahrenheit + " degrees Fahrenheit is " + roundCel + " degrees Celsius.");
}

celsius2Farenheit()

function farenheit2Celsius(){

    var celsius = 49;

    const fahrenheit = (celsius * 1.8) + 32;

    let roundFahr = Math.round(fahrenheit);

    console.log (celsius + ' degrees Celsius is ' + roundFahr + ' degrees Fahrenheit.');
}

farenheit2Celsius()

console.log(celsius2Farenheit(), 'and', farenheit2Celsius())








