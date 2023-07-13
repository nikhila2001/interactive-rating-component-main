const circles = document.querySelectorAll('.circle');

circles.forEach(circle => {
  circle.addEventListener('click', () => {
    // Remove 'selected' class from all other circles
    circles.forEach(otherCircle => {
      if (otherCircle !== circle && otherCircle.classList.contains('selected')) {
        otherCircle.classList.remove('selected');
      }
    });

    // Toggle 'selected' class on the clicked circle
    circle.classList.toggle('selected');
  });
});


const submitBtn = document.querySelector('.submit-button')

submitBtn.addEventListener('click', () => {
    const rating = document.querySelector(".circle.selected")
    location.href = `design/thanku.html?rating=${rating.textContent}`
})