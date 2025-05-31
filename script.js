function base64ToUtf8(base64) {
  try {
    const decodedString = atob(base64);
    return decodedString;
  } catch (e) {
    throw new Error("Invalid Base64");
  }
}

async function startConversion() {
  const base64 = document.getElementById('base64Input').value.trim();
  const statusEl = document.getElementById('status');
  const sheetEl = document.getElementById('musicSheet');

  statusEl.textContent = "Phase 1: Decoding base64...";
  sheetEl.innerHTML = "";

  try {
    // Simulate phase 1 loading
    await new Promise(resolve => setTimeout(resolve, 700));
    const abc = base64ToUtf8(base64);

    statusEl.textContent = "✅ Phase 1 complete: Base64 decoded.";

    // Simulate phase 2 loading
    await new Promise(resolve => setTimeout(resolve, 700));
    statusEl.textContent = "Phase 2: Rendering music sheet...";

    await new Promise(resolve => setTimeout(resolve, 700));
    abcjs.renderAbc("musicSheet", abc, { responsive: "resize" });

    statusEl.textContent = "✅ Phase 2 complete: Music sheet rendered.";
  } catch (e) {
    statusEl.textContent = "❌ Error: Invalid Base64 string or corrupted ABC notation.";
    sheetEl.innerHTML = "";
  }
}