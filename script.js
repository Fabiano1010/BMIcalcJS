class BMI {
height;
weight;

    constructor(height, weight){
        this.height = height;
        this.weight = weight;
    };

    getHeight(){
        return this.height;
    };
    getWeight(){
        return this.weight;
    };
    setHeight(height){
        this.height = height;
    };
    setWeight(weight){
        this.weight = weight;
    };


    calcBMI(){
        return (this.weight / ((this.height/100) * (this.height/100))).toFixed(2);
    };

    casesBMI(){
        switch(true){
            case this.calcBMI() < 18.5 :
                return "Underweight";
                break;
            case this.calcBMI() < 25 :
                return "Healthy Weight";
                break;
            case this.calcBMI() < 30 :
                return "Overweight";
                break;  
            case this.calcBMI() < 35 :
                return "Obesity";
                break;  
            case this.calcBMI() < 40 :
                return "Class II Obesity";
                break;  
            default:
                return "Class III Obesity";
        };
    };
};

document.querySelector("#button").addEventListener("click", function() {
    let weight = document.getElementById("weight").value;
    weight = parseFloat(weight);
    let height = document.getElementById("height").value;
    height = parseFloat(height);
    console.log(weight)
    if(isNaN(weight) || isNaN(height) || weight<5 || height<50 || weight>500 || height>300){
        document.querySelector("#result").innerHTML=`Wrong data`;
    }
    else{
        let bmi = new BMI(height, weight);
        document.querySelector("#result").innerHTML=`Your BMI: ${bmi.calcBMI()}<br> You have <b>${bmi.casesBMI()}</b>`;
    }
    
});