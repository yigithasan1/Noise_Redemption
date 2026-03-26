
function toggleText(id) {
    const allBoxes = document.querySelectorAll('.text-box');
    allBoxes.forEach(box => {
      if (box.id === id) {
        box.style.display = box.style.display === 'block' ? 'none' : 'block';
      } else {
        box.style.display = 'none';
      }
    });
  }
