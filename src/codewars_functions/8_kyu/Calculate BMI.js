// Write function bmi that calculates body mass index (bmi = weight / height2).
//
//     if bmi <= 18.5 return "Underweight"
//
// if bmi <= 25.0 return "Normal"
//
// if bmi <= 30.0 return "Overweight"
//
// if bmi > 30 return "Obese"


function bmi(weight, height) {
    var result = weight/Math.pow(height,2)

    if (result <= 18.5) {
        return "Underweight";
    } else if (result <= 25) {
        return "Normal";
    } else if (result <= 30) {
        return "Overweight";
    } else {
        return "Obese";
    }

}

const bmi = (w, h, bmi = w/h/h) =>  bmi <= 18.5 ? "Underweight" :
    bmi <= 25 ? "Normal" :
        bmi <= 30 ? "Overweight" : "Obese";

function bmi(weight, height) {

    var bmi  = weight/(height*height);

    return bmi < 18.5 ? "Underweight" : bmi <=25 ? "Normal" : bmi <= 30 ? "Overweight" : "Obese";

}

function bmi(weight, height) {
    var formula = (weight / Math.pow(height, 2));
    switch (true) {
        case formula <=18.5:
            return 'Underweight';
        case formula <=25.0:
            return 'Normal';
        case formula <=30:
            return 'Overweight';
        default:
            return 'Obese';

    }
}

function bmi(weight, height) {
    let bmi = weight / (height * height);
    switch(true){
        case bmi <= 18.5:
            return "Underweight";
        case bmi <= 25.0:
            return "Normal";
        case bmi <= 30.0:
            return "Overweight";
        case bmi > 30:
            return "Obese";
    }
}

function bmi(weight, height) {
    const bmi = weight / (height * height);
    if(bmi <= 18.5) return "Underweight";
    if(bmi <= 25) return "Normal";
    if(bmi <= 30) return "Overweight";
    return "Obese";
}

function bmi(weight, height) {
    const $ = weight / height**2;
    return $ <= 18.5 ? 'Underweight' : $ <= 25.0 ? 'Normal' : $ <= 30.0 ? 'Overweight' : 'Obese';
}

function bmi(weight, height) {
    let b = weight / height**2;
    return b <= 18.5 ? 'Underweight' : b <= 25.0 ? 'Normal' : b <= 30.0 ? 'Overweight' : 'Obese';
}

function bmi(weight, height) {
    var val = weight / (height * height);
    if(val <= 18.5) {
        return 'Underweight';
    }
    if(val <= 25.0) {
        return 'Normal';
    }
    if(val <= 30.0) {
        return 'Overweight';
    }
    return 'Obese';
}

function bmi(weight, height, index = weight/(height**2)) {
    return index <= 18.5 ? 'Underweight' : index <= 25.0 ? "Normal" : index <= 30 ? 'Overweight' : 'Obese';
} // dupa

const bmi = (weight, height) =>
    (val => val <= 18.5 ? `Underweight` : val <= 25 ? `Normal` : val <= 30 ? `Overweight` : `Obese`)
    (weight / height ** 2);

bmi = (w, h) => (w = w / h / h) > 30 ? 'Obese' : w > 25 ? 'Overweight' : w > 18.5 ? 'Normal' : 'Underweight';

function bmi(w, h) {
    let b = w/Math.pow(h, 2)
    return  b > 30 ? "Obese" :
        b > 25 ? "Overweight" :
            b > 18.5 ? "Normal" : "Underweight";

}

function bmi(weight, height) {
    const x = weight / height ** 2

    return x <= 18.5 ? 'Underweight' : x <= 25.0 ? 'Normal' : x <= 30.0 ? 'Overweight' : 'Obese'
}

function bmi(weight, height) {
    let bmi = Math.round((weight / Math.pow(height, 2)) * 10) / 10;
    if (bmi <= 18.5)
        return('Underweight');
    else if (bmi <= 25.0)
        return('Normal');
    else if (bmi <= 30.0)
        return('Overweight');
    else if(bmi > 30)
        return('Obese');
}

function bmi(weight, height) {
    const calc = (weight / height ** 2).toFixed(2);
    const index = ['Underweight', 'Normal', 'Overweight', 'Obese'];

    if (calc <= 18.5) return index[0];
    if (calc <= 25.0) return index[1];
    if (calc <= 30.0) return index[2];
    if (calc > 30.0) return index[3];
}

const bmi = (weight, height) => {

    let x = (weight / (height * height))

    return x <= 18.5 ? "Underweight"
        : x <= 25.0 ? "Normal"
            : x <= 30.0 ? "Overweight"
                : x > 30   && "Obese"
}

function bmi(weight, height) {
    const n = weight / height / height
    return n <= 18.5 ? "Underweight" : n <= 25 ? "Normal" : n <= 30 ? "Overweight" : "Obese"
}

function bmi(weight, height) {
    const bmi = weight / (height ** 2);
    return bmi <= 18.5 ? 'Underweight' : bmi <=25 ? 'Normal' : bmi <= 30 ? 'Overweight' : 'Obese';
}

let bmi = (w, h, i = w/h**2) =>
    i <= 18.5 && 'Underweight' ||
    i <= 25 && 'Normal' ||
    i <= 30 && 'Overweight' || 'Obese'

describe("Tests", () => {
    it("test", () => {
        Test.assertEquals(bmi(80, 1.80), "Normal");
    });
});

