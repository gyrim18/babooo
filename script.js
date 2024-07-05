const friendNameInput = document.getElementById('friendName');
const measureButton = document.getElementById('measureButton');
const resultElement = document.getElementById('result');
const friendNameText = document.getElementById('friendNameText');
const foolishnessLevelText = document.getElementById('foolishnessLevel');

measureButton.addEventListener('click', () => {
    const friendName = friendNameInput.value.trim();
    if (!friendName) {
        alert('친구 이름을 입력하세요!');
        return;
    }

    const foolishnessLevel = Math.floor(Math.random() * 101); // 0~100 사이의 랜덤 숫자 생성

    friendNameText.textContent = friendName;
    foolishnessLevelText.textContent = foolishnessLevel;

    // 결과 표시
    resultElement.classList.remove('hidden');
});
