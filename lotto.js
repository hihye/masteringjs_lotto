/* 1. 로또 가격을 준비한다.
2. 로또를 산다. buylotto()
3. 1장 당 로또번호 6개씩 랜덤으로 생성한다 buylotto()
4. 당첨 번호를 입력한다.setLuckyNumber([])
5. 생성된 번호와 당첨 번호를 비교한다.
6. 일치 통계, 수익률을 낸다 */

function buylotto(price){
    var chance = Math.floor(price/1000); //생성할 수 있는 횟수
    var lotto = []; //로또는 6자리 
    var singlelotto = []; // 중복 숫자 제거 로또
    var resultlotto = []; // 최종 로또 숫자
    var setLuckyNumber = [1, 2, 3, 4, 5, 6]; // 당첨 로또 숫자
    var count = 0;  // 로또 6자리 카운트
    var number = 0; // 로또 랜덤 숫자 
    var luckyNum = 0; // 맞춘 숫자의 개수
    var checkNum = [];
    var Yield = 0; // 수익률

    //숫자 랜던으로 6자리 생성
    while(resultlotto.length < chance ) {
        while(count < 6){
            number = parseInt(Math.random()*45) + 1;
            lotto.push(number);
    
            // 중복 숫자 제거
            singlelotto = lotto.filter((item, idx, array) => {
            return array.indexOf(item) === idx;
            });

            //숫자 정렬
            singlelotto.sort((x, y) => x - y);
    
            // 중복 숫자 제거된 배열의 길이가 6자리 이하일 때 숫자 생성 계속
            if(singlelotto.length < 6) {
                count = singlelotto.length;
            } else { count = 6;}
        }
        // 6자리 생성된 숫자를 최종 resultlotto 배열에 삽입
        resultlotto.push(singlelotto);
        
        count = 0;
        lotto = [];
        singlelotto = [];
    }

    // chance 만큼 생성된 로또와 당첨 숫자 비교
    for (var i=0; i<resultlotto.length; i++){
        for(var j=0; j<resultlotto[i].length; j++){
            if(setLuckyNumber.includes(resultlotto[i][j])){
                luckyNum += 1;
            }
        }
        // 각 장당 당첨 숫자와 매칭된 숫자 개수를 checkNum 배열에 삽입
        checkNum.push(luckyNum);
        luckyNum = 0;
    }

    console.log("로또 " + chance +"개를 발행했습니다.");
    console.log(resultlotto);
    console.log("setLuckyNumber("+ setLuckyNumber +")");
    console.log("당첨 통계");
    console.log("------------")

    if(checkNum.includes(2)) {
        //매칭 숫자만 남기고 삭제, 남은 숫자개수로 일치하는 장수 뽑기
        var resultNum = checkNum.filter(item => item === 2);
        console.log("2개 일치 (0원)-" + resultNum.length + "장");
        Yield = 0;
    } else if(checkNum.includes(3)) {
        var resultNum = checkNum.filter(item => item === 3);
        console.log("3개 일치 (5000원)-" + resultNum.length + "장");
        Yield = 0;
    } else if(checkNum.includes(4)) {
        var resultNum = checkNum.filter(item => item === 4);
        console.log("4개 일치 (50000원)-" + resultNum.length + "장");
        Yield = 0;
    } else if(checkNum.includes(5)) {
        var resultNum = checkNum.filter(item => item === 5);
        console.log("5개 일치 (150000원)-" + resultNum.length + "장");
        Yield = 0;
    } else if(checkNum.includes(6)) {
        var resultNum = checkNum.filter(item => item === 6);
        console.log("6개 일치 (2000000000원)-" + resultNum.length + "장");
        Yield = (chance / resultNum.length) * 100;
    } 

    console.log("나의 수익률은 " + Yield + "% 입니다.");

}

buylotto(14000);



