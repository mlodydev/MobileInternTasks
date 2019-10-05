let calculator = {
    billValue:0,
    tipPercentage:0,
    tipValue:0,
    setTip: function(){
        let tipPerc = window.prompt("Enter percentage of tip");
        while(isNaN(tipPerc) || tipPerc<0){
            alert("Value of a tip must be a non-negative number");
            tipPerc = window.prompt("Enter percentage of tip");
        }
        this.tipPercentage = tipPerc*0.01;
    },
    setBill: function(){
        let billVal = window.prompt("Enter value of a bill");
        while(isNaN(billVal) || billVal<=0){
            alert("Value of a bill must be a non-negative number");
            billVal = window.prompt("Enter value of bil");
        }
        this.billValue = billVal;
    },
    calculateTip: function(){
        this.tipValue = this.billValue * this.tipPercentage;
        this.tipValue = this.tipValue.toFixed(2);
        console.log(`The value of the bill is: ${this.tipValue}.`);
    }
};

calculator.setTip();

calculator.setBill();

calculator.calculateTip();

/*
I assume that the value of the the bill and the tip is non-negative
but I don't bound it from above (a bill can large and a tip can be generous)
*/