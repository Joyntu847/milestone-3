
 /**
  function feetToMile(feet){
    let mile=feet/5280;
    return mile;
}
let senior=[1000,5000,50000];
 let first = feetToMile(senior[0]);
 console.log(first);

 let second = feetToMile(senior[1]);
 console.log(second);

 let third = feetToMile(senior[2]);
 console.log(third);
 */
 
 /**
  function woodCalculator(chair,tabil,bed){
      let chairCount = chair*1;
      let tabilCount = tabil*3;
      let bedCount = bed*5;
      let totalWood = chairCount+tabilCount+bedCount;
      return totalWood;
 }
 let woodresult = woodCalculator(14,5,12);
 console.log(woodresult)
  */

/**
 function brickCalculator(floor){
    if(floor <= 10){
        let feet1 = floor * 15;
         brick = feet1 * 1000;
    }
    
    else if(floor <= 20){
        let feet2 = floor * 12;
         brick = feet2 * 1000;
    }
    else{
        let feet3 = floor * 10;
         brick = feet3 * 1000;
    }
    return brick;
}

let totalBrick = brickCalculator(3);
console.log(totalBrick)
*/

 /** 
  function tinyFriend(nums){
    var miniNames =nums[0];
    for(i = 0; i < nums.length; i++){
        var currentNumber = nums[i];
        if(currentNumber < miniNames){
            var miniNames = currentNumber;
        }
    }
    return miniNames;
}
var friends = tinyFriend(['rajeshchy','ranjanbibek','emu','rahul','pranto']);
console.log(friends);
*/






/* 
Sir,ei vhabe krte cheyechilam kintu milate parchilam na;
please ,janaben vul ta kothai chilo.eii function er

function tinyFriend(str){
     var mini = "";
     for(var i = 0; i < str.length; i++){
         var curruntNumber = mini[i];
         if(curruntNumber < mini){
           var  mini = curruntNumber;
         }
     }
     return mini;
 }
 var friends = tinyFriend(['rajesh','dhurubo','emu','rahul']);
 console.log(friends)*/