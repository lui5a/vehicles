var car;
function createCar(plate, brand, color) {
    return new Car(plate, color, brand);
}
function submitCar() {
    var plateInput = document.getElementById("plateInput");
    var plateValidation = /^[0-9]{4}[a-zA-Z]{3}$/;
    if (!plateValidation.test(plateInput.value)) {
        alert("no es una matricula valida");
    }
    else {
        var brandInput = document.getElementById("brandInput");
        var colorInput = document.getElementById("colorInput");
        car = createCar(plateInput.value, brandInput.value, colorInput.value);
        showVehicle();
        showWheelForm();
    }
}
function showVehicle() {
    var carResult = document.getElementById("result-car-form");
    var carTitle = document.getElementById("carTitle");
    var plateOutput = document.getElementById("plateOutput");
    var brandOutput = document.getElementById("brandOutput");
    var colorOutput = document.getElementById("colorOutput");
    carResult.style.display = "block";
    carTitle.innerText = "Car:";
    plateOutput.innerText = car.plate;
    brandOutput.innerText = car.brand;
    colorOutput.innerText = car.color;
}
function testDiameter(diameter) {
    if (diameter > 0.4 && diameter < 2) {
        return true;
    }
    else {
        return false;
    }
}
function submitWheelForm() {
    var brandWheel1Input = document.getElementById("brandWheel1Input");
    var diameterWheel1Input = document.getElementById("diameterWheel1Input");
    if (!testDiameter(Number(diameterWheel1Input.value))) {
        alert("el diametro de la rueda 1 no es correcto");
        return;
    }
    var brandWheel2Input = document.getElementById("brandWheel2Input");
    var diameterWheel2Input = document.getElementById("diameterWheel2Input");
    if (!testDiameter(Number(diameterWheel2Input.value))) {
        alert("el diametro de la rueda 2 no es correcto");
        return;
    }
    var brandWheel3Input = document.getElementById("brandWheel3Input");
    var diameterWheel3Input = document.getElementById("diameterWheel3Input");
    if (!testDiameter(Number(diameterWheel3Input.value))) {
        alert("el diametro de la rueda 3 no es correcto");
        return;
    }
    var brandWheel4Input = document.getElementById("brandWheel4Input");
    var diameterWheel4Input = document.getElementById("diameterWheel4Input");
    if (!testDiameter(Number(diameterWheel4Input.value))) {
        alert("el diametro de la rueda 4 no es correcto");
        return;
    }
    var wheel1 = new Wheel(Number(diameterWheel1Input.value), brandWheel1Input.value);
    var wheel2 = new Wheel(Number(diameterWheel2Input.value), brandWheel2Input.value);
    var wheel3 = new Wheel(Number(diameterWheel3Input.value), brandWheel3Input.value);
    var wheel4 = new Wheel(Number(diameterWheel4Input.value), brandWheel4Input.value);
    car.addWheel(wheel1);
    car.addWheel(wheel2);
    car.addWheel(wheel3);
    car.addWheel(wheel4);
    console.log(car.wheels[0].brand);
    console.log(car.wheels[0].diameter);
    showWheels();
}
function showWheels() {
    var wheelResult = document.getElementById("result-wheels-form");
    var wheelTitle = document.getElementById("wheelTitle");
    var wheelOutput1 = document.getElementById("wheelOutput1");
    var wheelOutput2 = document.getElementById("wheelOutput2");
    var wheelOutput3 = document.getElementById("wheelOutput3");
    var wheelOutput4 = document.getElementById("wheelOutput4");
    wheelResult.style.display = "block";
    wheelTitle.innerText = "Wheels:";
    wheelOutput1.innerText = "Brand: " + car.wheels[0].brand + "  Diameter: " + car.wheels[0].diameter;
    wheelOutput2.innerText = "Brand: " + car.wheels[1].brand + "  Diameter: " + car.wheels[1].diameter;
    wheelOutput3.innerText = "Brand: " + car.wheels[2].brand + "  Diameter: " + car.wheels[2].diameter;
    wheelOutput4.innerText = "Brand: " + car.wheels[3].brand + "  Diameter: " + car.wheels[3].diameter;
}
function showWheelForm() {
    var carForm = document.getElementById("create-car-form");
    var carWheel = document.getElementById("create-wheel-form");
    carForm.style.display = "none";
    carWheel.style.display = "block";
}
window.onload = function () {
    var carResult = document.getElementById("result-car-form");
    carResult.style.display = "none";
    var wheelResult = document.getElementById("result-wheels-form");
    wheelResult.style.display = "none";
};
// mostrar formulario ruedas
// create car y add wheels
