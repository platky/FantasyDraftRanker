/**
 * Created by platk on 2016-09-22.
 */

var names = [];
var ranks = [1, 4, 10, 15, 30 ,40, 10, 20 , 30, 40];

window.addEventListener("load", function(){
    var calcBut = document.getElementById("calculate");
    calcBut.addEventListener("click", function(){
        var box = document.getElementById("inputText");
        var lines = box.value.split('\n');
        names = [];
        if(lines.length<10) {
            alert("Please enter 10 managers");
            return;
        }
        console.log("continuing");
        for(var i = 0;i < lines.length;i++){
            names.push(lines[i]);
        }
        document.getElementById("rankingInput").style.display="none";
        document.getElementById("rankingOutput").style.display="block";
        calcResults();
    });
    var resetBut = document.getElementById("reset");
    resetBut.addEventListener('click', function(){
        document.getElementById("rankingInput").style.display="block";
        document.getElementById("rankingOutput").style.display="none";
    });
});


function calcResults(){
    //calculate for bottom 4 managers
    var cnt =0;
    var rnd = ranks[9]+ranks[8]+ranks[7]+ranks[6];
    var selected = [];
    while(cnt<4){
        var curRand = rand(1, rnd);
        if(curRand<=ranks[6]){
            if(selected.indexOf(6)==-1){
                cnt++;
                selected.push(6);
            }
        } else if(curRand<=ranks[7]){
            if(selected.indexOf(7)==-1){
                cnt++;
                selected.push(7);
            }
        } else if(curRand<=ranks[8]){
            if(selected.indexOf(8)==-1){
                cnt++;
                selected.push(8);
            }
        } else if(curRand<=ranks[9]){
            if(selected.indexOf(9)==-1){
                cnt++;
                selected.push(9);
            }
        }
    }

    var resultList = document.getElementById("resultList");
    resultList.innerHTML="";
    var m1 = document.createElement('li');
    m1.textContent = names[selected[0]];
    resultList.appendChild(m1);
    var m2 = document.createElement('li');
    m2.textContent = names[selected[1]];
    resultList.appendChild(m2);
    var m3 = document.createElement('li');
    m3.textContent = names[selected[2]];
    resultList.appendChild(m3);
    var m4 = document.createElement('li');
    m4.textContent = names[selected[3]];
    resultList.appendChild(m4);

    cnt =0;
    rnd = ranks[5]+ranks[4]+ranks[3]+ranks[2]+ranks[1]+ranks[0];
    selected = [];
    while(cnt<6){
        var curRand = rand(1, rnd);
        if(curRand<=ranks[0]){
            if(selected.indexOf(0)==-1){
                cnt++;
                selected.push(0);
            }
        } else if(curRand<=ranks[1]){
            if(selected.indexOf(1)==-1){
                cnt++;
                selected.push(1);
            }
        } else if(curRand<=ranks[2]){
            if(selected.indexOf(2)==-1){
                cnt++;
                selected.push(2);
            }
        } else if(curRand<=ranks[3]){
            if(selected.indexOf(3)==-1){
                cnt++;
                selected.push(3);
            }
        } else if(curRand<=ranks[4]){
            if(selected.indexOf(4)==-1){
                cnt++;
                selected.push(4);
            }
        } else if(curRand<=ranks[5]){
            if(selected.indexOf(5)==-1){
                cnt++;
                selected.push(5);
            }
        }
    }

    var m5 = document.createElement('li');
    m5.textContent = names[selected[0]];
    resultList.appendChild(m5);
    var m6 = document.createElement('li');
    m6.textContent = names[selected[1]];
    resultList.appendChild(m6);
    var m7 = document.createElement('li');
    m7.textContent = names[selected[2]];
    resultList.appendChild(m7);
    var m8 = document.createElement('li');
    m8.textContent = names[selected[3]];
    resultList.appendChild(m8);
    var m9 = document.createElement('li');
    m9.textContent = names[selected[4]];
    resultList.appendChild(m9);
    var m10 = document.createElement('li');
    m10.textContent = names[selected[5]];
    resultList.appendChild(m10);
}

function rand(min,max)
{
    return Math.floor(Math.random()*(max-min+1)+min);
}