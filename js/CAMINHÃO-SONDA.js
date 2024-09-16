// Items del checklist para CAMINHÃO-SONDA
const checklistItemsCaminhao = [
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

// Títulos de las secciones
const sectionTitles = {
    '1': '1. BÁSICO',
    '2': '2. DISPOSITO DE ALARME/AVISO E SINALIZAÇÃO',
    '3': '3. DISPOSITIVO DE PROTEÇÃO ATIVA',
    '4': '4. REQUISITO DE MANUTENÇÃO (verificar visualmente ausência de quebras, folgas, trincas e vazamentos)'
};

// Función para generar los encabezados de los días (1-31)
function generateDayHeaders(tableId) {
    const table = document.getElementById(tableId);
    const thead = table.querySelector('thead');

    // Verificar si ya existe una fila de encabezado
    if (thead.querySelector('tr')) {
        return; // Si ya existe, no hacer nada
    }

    const row = document.createElement('tr');
    const thItem = document.createElement('th');
    thItem.style.width = "200px";
    thItem.textContent = "Item";
    row.appendChild(thItem);

    for (let day = 1; day <= 31; day++) {
        const th = document.createElement('th');
        th.textContent = `Día ${day}`;
        row.appendChild(th);
    }

    thead.appendChild(row);
}

// Función para generar la tabla de checklist con inputs
function generateChecklistTableCaminhao() {
    const checklistBody = document.getElementById('checklist-body-Caminhao');
    let currentSection = '';

    checklistItemsCaminhao.forEach((item, itemIndex) => {
        const sectionNumber = item.text.split('.')[0]; // Obtiene el número de sección

        // Si es una nueva sección, agregar un título de sección
        if (currentSection !== sectionNumber) {
            currentSection = sectionNumber;
            const titleRow = document.createElement('tr');
            const titleCell = document.createElement('td');
            titleCell.colSpan = 32; // Abarca todas las columnas
            titleCell.textContent = sectionTitles[sectionNumber]; // Mostrar el título de la sección
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
function generateConductorRowCaminhao() {
    const checklistBody = document.getElementById('checklist-body-Caminhao');
    const row = document.createElement('tr');

    const conductorChapaCell = document.createElement('td');
    conductorChapaCell.innerHTML = `
        <label>CONDUTOR:</label>
        <select id="conductorCaminhao" placeholder="CONDUTOR">
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
        <input type="text" id="chapaCaminhao" placeholder="Chapa" />
    `;
    row.appendChild(conductorChapaCell);

    const horimetroCell = document.createElement('td');
    horimetroCell.innerHTML = `
        <div style="transform: rotate(-90deg); white-space: nowrap; margin-right: 40px;margin-top:40px;">HORIMETRO</div>
        <input type="text" style="width: 15px; height:70px; writing-mode: vertical-rl;">
    `;
    row.appendChild(horimetroCell);

    // Añade las 31 celdas de entrada para los días
    for (let i = 0; i < 30; i++) {
        const cell = document.createElement('td');
        const input = document.createElement('input');
        input.type = 'text';
        input.style = 'width: 15px; height: 70px; writing-mode: vertical-rl;';
        cell.appendChild(input);
        row.appendChild(cell);
    }

    checklistBody.appendChild(row);
}

// Llamar a las funciones al cargar el documento
document.addEventListener("DOMContentLoaded", function () {
    generateDayHeaders('checklist-table-Caminhao');
    generateChecklistTableCaminhao();
    generateConductorRowCaminhao();
});