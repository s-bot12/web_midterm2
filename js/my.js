function change_each(number) {
    
    var change_obj = eval("document.all.neonlight" + number);

    return change_obj;

}

function change() {

    //초기화 작업
    if (n == message.length-1) {
        for (m = message.length-1; m >=0; m--)
            change_each(m).style.color = base_color
    }

    change_each(n).style.color = change_color;

    if (n > 0) 
        n--;
    else {
        n = message.length-1;
        clearInterval(flashing);
        setTimeout("flashing = setInterval(\"change()\", speed);", 1500);
        return;
    }
}

function shffule(size) {
    var ranNo = Math.floor(Math.random() * size);
    document.getElementById("q1").style.backgroundColor = colorNames[ranNo];
    document.getElementById("q1").textContent = colorNames[ranNo];
}

function factorial(input) {
    sum = 1;
    for(var i=1; i<=input; i++)
        sum *=i;
    return sum;
}

function calculate(input2) {
    if(input2[input2.length-1] == '!') {
        var input3=input2.replace(/[^0-9]/g,'');
        return factorial(input3);
    }else
        return eval(input2);
}

function init_arr() { //숫자 야구
    for (i = 0; i < 10; i++) {
        arr[i] = new Array(10);
        for (j = 0; j < 10; j++) {
            arr[i][j] = new Array(10);
            for (k = 0; k <10; k++) {
                arr[i][j][k] = new Array(10);
                for(l = 0; l<10; l++) {
                    arr[i][j][k][l] = i*1000 + j*100 + k*10 + l;
                    if (i == j || i == k || i == l || j == k || j == l || k == l)
                        arr[i][j][k][l] = -1;
                }
            }
        }
    }
}

function random_number() { //숫자 야구
    if(count <= 0) {
        question.textContent = "남은 경우의 수가 없습니다... 중간에 잘못 입력하셨어요!";
        return false;
    }
    do {
        b = Math.floor(Math.random() * 10);
        c = Math.floor(Math.random() * 10);
        d = Math.floor(Math.random() * 10);
        e = Math.floor(Math.random() * 10);
    } while (arr[b][c][d][e] == -1 || arr[b][c][d][e] == 0);
    if(b == 0)
        result.textContent = '0' + arr[b][c][d][e] + ' 인가요?';
    else
        result.textContent = arr[b][c][d][e] + ' 인가요?';
    arr[b][c][d][e] = 0;
    count--;
}
