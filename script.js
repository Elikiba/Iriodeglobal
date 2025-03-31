
      // Get the current year
      const currentYear = new Date().getFullYear();
      // Insert the year into the span with ID "currentYear"
      document.getElementById("currentYear").textContent = currentYear;
    </script>
    <script
      src="https://kit.fontawesome.com/16e38f0664.js"
      crossorigin="anonymous"
      defer
    ></script>

    <button id="scrollToTopBtn" title="Go to top" aria-label="Scroll to top">
      ↑
    </button>

    <script defer>
      const hamburger = document.querySelector(".hamburger");
      const navMenu = document.querySelector(".nav-menu");

      hamburger.addEventListener("click", () => {
        navMenu.classList.toggle("active");
        hamburger.classList.toggle("active");
      });

      document
        .getElementById("customerForm")
        .addEventListener("submit", function (event) {
          event.preventDefault();
          document.getElementById("successMessage").style.display = "block";
          this.reset();
        });

      window.onscroll = function () {
        const scrollBtn = document.getElementById("scrollToTopBtn");
        scrollBtn.style.display =
          document.body.scrollTop > 100 ||
          document.documentElement.scrollTop > 100
            ? "block"
            : "none";
      };

// Using FormSubmit.co
<form action="https://formsubmit.co/ovenserisosa@gmail.com" method="POST">
  <input type="hidden" name="_subject" value="New Contact!">
  <input type="text" name="name" required>
  <input type="email" name="email" required>
  <button type="submit">Send</button>
</form>

      document
        .getElementById("scrollToTopBtn")
        .addEventListener("click", () => {
          window.scrollTo({ top: 0, behavior: "smooth" });
        });
