 function calculate() {
        var height = document.getElementById("height");
        var weight = document.getElementById("weight");       
        var resultArea = document.querySelector(".comment");       
           const heightValue = height.value;
           const weightValue = weight.value;
           if (!heightValue || !weightValue) {
               alert("Please fill out all fields !!...");
               return;
           }
            var bmi = (weightValue) / ((heightValue) / 100 * (heightValue) / 100);
            var status = '';

            if (bmi < 18.5) {
              status = 'Underweight';
          } else if (18.5 <= bmi && bmi <25) {
            status = 'Healthy';
          } else if (25 <= bmi && bmi <30) {
            status = 'Overweight';
          } else if (bmi >= 30) {
            status = 'Obese';
          }
        
            document.querySelector("#result").innerHTML = bmi.toFixed(2);

            document.querySelector(".comment").style.display = "block";
            document.querySelector(".comment").innerHTML = `Comment: you are <span id="comment">${status}</span>`;
      };
      
        