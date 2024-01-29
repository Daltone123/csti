document.querySelectorAll('h1').forEach(h1 => { h1.innerHTML = h1.textContent.replace(/\S/g, "<span style='--i:$&'>$&</span>"); });

function redirectToGoogleForm() {
  // Redirect to the external Google Form URL
  window.location.href = 'https://docs.google.com/forms/d/e/1FAIpQLSf0JVnt3cuhSXNsX4UXIpRAy8Wnx-eZSpICQaLvz76qc9Hw8w/viewform?vc=0&c=0&w=1&flr=0';
}

document.addEventListener("DOMContentLoaded", function () {
    var showButtons = document.querySelectorAll('.js-btn-show');
    var closeButton = document.querySelectorAll('.card-reveal .close');

    showButtons.forEach(function (button) {
        button.addEventListener('click', function () {
            var revealId = button.getAttribute('data-rel');
            var revealElement = document.querySelector('.card-reveal[data-rel="' + revealId + '"]');

            if (revealElement) {
                revealElement.classList.add('revealed');

                setTimeout(function () {
                    revealElement.previousElementSibling.innerHTML = revealElement.innerHTML;
                    revealElement.classList.remove('revealed');
                }, 300);
            }
        });
    });

    closeButton.forEach(function (closeBtn) {
        closeBtn.addEventListener('click', function () {
            var revealElement = closeBtn.closest('.card-reveal');
            if (revealElement) {
                revealElement.classList.remove('revealed');
            }
        });
    });
});


// Add this script to your existing JavaScript file or script section
document.addEventListener("DOMContentLoaded", function () {
    var hackathonLink = document.getElementById('hackathon-link');
  
    hackathonLink.addEventListener('click', function () {
      // Redirect users to the Google Drive link when the link is clicked
      window.location.href = 'https://drive.google.com/file/d/1f51UGV8N5onTPx35JMhWduIRpLT7qck2/view?usp=sharing';
    });
  });
  