document.querySelectorAll('.like-btn').forEach(button => {
    button.addEventListener('click', () => {
      alert('좋아요 눌렀습니다!');
    });
  });
  
  document.querySelector('.create-post').addEventListener('click', () => {
    window.location.href = '/create-post';
  });
  