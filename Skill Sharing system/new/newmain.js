// Sample course data (this would usually come from an API or database)
const courses = [
  {
    title: '하모니카 연주-기초',
    date: '2024/01/08',
    price: '20,000원',
    image: '../images/harmonica.png',
    link: 'harmonica.html',
    category: '악기'
  },
  {
    title: 'ChatGPT 활용 단기 속성 교육',
    date: '2024/01/06',
    price: '25,000원',
    image: '../images/coding.png',
    link: 'chatgpt.html',
    category: '기술'
  },
  {
    title: '생존 수영',
    date: '2024/01/10',
    price: '30,000원',
    image: '../images/swim.png',
    link: 'swimming.html',
    category: '운동'
  }
];

// Function to render courses based on search term
function renderCourses(searchTerm = '') {
  const courseList = document.getElementById('cardsContainer');
  courseList.innerHTML = ''; // Clear previous results

  const filteredCourses = courses.filter(course => 
    course.title.includes(searchTerm) || 
    course.category.includes(searchTerm) || 
    course.date.includes(searchTerm)
  );

  if (filteredCourses.length === 0) {
    courseList.innerHTML = '<p>관련 강의가 없습니다.</p>';
    return;
  }

  filteredCourses.forEach(course => {
    const card = document.createElement('a');
    card.className = 'card';
    card.href = course.link;
    
    card.innerHTML = `
      <img src="${course.image}" alt="${course.title}">
      <h3>${course.title}</h3>
      <p>기간: ${course.date}</p>
      <p>가격: ${course.price}</p>
    `;
    
    courseList.appendChild(card);
  });
}

// Search button click event
document.getElementById('searchButton').addEventListener('click', () => {
  const searchTerm = document.getElementById('searchBar').value.trim();
  renderCourses(searchTerm);
});

// Optionally, you could add a "Enter" key event for the search as well:
document.getElementById('searchBar').addEventListener('keypress', (event) => {
  if (event.key === 'Enter') {
    const searchTerm = document.getElementById('searchBar').value.trim();
    renderCourses(searchTerm);
  }
});
