const form = document.getElementById("contactForm");
  const status = document.getElementById("form-status");

  form.addEventListener("submit", async function (e) {
    e.preventDefault();
    const data = new FormData(form);
    const endpoint = "https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox"; 

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        status.innerHTML = "✅ Message sent successfully!";
        form.reset();
      } else {
        status.innerHTML = "❌ Something went wrong.";
      }
    } catch (error) {
      status.innerHTML = "⚠️ Network error. Please try again.";
    }
  });
