// 콜스택에서 에러찾기 테스트 
function wakeUp() {
  wash();
  console.log('일어나기');
}

function wash() {
  breakfast();
  console.log('세수하기');
}

function breakfast() {
  throw new Error('콜스택에서 에러찾기 테스트 ');
  console.log('아침식사하기');
}
wakeUp();