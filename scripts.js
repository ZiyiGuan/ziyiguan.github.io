// Function to handle toggle of abstract visibility
function toggleAbstract(id) {
    var abstract = document.getElementById(id);
    if (abstract.style.display === "none" || abstract.style.display === "") {
        abstract.style.display = "block";
    } else {
        abstract.style.display = "none";
    }
}

// JavaScript to automatically number papers in reverse order
document.addEventListener("DOMContentLoaded", function() {
    var papers = document.querySelectorAll('.paper-item');
    var number = papers.length;
    papers.forEach(function(paper) {
        var title = paper.querySelector('.paper-title');
        title.innerHTML = number + '. ' + title.innerHTML;
        number--;
    });
});
