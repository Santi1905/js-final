// Cargar conceptos desde archivo JSON
fetch('conceptos.json')
  .then(response => response.json())
  .then(conceptos => {
    const selectConcepto = document.getElementById('concepto');
    conceptos.forEach(concepto => {
      const option = document.createElement('option');
      option.value = concepto.id;
      option.text = concepto.concepto;
      selectConcepto.appendChild(option);
    });
  });

// Inicial