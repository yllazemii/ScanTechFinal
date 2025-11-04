function updateClockStatus() {
  const now = new Date();
  const hour = now.getHours();
  const minutes = now.getMinutes().toString().padStart(2, "0");
  const seconds = now.getSeconds().toString().padStart(2, "0");

  const clock = document.getElementById("clock");
  const timeString = `${hour}:${minutes}:${seconds}`;

  // Determine if office is open (8 AM – 11 PM)
  const isOpen = hour >= 8 && hour < 23;

  // Display time and status with color
  clock.innerHTML = `
    <span style="font-weight:600;">${timeString}</span>
    <span style="color:${isOpen ? 'limegreen' : 'red'}; font-weight:bold; margin-left:8px;">
      ${isOpen ? 'Open' : 'Closed'}
    </span>
  `;
}

// Initial call and update every second
updateClockStatus();
setInterval(updateClockStatus, 1000);
