const flagBlue = document.querySelector(".flag-blue");
const flagWhite = document.querySelector(".flag-white");

// // 청기 올린 시간을 기록할 변수
// let blueFlagTime = 0;

// 청기와 백기의 타이머를 각각 관리
let blueFlagTimeout = null;
let whiteFlagTimeout = null;

// function reset(){
//   document.querySelector(".up").classList.remove('up');
// }

//  // 청기가 올라간 상태일 때
//  if (flagBlue.classList.contains('up')) {
//     const timeSinceBlueFlag = currentTime - blueFlagTime;
    
//     // 청기가 올라간 지 500밀리초가 안 지났다면 500밀리초가 될 때까지 기다림
//     if (timeSinceBlueFlag < 500) {
//       setTimeout(reset, 500 - timeSinceBlueFlag);
//       return;
//     }
//   }

function resetBlueFlag() {
    flagBlue.classList.remove('up');
  }
  
  function resetWhiteFlag() {
    flagWhite.classList.remove('up');
  }
  
  function flagUp(event) {
    if (event.button === 0) {
      // 청기를 올림
      flagBlue.classList.add('up');
      
      // 기존 타이머를 취소하고 새 타이머 설정
      if (blueFlagTimeout) clearTimeout(blueFlagTimeout);
      blueFlagTimeout = setTimeout(resetBlueFlag, 500);
      
    } else if (event.button === 2) {
      // 백기를 올림
      flagWhite.classList.add('up');
  
      // 기존 타이머를 취소하고 새 타이머 설정
      if (whiteFlagTimeout) clearTimeout(whiteFlagTimeout);
      whiteFlagTimeout = setTimeout(resetWhiteFlag, 500);
    }
  }
  
  function flagDown(event) {
    if (event.button === 0) {
      // 청기를 내림
      flagBlue.classList.remove('up');
    } else if (event.button === 2) {
      // 백기를 내림
      flagWhite.classList.remove('up');
    }
  }

  function keyAction(event) {
    if (event.key === '1') {
      // 1번 키를 누르면 청기를 올림
      flagBlue.classList.add('up');
      if (blueFlagTimeout) clearTimeout(blueFlagTimeout);
      blueFlagTimeout = setTimeout(resetBlueFlag, 500);
    } else if (event.key === '2') {
      // 2번 키를 누르면 백기를 올림
      flagWhite.classList.add('up');
      if (whiteFlagTimeout) clearTimeout(whiteFlagTimeout);
      whiteFlagTimeout = setTimeout(resetWhiteFlag, 500);
    } else if (event.key === '3') {
      // 3번 키를 누르면 청기를 내렸다가 다시 올림
      flagBlue.classList.remove('up');
      setTimeout(() => {
        flagBlue.classList.add('up');
        if (blueFlagTimeout) clearTimeout(blueFlagTimeout);
        blueFlagTimeout = setTimeout(resetBlueFlag, 500);
      }, 500);
    } else if (event.key === '4') {
      // 4번 키를 누르면 백기를 내렸다가 다시 올림
      flagWhite.classList.remove('up');
      setTimeout(() => {
        flagWhite.classList.add('up');
        if (whiteFlagTimeout) clearTimeout(whiteFlagTimeout);
        whiteFlagTimeout = setTimeout(resetWhiteFlag, 500);
      }, 500);
    }
  }
// // flagUp 함수 수정
// function flagUp(event){
//     // 왼쪽 마우스 버튼 클릭
//     if(event.button === 0){
//       // 청기 올린 시간을 현재 시간으로 업데이트
//       blueFlagTime = Date.now();
//       flagBlue.classList.add('up');
//     } else if (event.button === 2){
//       // 우클릭 시
//       flagWhite.classList.add('up');
  
//       // 현재 시간이 청기를 올린 시간과의 차이를 계산
//       const timeSinceBlueFlag = Date.now() - blueFlagTime;
  
//       // 청기가 백기보다 먼저 내려가지 않도록 함
//       if (timeSinceBlueFlag < 500) {
//         setTimeout(() => {
//           if (flagBlue.classList.contains('up')) {
//             flagBlue.classList.remove('up');
//           }
//         }, 500 - timeSinceBlueFlag);
//       }
//     }
  
//     // 500 밀리초 뒤에 reset 함수를 실행
//     setTimeout(reset, 500);
//   }

// //1. flagUp 함수를 완성해 주세요
// function flagUp(event){
//   //왼쪽 마우스 버튼 클릭
//   if(event.button === 0){
//     flagBlue.classList.add('up');
//   }else if ( event.button === 2){
//     //우클릭 시
//     flagWhite.classList.add('up');
//   }

//   //2. 500 밀리초 뒤에 reset 함수를 실행
//   setTimeout(reset, 500);
// }

//3. 마우스 오른쪽 버튼 클릭시 나타나는 메뉴창을 막아주세요.
document.addEventListener('contextmenu', function(event){
  event.preventDefault();
});


document.addEventListener("mousedown", flagUp);
