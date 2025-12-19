// frontend/script.js
// Local testing: backend is running on http://localhost:3000
// After deployment update backendBase to your deployed URL.
let backendBase = "http://localhost:3000";

document.getElementById("generateBtn").addEventListener("click", async () => {
  const subject = document.getElementById("subject").value;
  const topic = document.getElementById("topic").value.trim();
  const output = document.getElementById("output");

  if (!topic) { 
    alert("Enter a topic"); 
    return; 
  }

  output.textContent = "Generating... (may take a few seconds)";

  try {
    const res = await fetch(`${backendBase}/generate`, {
      method: "POST",
      headers: {"Content-Type":"application/json"},
      body: JSON.stringify({ subject, topic })
    });

    const data = await res.json();
    console.log("backend response:", data);

    // Try to extract text safely
    const text =
      data?.candidates?.[0]?.content?.parts?.[0]?.text ||
      data?.candidates?.[0]?.content?.text ||
      JSON.stringify(data, null, 2);

    output.textContent = text;
  } catch (err) {
    console.error(err);
    output.textContent = "Error: " + (err.message || err);
  }
});