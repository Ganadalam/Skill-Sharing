// 게시글 작성 폼 토글
function togglePostForm() {
  const postForm = document.getElementById('post-form');
  postForm.classList.toggle('active');
}

// 게시글 작성
function submitPost() {
  const title = document.getElementById('post-title').value;
  const content = document.getElementById('post-content').value;
  const image = document.getElementById('post-image').files[0];

  if (!title || !content) {
    alert('제목과 내용을 모두 입력해주세요.');
    return;
  }

  const postList = document.getElementById('post-list');

  const postElement = document.createElement('div');
  postElement.classList.add('post');

  postElement.innerHTML = `
    <div class="post-header">
      <div>
        <h2>${title}</h2>
        <p class="author">작성자: 홍길동</p>
        <p class="time">${new Date().toLocaleDateString()}</p>
      </div>
      <div class="actions">
        <button class="like-btn" onclick="toggleLike(this)">👍 (0)</button>
        <button class="thumb-btn" onclick="toggleThumb(this)">👊 (0)</button>
        <button class="comment-btn" onclick="toggleComments(this)">💬</button>
      </div>
    </div>
    <p>${content}</p>
    ${image ? `<img src="${URL.createObjectURL(image)}" alt="이미지">` : ''}
    <div class="comments-section" style="display: none;">
      <textarea placeholder="댓글을 입력하세요..."></textarea>
      <button onclick="submitComment(this)">댓글 작성</button>
      <div class="comments-list"></div>
    </div>
  `;

  postList.prepend(postElement);

  // 폼 초기화 후 모달 닫기
  document.getElementById('post-title').value = '';
  document.getElementById('post-content').value = '';
  document.getElementById('post-image').value = '';
  togglePostForm();
}

// 좋아요 버튼 토글
function toggleLike(button) {
  const likeButton = button;
  const count = likeButton.innerText.match(/\d+/)[0];
  const newCount = likeButton.classList.contains('liked') ? parseInt(count) - 1 : parseInt(count) + 1;
  likeButton.innerText = `👍 (${newCount})`;
  likeButton.classList.toggle('liked');
}

// 주먹 버튼 토글
function toggleThumb(button) {
  const thumbButton = button;
  const count = thumbButton.innerText.match(/\d+/)[0];
  const newCount = thumbButton.classList.contains('thumbed') ? parseInt(count) - 1 : parseInt(count) + 1;
  thumbButton.innerText = `👊 (${newCount})`;
  thumbButton.classList.toggle('thumbed');
}

// 댓글 섹션 토글
function toggleComments(button) {
  const postElement = button.closest('.post');
  const commentsSection = postElement.querySelector('.comments-section');
  commentsSection.style.display = commentsSection.style.display === 'none' ? 'block' : 'none';
}

// 댓글 작성 후 바로 댓글 추가
function submitComment(button) {
  const commentText = button.previousElementSibling.value;
  if (!commentText.trim()) {
    alert('댓글을 입력해주세요.');
    return;
  }

  const commentsList = button.closest('.comments-section').querySelector('.comments-list');
  const newComment = document.createElement('div');
  newComment.classList.add('comment');
  newComment.textContent = commentText;

  // 댓글을 바로 추가
  commentsList.appendChild(newComment);

  // 댓글 입력창 비우기
  button.previousElementSibling.value = '';
}
// 댓글 섹션 토글
function toggleComments(button) {
  const postElement = button.closest('.post');
  const commentsSection = postElement.querySelector('.comments-section');
  
  // 댓글 섹션이 표시되면 댓글을 보여주고, 숨기면 숨기도록
  if (commentsSection.style.display === 'none' || commentsSection.style.display === '') {
    commentsSection.style.display = 'block'; // 댓글 섹션을 보여줌
  } else {
    commentsSection.style.display = 'none'; // 댓글 섹션을 숨김
  }
}
