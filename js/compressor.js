const checklistItemsCompressor = [
    { text: "1.1.* Filtro Separador de Agua", color: 'red' },
    { text: "1.2.* Sistema de Refrigeração do Motor", color: 'red' },
    { text: "1.3.* Vazamentos", color: 'red' },
    { text: "1.4. Freio Estacionario", color: 'black' },
    { text: "1.5. Pneus ( Desgaste / Calibragem)", color: 'black' },
    { text: "1.6.* Fixação dos Parafusos da Roda", color: 'red' },
    { text: "1.7.* Motor de Partida ( Funcionamento)", color: 'red' },
    { text: "1.8.* Alternador", color: 'red' },
    { text: "1.9.* Polia do Alternador", color: 'red' },
    { text: "1.10.* Correia", color: 'red' },
    { text: "1.11.* Ruidos Anormais", color: 'red' },
    { text: "1.12. Relogios Indicadores", color: 'black' },
    { text: "1.13.* Fusiveis", color: 'red' },
    { text: "1.14.* Bateria", color: 'red' },
    { text: "1.15.* Cabos/ Terminais de Bateria", color: 'red' },
    { text: "1.16.* Condicoes de Mangueiras", color: 'red' },
    { text: "1.17.* Trava de Segurança da Mangueira", color: 'red' },
    { text: "1.18.* Trava de Seguranca Engate Auxiliar", color: 'red' },
    { text: "1.19.* Valvula Corta Fluxo de Ar Comprimido", color: 'red' },
    { text: "1.20.* Cor de Inspeção do Més", color: 'red' },
    { text: "1.23.* Plano de Manutenção", color: 'red' },
    { text: "1.24.* Ausência de Vazamentos", color: 'red' },
    { text: "1.25.* Botoeira de Emergencia do Painel Operacional", color: 'red' },
    { text: "2.1.* Controle de manutenção do equipamento", color: 'red' },
    { text: "2.2.* Nível de óleo do motor", color: 'red' },
    { text: "2.3.* Nível de oleo hidraulico Garrafa", color: 'red' }
];

function generateChecklistCompressorTable() {
    const checklistBody = document.getElementById('checklist-body-Compressor');
    let currentSection = ''; // Variable para rastrear la sección actual

    checklistItemsCompressor.forEach((item, itemIndex) => {
        const sectionNumber = item.text.split('.')[0]; // Obtiene el número de sección

        const sectionTitles = {
            '1': '1. BÁSICO',
            '2': '2. REQUISITO DE MANUTENÇÃO'
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

// Llamar a la función para generar la tabla
generateChecklistCompressorTable();