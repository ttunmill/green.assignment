var defaultSnack = ["허니버터", "칸쵸", "프링글스"];
    var defaultMoney = [1300, 1500, 3000];


    //돈 넣었는지 안넣었는지 체크
    function moneyCheck(money) {
        if (money == 0) { // 돈을 넣지 않았을때
            alert("돈을 넣으세요.");
            return false;
        } else {
            return true;
        }
    }

    // 어떤 과자를 뽑을건지
    function selectSnack() {
        var snack = prompt("어떤 과자를 뽑으실 건가요?(허니버터, 칸쵸, 프링글스)", "");
        return snack;
    }

    // 해당과자 존재여부
    function noSnackCheck(noSnack) {
        if (noSnack) {
            alert("해당 과자가 없습니다.");
            location.reload(); //새로고침
        }
    }

    // 최종 출력
    function giveSnack(snack, change) {
        document.write(snack + "나왔습니다! 거스름돈:" + change + "원 입니다." );
    }

    // 거스름돈 얻기
    function getChange(snack, money) {
        var noSnack = true;
        var change = 0; //거스름돈

        for(i in defaultSnack) {
            // 돈을 넣으면 과자 이름 판단 후 거스름돈 계산
            if (snack == defaultSnack[i]) {
                change = money - defaultMoney[i];
                noSnack = false;
            } 
        }

        noSnackCheck(noSnack);

        // 돈이 모자랄 경우 판단
        if (change < 0) {
            alert("돈이 모자랍니다ㅠㅠ");
            location.reload(); //새로고침
        } else {
            return change;
        }
    }



    var getMoney = prompt("돈은 얼마를 넣으실 건가요?", 0);
    // var getMoney = 3000;

    if(moneyCheck(getMoney)) {
        var getSnack = selectSnack();
        var getChange = getChange(getSnack, getMoney);
        giveSnack(getSnack, getChange); 
    } else {
        location.reload();
    }