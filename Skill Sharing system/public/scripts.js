function filterLectures() {
    const query = document.getElementById('search-bar').value.toLowerCase();
    const lectures = document.querySelectorAll('#lectures li');
    lectures.forEach(lecture => {
      lecture.style.display = lecture.innerText.toLowerCase().includes(query) ? 'block' : 'none';
    });
  }
  
  function applyLecture() {
    alert('수강 신청 완료!');
  }
  
  function submitReview() {
    const review = document.getElementById('review-input').value;
    const reviewList = document.getElementById('review-list');
    const newReview = document.createElement('li');
    newReview.innerText = `⭐⭐⭐⭐⭐ - ${review}`;
    reviewList.appendChild(newReview);
    document.getElementById('review-input').value = '';
  }
  