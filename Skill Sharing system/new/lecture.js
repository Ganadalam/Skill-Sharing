document.getElementById("apply-button").addEventListener("click", () => {
  const applyButton = document.getElementById("apply-button");
  applyButton.disabled = true;
  applyButton.textContent = "신청 완료!";
  alert("수강 신청이 완료되었습니다!");
});

document.getElementById("submit-button").addEventListener("click", () => {
  const nickname = document.getElementById("nickname").value.trim();
  const review = document.getElementById("review-input").value.trim();
  const rating = document.getElementById("rating").value;

  if (!nickname || !review) return alert("닉네임과 리뷰를 모두 입력해주세요.");

  const reviewList = document.getElementById("review-list");
  const reviewItem = document.createElement("li");
  reviewItem.innerHTML = `
        <p>${"⭐".repeat(rating)}</p>
        <p>${nickname}: ${review}</p>
        <button onclick="this.parentElement.remove()">삭제</button>
    `;
  reviewList.appendChild(reviewItem);

  // 초기화
  document.getElementById("nickname").value = "";
  document.getElementById("review-input").value = "";
  document.getElementById("submit-button").disabled = true;
});

document.querySelectorAll("#nickname, #review-input").forEach((input) => {
  input.addEventListener("input", () => {
    const nickname = document.getElementById("nickname").value.trim();
    const review = document.getElementById("review-input").value.trim();
    document.getElementById("submit-button").disabled = !(nickname && review);
  });
});
