// ✅ Auto-update footer year
document.getElementById("year").textContent = new Date().getFullYear();

// ✅ SheetDB API endpoint
const scriptURL = "https://sheetdb.io/api/v1/fsiwn28crysb6"; // replace with your SheetDB API link

// ✅ Handle contact form submit
document.getElementById("contact-form").addEventListener("submit", (e) => {
  e.preventDefault();

  let formData = {
  data: [
    {
      "Full Name": e.target.name.value,
      "Email Address": e.target.email.value,
      "Phone Number": e.target.phone.value,   // ✅ Added line
      "Subject": e.target.subject.value,
      "Message": e.target.message.value,
      "Timestamp": new Date().toLocaleString()
    }
  ]
};


  fetch(scriptURL, {
    method: "POST",
    body: JSON.stringify(formData),
    headers: { "Content-Type": "application/json" }
  })
    .then((res) => res.json())
    .then(() => {
      document.getElementById("status").innerText = "✅ Message sent successfully!";
      e.target.reset();
    })
    .catch(() => {
      document.getElementById("status").innerText = "❌ Error sending message.";
    });
});
