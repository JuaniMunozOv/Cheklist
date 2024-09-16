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
function generateChecklistTableCompressor() {
    const checklistBody = document.getElementById('checklist-body-Compressor');

    checklistItemsCompressor.forEach((item, itemIndex) => {
        const row = document.createElement('tr');

        // Crear la celda del ítem
        const itemCell = document.createElement('td');
        itemCell.className = 'item-column';
        itemCell.textContent = item.text;
        itemCell.style.color = item.color;
        row.appendChild(itemCell);

        // Crear las celdas para los días del mes (31 días)
        for (let day = 1; day <= 31; day++) {
            const dayCell = document.createElement('td');
            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            dayCell.appendChild(checkbox);
            row.appendChild(dayCell);
        }

        checklistBody.appendChild(row);
    });
}

function generateConductorRowCompressor() {
    const checklistBody = document.getElementById('dynamic-row-compressor');
    const row = document.createElement('tr');

    // Celda para "CONDUTOR" y "CHAPA"
    const conductorChapaCell = document.createElement('td');
    conductorChapaCell.className = 'item-column';
    conductorChapaCell.innerHTML = `
        <div>
            <label>CONDUTOR:</label>
            <select>
                <option value="Condutor"></option>
                <option value="Ildoson Almeida">Ildoson Almeida</option>
                <!-- más opciones... -->
            </select>
        </div>
        <div>
            <label>CHAPA (Nº de Cracha):</label>
            <input type="text" placeholder="Chapa" />
        </div>`;
    row.appendChild(conductorChapaCell);

    // Celda para "HORIMETRO"
    const horimetroCell = document.createElement('td');
    horimetroCell.className = 'day-column';
    horimetroCell.innerHTML = `
        <div style="display: flex; align-items: center; justify-content: center; height: 100%; flex-direction: row;">
            <div style="transform: rotate(-90deg); transform-origin: center; white-space: nowrap; font-size: 8px;">
                HORIMETRO
            </div>
            <input type="text" style="width: 10px; height: 50px; text-align: center;" />
        </div>`;
    row.appendChild(horimetroCell);

    // Crear celdas para los 31 días con inputs alineados
    for (let i = 0; i < 31; i++) {
        const dayCell = document.createElement('td');
        const input = document.createElement('input');
        input.type = 'text';
        input.style = 'width: 15px; height: 50px; writing-mode: vertical-rl; text-align: center;';
        dayCell.appendChild(input);
        row.appendChild(dayCell);
    }

    checklistBody.appendChild(row);
}

// Llamar a las funciones para generar la tabla y la fila de conductor
generateChecklistTableCompressor();
generateConductorRowCompressor();