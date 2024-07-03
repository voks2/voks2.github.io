//

function createLines(container, numLines) {
    const containerHeight = container.scrollHeight;
    const containerWidth = container.clientWidth;

    for (let i = 0; i < numLines; i++) {
      const line = document.createElement('div');
      line.className = 'line';

      const height = Math.floor(Math.random() * 300) + 400; // Random height between 200 and 500px
      const top = Math.floor(Math.random() * (containerHeight - height)); // Random vertical position
      const left = Math.floor(Math.random() * containerWidth); // Random horizontal position

      line.style.height = `${height}px`;
      line.style.top = `${top}px`;
      line.style.left = `${left}px`;

      container.appendChild(line);
    }
  }

  document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('container');
    createLines(container, 30); // Create 20 random lines
  });






/*
//

*/