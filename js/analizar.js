document.getElementById("analyzeButton").addEventListener("click", function() {
    document.getElementById("loadingAnimation").classList.remove("hidden");
    setTimeout(function() {
      // Simulación de proceso de análisis
      document.getElementById("loadingAnimation").classList.add("hidden");
      document.getElementById("resultsSection").classList.add("show");
      document.getElementById("filesCount").innerText = Math.floor(Math.random() * 100); // Resultados simulados
      document.getElementById("spaceFreed").innerText = Math.floor(Math.random() * 1000); // Resultados simulados
      document.getElementById("resultsContent").style.opacity = 1;
    }, 3000); // Tiempo de simulación en milisegundos (en este caso, 3 segundos)
  
    // Muestra la sección de resultados si estaba oculta
    document.getElementById("resultsSection").classList.remove("hidden");
  });
  