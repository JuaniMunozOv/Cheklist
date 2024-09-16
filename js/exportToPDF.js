// exportToPDF.js

// Convertir solo los inputs de Horímetro a spans antes de exportar
function convertHorimetroInputsToSpans(formId) {
    const form = document.getElementById(formId);
    const horimetroInputs = form.querySelectorAll('input[id^="horimetrosInput"]'); // Selecciona solo los inputs de Horímetro

    horimetroInputs.forEach(input => {
        const span = document.createElement('span');
        span.textContent = input.value;
        span.style.display = 'block';
        span.style.transform = 'rotate(-90deg) translate(0, 20px)'; // Ajusta la rotación y posición
        span.style.transformOrigin = 'center bottom'; // Ajusta el origen de transformación
        span.style.whiteSpace = 'nowrap'; // Asegurarse de que no haya saltos de línea
        span.style.width = '100%'; // Asegurar que el ancho sea el adecuado
        span.style.textAlign = 'center';

        input.parentNode.replaceChild(span, input);
        input.originalElement = input; // Guardar el input original para restaurarlo después
        input.replacedElement = span;
    });
}

// Restaurar los inputs de Horímetro después de generar el PDF
function restoreHorimetroInputs(formId) {
    const form = document.getElementById(formId);
    const horimetroSpans = form.querySelectorAll('span');

    horimetroSpans.forEach(span => {
        if (span.originalElement) {
            span.parentNode.replaceChild(span.originalElement, span);
        }
    });
}

// Función para generar el PDF
function generatePDF(formId) {
    const { jsPDF } = window.jspdf;

    // Convertir solo los inputs de Horímetro a spans antes de generar el PDF
    convertHorimetroInputsToSpans(formId);

    // Selecciona el contenedor del formulario que deseas exportar
    const content = document.getElementById(formId);

    // Configura las dimensiones para una página A4 (210mm x 297mm)
    const a4Width = 210; // Ancho en mm
    const a4Height = 297; // Alto en mm

    // Usa html2canvas para capturar el contenido ajustado
    html2canvas(content, { scale: 1 }).then(canvas => {
        const pdf = new jsPDF('portrait', 'mm', 'a4'); // Configuración para A4 vertical

        // Obtener dimensiones de la imagen
        const imgWidth = a4Width;
        const imgHeight = (canvas.height * a4Width) / canvas.width;

        let remainingHeight = imgHeight;
        let position = 0;

        // Ajustar y agregar imagen al PDF
        while (remainingHeight > 0) {
            const canvasData = canvas.toDataURL('image/png', 1.0);  // Convertir el canvas a imagen

            pdf.addImage(canvasData, 'PNG', 0, position, imgWidth, imgHeight);
            remainingHeight -= a4Height; // Ajustar la altura restante

            if (remainingHeight > 0) {
                pdf.addPage();  // Agregar nueva página si queda contenido
                position -= a4Height;  // Ajustar la posición
            }
        }

        // Guardar el PDF
        const year = new Date().getFullYear();
        pdf.save(`Checklist_${formId}_${year}.pdf`);

        // Restaurar los inputs de Horímetro después de generar el PDF
        restoreHorimetroInputs(formId);
    });
}