function displayContent (input) {
    let values = document.getElementById("values");

    if (input == 0) {
        if (values.innerHTML == "0") {
            values.innerHTML = "0";
        }
        else if (values.innerHTML[0] == "=") {
            values.innerHTML = "0";
        }
        else {
            values.innerHTML += "0";
        }
    }

    else if (input == 1) {
        if (values.innerHTML == "0") {
            values.innerHTML = "1";
        }
        else if (values.innerHTML[0] == "=") {
            values.innerHTML = "1";
        }
        else {
            values.innerHTML += "1";
        }
    }

    else if (input == 2) {
        if (values.innerHTML == "0") {
            values.innerHTML = "2";
        }
        else if (values.innerHTML[0] == "=") {
            values.innerHTML = "2";
        }
        else {
            values.innerHTML += "2";
        }
    }

    else if (input == 3) {
        if (values.innerHTML == "0") {
            values.innerHTML = "3";
        }
        else if (values.innerHTML[0] == "=") {
            values.innerHTML = "3";
        }
        else {
            values.innerHTML += "3";
        }
    }

    else if (input == 4) {
        if (values.innerHTML == "0") {
            values.innerHTML = "4";
        }
        else if (values.innerHTML[0] == "=") {
            values.innerHTML = "4";
        }
        else {
            values.innerHTML += "4";
        }
    }

    else if (input == 5) {
        if (values.innerHTML == "0") {
            values.innerHTML = "5";
        }
        else if (values.innerHTML[0] == "=") {
            values.innerHTML = "5";
        }
        else {
            values.innerHTML += "5";
        }
    }

    else if (input == 6) {
        if (values.innerHTML == "0") {
            values.innerHTML = "6";
        }
        else if (values.innerHTML[0] == "=") {
            values.innerHTML = "6";
        }
        else {
            values.innerHTML += "6";
        }
    }

    else if (input == 7) {
        if (values.innerHTML == "0") {
            values.innerHTML = "7";
        }
        else if (values.innerHTML[0] == "=") {
            values.innerHTML = "7";
        }
        else {
            values.innerHTML += "7";
        }
    }

    else if (input == 8) {
        if (values.innerHTML == "0") {
            values.innerHTML = "8";
        }
        else if (values.innerHTML[0] == "=") {
            values.innerHTML = "8";
        }
        else {
            values.innerHTML += "8";
        }
    }

    else if (input == 9) {
        if (values.innerHTML == "0") {
            values.innerHTML = "9";
        }
        else if (values.innerHTML[0] == "=") {
            values.innerHTML = "9";
        }
        else {
            values.innerHTML += "9";
        }
    }

    else if (input == 'c') {
        values.innerHTML = "0";
    }

    else if (input == "/") {
        if (values.innerHTML[0] == "=") {
            let remainingDiv = values.innerHTML.slice(1);
            values.innerHTML = remainingDiv + "/";        
        }
        else {
            values.innerHTML += "/";
        }
    }
    
    else if (input == "+") {
        if (values.innerHTML[0] == "=") {
            let remainingDiv = values.innerHTML.slice(1);
            values.innerHTML = remainingDiv + "+";        
        }
        else {
            values.innerHTML += "+";
        }
    }

    else if (input == "*") {
        if (values.innerHTML[0] == "=") {
            let remainingDiv = values.innerHTML.slice(1);
            values.innerHTML = remainingDiv + "*";        
        }
        else {
            values.innerHTML += "*";
        }
    }
    
    else if (input == "-") {
        if (values.innerHTML == "0") {
            values.innerHTML = "-";
        }
        else if (values.innerHTML[0] == "=") {
            let remainingMin = values.innerHTML.slice(1);
            values.innerHTML = remainingMin + "-";        
        }
        else {
            values.innerHTML += "-";
        }
    }

    else if (input == '.') {
        if (values.innerHTML[0] != "=") {
            values.innerHTML += ".";
        }
    }

    else if (input == '=') {
        solve();
    }
    else if (input == 'del') {
        if (values.innerHTML != "0") {
            if (values.innerHTML.length == 1) {
                values.innerHTML = "0";
            }
            else if (values.innerHTML[0] == "=") {
                let remainingDel = values.innerHTML.slice(1,values.innerHTML.length-1);
                values.innerHTML = remainingDel;
            }
            else {
                remove();
            }
        }
    }
    
}

function solve () {
    let solution = eval(values.innerHTML);
    values.innerHTML = "= " + solution;
}

function remove () {
    let remainingDigits = values.innerHTML.slice(0,values.innerHTML.length-1);
    values.innerHTML = remainingDigits;
}