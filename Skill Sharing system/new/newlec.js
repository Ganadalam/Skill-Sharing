document.querySelectorAll('.tab-button').forEach(button => {
    button.addEventListener('click', () => {
      document.querySelectorAll('.tab-button').forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');
  
      const tab = button.getAttribute('data-tab');
      document.querySelectorAll('.tab-content').forEach(content => {
        content.style.display = content.id === tab ? 'block' : 'none';
      });
    });
  });
  
  // 기본적으로 강의소개만 표시
  document.getElementById('reviews').style.display = 'block';
  