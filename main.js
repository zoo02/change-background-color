// 버튼 id를 html에서 받아오자
let clickButton = document.getElementById("changeColorBtn")
// 버튼에 클릭 이벤트를 주고 실행할 함수를 호출한다
clickButton.addEventListener("click", () => { updateColor() })


// 현재 색상 업데이트 함수
function updateColor() {
    const newColor = getRandomColor()
    // 변경될 색상을 적용할 body태그의 스타일을 지정해준다
    document.body.style.backgroundColor = newColor

    // textContent를 이용하여 div태그에 동적인 값을 넣어준다
    document.getElementById("currentColor").textContent = `현재 색상 : ${newColor}`
}
updateColor()

// Math.random()을 이용하여 rgb에 해당하는 랜덤한 숫자를 받아와 조합해준다
// 대충 8비트는 256가지의 색이라고 한다
function getRandomColor() {
    const r = Math.floor(Math.random() * 256)
    const g = Math.floor(Math.random() * 256)
    const b = Math.floor(Math.random() * 256)
    return `rgb(${r}, ${g}, ${b})`
}