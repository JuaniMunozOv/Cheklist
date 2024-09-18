// Items del checklist para COMPRESSOR
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

// Títulos de las secciones
const sectionTitlesCompressor = {
    '1': '1. BÁSICO',
    '2': '2. DISPOSITO DE ALARME/AVISO E SINALIZAÇÃO',
    '3': '3. DISPOSITIVO DE PROTEÇÃO ATIVA',
    '4': '4. REQUISITO DE MANUTENÇÃO (verificar visualmente ausência de quebras, folgas, trincas e vazamentos)'
};

// Función para generar la tabla de checklist con inputs
function generateChecklistTableCompressor() {
    const checklistBody = document.getElementById('checklist-body-Compressor');
    let currentSection = '';

    checklistItemsCompressor.forEach((item, itemIndex) => {
        const sectionNumber = item.text.split('.')[0]; // Obtiene el número de sección

        // Si es una nueva sección, agregar un título de sección
        if (currentSection !== sectionNumber) {
            currentSection = sectionNumber;
            const titleRow = document.createElement('tr');
            const titleCell = document.createElement('td');
            titleCell.colSpan = 34; // Abarca todas las columnas
            titleCell.textContent = sectionTitlesCompressor[sectionNumber]; // Mostrar el título de la sección
            titleCell.style.fontWeight = 'bold'; // Hacerlo más prominente
            titleCell.style.backgroundColor = '#f8f9fa'; // Fondo gris claro
            titleCell.style.borderTop = '2px solid black'; // Borde negro más fuerte en la parte superior
            titleCell.style.borderBottom = '2px solid black'; // Borde negro más fuerte en la parte inferior
            titleRow.appendChild(titleCell);
            checklistBody.appendChild(titleRow);
        }

        const row = document.createElement('tr');
        const itemCell = document.createElement('td');
        itemCell.textContent = item.text;
        itemCell.style.color = item.color;
        itemCell.style.position = "sticky";
        itemCell.style.left = "0";
        itemCell.style.backgroundColor = "#fff";
        row.appendChild(itemCell);

        for (let day = 1; day <= 31; day++) {
            const dayCell = document.createElement('td');
            const input = document.createElement('input');
            input.type = 'checkbox';
            dayCell.appendChild(input);
            row.appendChild(dayCell);
        }

        checklistBody.appendChild(row);
    });
}

// Función para generar la fila de CONDUCTOR y CHAPA
function generateConductorRowCompressor() {
    const checklistBody = document.getElementById('checklist-body-Compressor');
    const row = document.createElement('tr');

    const conductorChapaCell = document.createElement('td');
    conductorChapaCell.innerHTML = `
        <label>CONDUTOR:</label>
        <select id="conductorCompressor" placeholder="CONDUTOR">
            <option value=""></option>
                <option value="Ildoson Almeida">Ildoson Almeida</option>
                <option value="Ivanildo Santarém">Ivanildo Santarém</option>
                <option value="Lecindio Soares">Lecindio Soares</option>
                <option value="Wilson Silva">Wilson Silva</option>
                <option value="Auricélio Santana">Auricélio Santana</option>
                <option value="Antonio Carlos Souza">Antonio Carlos Souza</option>
                <option value="Diego Pinheiro">Diego Pinheiro</option>
                <option value="Edenilson Alves">Edenilson Alves</option>
                <option value="Erick Lima">Erick Lima</option>
                <option value="Ericson Souza">Ericson Souza</option>
                <option value="Jean Claudio Qaueiroz">Jean Claudio Qaueiroz</option>
                <option value="Rodolfo">Rodolfo</option>
        </select>
        <label>CHAPA (Nº de Cracha):</label>
        <input type="text" id="chapaCompressor" placeholder="Chapa" />
    `;
    row.appendChild(conductorChapaCell);

    // Añade las 31 celdas de entrada para los días
    for (let i = 1; i < 32; i++) {
        const cell = document.createElement('td');
        const input = document.createElement('input');
        input.type = 'text';
        input.id = `horimetrosInput${i + 1}`;
        input.style = 'width: 15px; height: 70px; writing-mode: vertical-rl; text-orientation: mixed; margin-top: 10px;';
        cell.appendChild(input);
        row.appendChild(cell);
    }

    checklistBody.appendChild(row);
}

// Llamar a las funciones al cargar el documento
document.addEventListener("DOMContentLoaded", function () {
    generateChecklistTableCompressor();
    generateConductorRowCompressor();
});

// Llamar a la función generatePDF cuando sea necesario
document.getElementById('exportButton').addEventListener('click', function () {
    generatePDF('checklist-table-Compressor');
});