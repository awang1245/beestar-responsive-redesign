import "./style.css";

function toggleExpand() {
  const moreGrades = document.querySelector(".more-grades");
  moreGrades.classList.toggle("active");

  const toggleButton = document.querySelector(".toggle");
  toggleButton.classList.toggle(
    "clicked",
    moreGrades.classList.contains("active")
  );
}

document.getElementById("toggle").addEventListener("click", toggleExpand);
