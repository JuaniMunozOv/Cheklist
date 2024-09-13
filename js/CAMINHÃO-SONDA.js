const checklistItems = [
    { text: "1.1. *Cinto de Segurança (3 pontos) em todos os bancos", color: 'red' },
    { text: "1.2. *Buzina", color: 'red' },
    { text: "1.3. *Extintor de Incêndio e suporte", color: 'red' },
    { text: "1.4. *Trava rodas", color: 'red' },
    { text: "1.5. *Espelho Lateral Esquerdo e Direito (retrovisor)", color: 'red' },
    { text: "1.6. *Pneus/Desgaste Anormal (TWI/A)", color: 'red' },
    { text: "1.7. *Estribo de Acesso", color: 'red' },
    { text: "1.8. *Para-choque sem avarias", color: 'black' },
    { text: "1.9. *Velocímetro", color: 'red' },
    { text: "1.10. *Cabine Climatizada (ar condicionado)", color: 'red' },
    { text: "1.11. *Parabrisas (fixação e ausência de trincas)", color: 'red' },
    { text: "1.12. *Limpador de Parabrisa/Esguicho", color: 'red' },
    { text: "1.13. *Tacógrafo", color: 'red' },
    { text: "1.14. *Banco regulável com encosto para cabeça", color: 'red' },
    { text: "1.15. *Freio de Estacionamento", color: 'red' },
    { text: "1.16. *Freio Motor", color: 'red' },
    { text: "1.17. *Freio de Serviço (teste prático - mov. equipamento)", color: 'red' },
    { text: "1.18. Limpeza / Organização da Cabine", color: 'black' },
    { text: "2.1. Luz Alta", color: 'black' },
    { text: "2.2. *Luz Baixa (farol)", color: 'red' },
    { text: "2.3. *Luz de Ré", color: 'red' },
    { text: "2.4. *Luzes de Mudança de Direção", color: 'red' },
    { text: "3. *Pisca Alerta/Luz intermitente", color: 'red' },
    { text: "2.6. *Luz Traseira", color: 'red' },
    { text: "2.7. *Luz de freio", color: 'red' },
    { text: "2.8. *Cones de sinalização de 75cm (Mínimo 3)", color: 'red' },
    { text: "2.9. *Selo de Autorização no Prazo de Validade", color: 'red' },
    { text: "2.10. *Faixas Refletivas na Lateral e Traseira", color: 'red' },
    { text: "2.11. *Alarme Sonoro de ré", color: 'red' },
    { text: "2.12. *Luz Rotativa (Giroflex/Piscoflex)", color: 'red' },
    { text: "2.13. Maçaneta/Trinco da porta", color: 'black' },
    { text: "2.14. *Rádio Fixo de Comunicação veicular", color: 'red' },
    { text: "2.15. *TAG de identificação do veículo visível", color: 'red' },
    { text: "3.1. *Sistema de Direção", color: 'red' },
    { text: "3.2. *2 Calços com Ponto de Pega", color: 'red' },
    { text: "3.3. *Dispositivo 'facão' entre as rodas traseiras", color: 'black' },
    { text: "4.1. *Controle de Manutenção do Equipamento", color: 'red' },
    { text: "4.2. Indicador de Pressão do óleo do Motor no Painel", color: 'black' },
    { text: "4.3. Indicador de Temperatura do Motor no Painel", color: 'black' },
    { text: "4.4. Indicador de Pressão de Freio no Painel", color: 'black' }
];

// Generar dinámicamente las filas de la tabla
function generateChecklistTable() {
    const checklistBody = document.getElementById('checklist-body');

    let currentSection = '';

    checklistItems.forEach((item, itemIndex) => {
        const sectionNumber = item.text.split('.')[0]; // Obtiene el número de sección

        const sectionTitles = {
            '1': '1. BÁSICO',
            '2': '2. DISPOSITO DE ALARME/AVISO E SINALIZAÇÃO',
            '3': '3. DISPOSITIVO DE PROTEÇÃO ATIVA',
            '4': '4. REQUISITO DE MANUTENÇÃO (verificar visualmente ausência de quebras, folgas, trincas e vazamentos)'
        };

        // Si es una nueva sección, agregar un título de sección
        if (currentSection !== sectionNumber) {
            currentSection = sectionNumber;
            const titleRow = document.createElement('tr');
            const titleCell = document.createElement('td');
            titleCell.colSpan = 32; // Abarca todas las columnas
            titleCell.textContent = ` ${sectionTitles[sectionNumber]}`; // Mostrar el título de la sección
            titleCell.style.fontWeight = 'bold'; // Hacerlo más prominente
            titleCell.style.backgroundColor = '#f8f9fa'; // Fondo gris claro
            titleCell.style.borderTop = '2px solid black'; // Borde negro más fuerte en la parte superior
            titleCell.style.borderBottom = '2px solid black'; // Borde negro más fuerte en la parte inferior
            titleRow.appendChild(titleCell);
            checklistBody.appendChild(titleRow);
        }

        const row = document.createElement('tr');

        // Crear la celda del nombre del ítem con clase para el ancho fijo y sticky
        const itemCell = document.createElement('td');
        itemCell.className = 'item-column';
        itemCell.textContent = item.text;
        itemCell.style.color = item.color; // Aplicar color dinámicamente
        itemCell.style.position = 'sticky'; // Hacer sticky
        itemCell.style.left = '0'; // Mantenerla alineada a la izquierda
        itemCell.style.backgroundColor = '#fff'; // Fondo blanco para que no se mezcle con el resto de la tabla
        row.appendChild(itemCell);

        // Crear las celdas de los días del mes
        for (let day = 1; day <= 31; day++) {
            const dayCell = document.createElement('td');
            dayCell.className = 'day-column'; // Usar clase CSS para el ancho fijo
            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.id = `day${day}-item${itemIndex + 1}`; // ID único
            dayCell.appendChild(checkbox);
            row.appendChild(dayCell);
        }

        checklistBody.appendChild(row);
    });
}

// Llamar a la función para generar la tabla al cargar la página
generateChecklistTable();