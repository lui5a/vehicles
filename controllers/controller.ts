let car: Car;


function createCar(plate:string,brand:string,color:string){
    return new Car (plate,color,brand);
}


function submitCar() {
    const plateInput = <HTMLInputElement>document.getElementById("plateInput");
    const plateValidation = /^[0-9]{4}[a-zA-Z]{3}$/;
    if(!plateValidation.test(plateInput.value)){
        alert("no es una matricula valida");
    } else{
        const brandInput = <HTMLInputElement>document.getElementById("brandInput");
        const colorInput = <HTMLInputElement>document.getElementById("colorInput");

     	car = createCar(plateInput.value,brandInput.value,colorInput.value);
    	showVehicle();
     	showWheelForm();
    }
}

function showVehicle(){
    const carResult = <HTMLInputElement>document.getElementById("result-car-form");
	const carTitle = <HTMLInputElement>document.getElementById("carTitle");
	const plateOutput = <HTMLInputElement>document.getElementById("plateOutput");
    const brandOutput = <HTMLInputElement>document.getElementById("brandOutput");
    const colorOutput = <HTMLInputElement>document.getElementById("colorOutput");

    carResult.style.display = "block";
    carTitle.innerText = "Car:";
    plateOutput.innerText = car.plate;
    brandOutput.innerText = car.brand;
    colorOutput.innerText = car.color;

}

function testDiameter(diameter:number){
     if(diameter > 0.4 && diameter < 2){
         return true;
     } else{
         return false;
     }
}



function submitWheelForm(){
	const brandWheel1Input = <HTMLInputElement>document.getElementById("brandWheel1Input");
    const diameterWheel1Input = <HTMLInputElement>document.getElementById("diameterWheel1Input");
    if(!testDiameter(Number(diameterWheel1Input.value))){
        alert("el diametro de la rueda 1 no es correcto");
        return;
    }

	const brandWheel2Input = <HTMLInputElement>document.getElementById("brandWheel2Input");
    const diameterWheel2Input = <HTMLInputElement>document.getElementById("diameterWheel2Input");
        if(!testDiameter(Number(diameterWheel2Input.value))){
        alert("el diametro de la rueda 2 no es correcto");
        return;
    }
    const brandWheel3Input = <HTMLInputElement>document.getElementById("brandWheel3Input");
    const diameterWheel3Input = <HTMLInputElement>document.getElementById("diameterWheel3Input");
        if(!testDiameter(Number(diameterWheel3Input.value))){
        alert("el diametro de la rueda 3 no es correcto");
        return;
    }

    const brandWheel4Input = <HTMLInputElement>document.getElementById("brandWheel4Input");
    const diameterWheel4Input = <HTMLInputElement>document.getElementById("diameterWheel4Input");
        if(!testDiameter(Number(diameterWheel4Input.value))){
        alert("el diametro de la rueda 4 no es correcto");
        return;
    }

    let wheel1 = new Wheel(Number(diameterWheel1Input.value), brandWheel1Input.value);
    let wheel2 = new Wheel(Number(diameterWheel2Input.value), brandWheel2Input.value);
	let wheel3 = new Wheel(Number(diameterWheel3Input.value), brandWheel3Input.value);
	let wheel4 = new Wheel(Number(diameterWheel4Input.value), brandWheel4Input.value);

	car.addWheel(wheel1);
	car.addWheel(wheel2);
	car.addWheel(wheel3);
	car.addWheel(wheel4);

	console.log(car.wheels[0].brand);			
	console.log(car.wheels[0].diameter);
	showWheels();
}


function showWheels(){
    const wheelResult = <HTMLInputElement>document.getElementById("result-wheels-form");
	const wheelTitle = <HTMLInputElement>document.getElementById("wheelTitle");
	const wheelOutput1 = <HTMLInputElement>document.getElementById("wheelOutput1");
	const wheelOutput2 = <HTMLInputElement>document.getElementById("wheelOutput2");
	const wheelOutput3 = <HTMLInputElement>document.getElementById("wheelOutput3");
	const wheelOutput4 = <HTMLInputElement>document.getElementById("wheelOutput4");

    wheelResult.style.display = "block";
    wheelTitle.innerText = "Wheels:";
    wheelOutput1.innerText = "Brand: " + car.wheels[0].brand + "  Diameter: " + car.wheels[0].diameter;
    wheelOutput2.innerText = "Brand: " + car.wheels[1].brand + "  Diameter: " + car.wheels[1].diameter;
    wheelOutput3.innerText = "Brand: " + car.wheels[2].brand + "  Diameter: " + car.wheels[2].diameter;
    wheelOutput4.innerText = "Brand: " + car.wheels[3].brand + "  Diameter: " + car.wheels[3].diameter;
}

function showWheelForm(){
	const carForm = <HTMLInputElement>document.getElementById("create-car-form");
	const carWheel = <HTMLInputElement>document.getElementById("create-wheel-form");
	carForm.style.display = "none";
	carWheel.style.display = "block";

}


window.onload = function (){  
const carResult = <HTMLInputElement>document.getElementById("result-car-form");
carResult.style.display = "none";
const wheelResult = <HTMLInputElement>document.getElementById("result-wheels-form");
wheelResult.style.display = "none";
};



// mostrar formulario ruedas

// create car y add wheels