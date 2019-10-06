let calculator = {
    billValue:0,
    tipPercentage:0,
    tipValue:0,
    setTip: function(){
        this.tipPercentage = window.prompt("Enter percentage of tip");
        while(isNaN(this.tipPercentage) || this.tipPercentage<0){
            alert("Value of a tip must be a non-negative number");
            this.tipPercentage = window.prompt("Enter percentage of tip");
        }
        this.tipPercentage = this.tipPercentage*0.01;
    },
    setBill: function(){
        this.billValue = window.prompt("Enter value of a bill");
        while(isNaN(this.billValue) || this.billValue<=0){
            alert("Value of a bill must be a non-negative number");
            this.billValue = window.prompt("Enter value of bil");
        }
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