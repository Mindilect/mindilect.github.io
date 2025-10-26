const searchInput = document.getElementById('search');
const resultDiv = document.getElementById('result');

searchInput.addEventListener('input', () => {
  const query = searchInput.value.trim();
  if (query in agriDictionary) {
    resultDiv.innerHTML = `<strong>${query}</strong>: ${agriDictionary[query]}`;
  } else {
    resultDiv.innerHTML = query ? "शब्द सापडला नाही." : "";
  }
});
