// Items del checklist para SONDA
const checklistItemsSonda = [
    { text: "1.1*.Cilindros e mangueiras hidráulicas das patolas (vazamento)", color: 'red' },
    { text: "1.2*.Cilindros e mangueiras hidráulicas de elevação da torre (vazamento)", color: 'red' },
    { text: "1.3.* Mangueiras e conexões hidraulicas (vazamento)", color: 'red' },
    { text: "1.4.*Painel de temperatura e pressão da sonda", color: 'red' },
    { text: "1.5. *Válvula da mangueira de ar comprimido limpeza do calice", color: 'red' },
    { text: "1.6. Caixa de Ferramentas", color: 'red' },
    { text: "1.7.*Mangueira de ar comprimido de limpeza do cálice", color: 'red' },
    { text: "1.8. Ausência de ruídos anormais", color: 'red' },
    { text: "1.9. Ausência de vazamentos", color: 'red' },
    { text: "1.10. Ausência de ruídos anormais", color: 'red' },
    { text: "1.11. Ausência de vazamentos", color: 'red' },
    { text: "1.12.* Condições do cabo de aço do sling e do torpedo.Comentários: O número de clipes 3, os clipes estão colocados de forma que os parafusos permanecem voltados para o lado oposto ao da ponta? Os clipes estão apertados corretamente, sem sinais de afrouxamento? O cabo e / ou laço possui a fita de identificação com a cor do mês?", color: 'red' },
    { text: "2.1.* Rolamentos e polias da torre da sonda", color: 'red' },
    { text: "2.2.* Cabeçote rotativo da sonda", color: 'red' },
    { text: "2.3.* Mordente superior e inferior da morsa", color: 'red' },
    { text: "2.4.* Pino lateral (Direito/esquerdo) de travamento da torre perfuratriz", color: 'red' },
    { text: "2.5.* Roldanas, rolamento e graxetas", color: 'red' },
    { text: "2.6. Chaves auxiliares de desenrroscar hastes.", color: 'red' },
    { text: "2.7.* Painel de operação da torre da sonda", color: 'red' },
    { text: "2.8.* Verificação visual dos cabos de aço (deformação, gaiola de passarinho ou alma danificada)", color: 'red' },
    { text: "2.9.* Agulha de acoplamento das hastes", color: 'red' },
    { text: "2.10.* Hastes, brocas e barrilete sem trincadas", color: 'red' },
    { text: "2.11. Broca Helicoidal, encaixes do rosqueamento sem trincas", color: 'red' },
    { text: "2.12. Barrilete e mini-haste sem fissuras e trincas", color: 'red' },
    { text: "2.13. Dentes de vídea da coroa danificado", color: 'red' },
    { text: "2.14. Verificar trincas e empenos na mola", color: 'red' },
    { text: "2.15. Mordente inferior da mesa de operação da torre.", color: 'red' },
    { text: "2.16 .*Cabo de aços e sistema de sling", color: 'red' },
    { text: "3.1.* Nivel de óleo no reservatório hidráulico", color: 'red' },
    { text: "3.2.* Nível visual de água do radiador", color: 'red' },
    { text: "3.3.* Verificar nivel de óleo do motor", color: 'red' },
    { text: "3.4.* Avarias no painel de operação da sonda", color: 'red' },
    { text: "3.5.* Bornes da bateria, cabos e conexões", color: 'red' },
    { text: "3.6.* Cabo de aceleração", color: 'red' },
    { text: "3.7.* Sem vazamento de óleo", color: 'red' },
    { text: "3.8.* Bomba hidráulica sem vazamento", color: 'red' },
    { text: "3.9.* Mangueira de ar comprimido para limpeza do cálice", color: 'red' },
    { text: "4.1.* Proteção de Partes Girantes", color: 'red' },
    { text: "4.2.* Isolamento térmico do escapamento do motor da sonda", color: 'red' },
    { text: "4.3.* Prumo de nivelamento / Nível bolha danificado", color: 'red' },
    { text: "4.4.* Botoeira de emergência para o auxiliar", color: 'red' },
    { text: "4.5.* Botoeira de emergência no painel operacional", color: 'red' },
    { text: "4.6.* Detector de ráios e bateria reserva", color: 'red' },
    { text: "4.7.* Pranchas de madeira com ponto de pega (alça) para patolamento do equipamento", color: 'red' },
    { text: "4.8.* Proteção contra chicoteamento instalado nas conexões das mangeiras de ar comprimido", color: 'red' },
    { text: "4.9* Bacia de contenção, manta absovernte (Serragem) Lona", color: 'red' },
    { text: "4.10* Extintor de incêndio em condição de uso", color: 'red' },
    { text: "4.11. *Alarne Sonoro de Deslocamento", color: 'red' },
    { text: "4.12. * Pino de travamento da sonda perfuratriz", color: 'red' },
    { text: "4.13. *Detector de raios", color: 'red' },
    { text: "5.1.* Acessos para os locais de furo e entre furos, deslocamento seguro", color: 'red' },
    { text: "5.2.* Distancia de 50 metros de árvores e bordas da mata", color: 'red' },
    { text: "5.3.* Distancia de 50 metros dos equipamentos de operação de mina", color: 'red' },
    { text: "5.4.* Sinalização nos acessos “ÁREA DE SONDAGEM”", color: 'red' },
    { text: "5.5.* Nivelamento do ponto de sondagem", color: 'red' },
    { text: "5.6.*A área está sinalizada com a placa “Área de sondagem”?", color: 'red' },
    { text: "5.7.* A praça de sondagem está regularizada, sem piso escorregadio ou atoleiro,solo adequado para o patolamento?", color: 'red' },
    { text: "6.1.* Controle de manutenção do equipamento", color: 'red' },
    { text: "6.2.* Nível de óleo do motor", color: 'red' },
    { text: "6.3.* Nível de oleo hidraulico", color: 'red' },
    { text: "7. Kit de emergência ambiental", color: 'red' },
    { text: "7.1.* Bacia de contenção, manta absovente ( Serragem) lona", color: 'red' }
];

// Títulos de las secciones
const sectionTitlesSonda = {
    '1': '1. BÁSICO',
    '2': '2. TORRE DA SONDA PERFURATRIZ',
    '3': '3. MOTOR DA SONDA',
    '4': '4. DISPOSITIVO DE PROTEÇÃO ATIVA',
    '5': '5. AMBIENTE DE TRABALHO DA SONDA',
    '6': '6. REQUISITO DE MANUTENÇÃO',
    '7': '7. Kit de emergência ambiental'
};

// Función para generar la tabla de checklist con inputs
function generateChecklistTableSonda() {
    const checklistBody = document.getElementById('checklist-body-Sonda');
    let currentSection = '';

    checklistItemsSonda.forEach((item, itemIndex) => {
        const sectionNumber = item.text.split('.')[0]; // Obtiene el número de sección

        // Si es una nueva sección, agregar un título de sección
        if (currentSection !== sectionNumber) {
            currentSection = sectionNumber;
            const titleRow = document.createElement('tr');
            const titleCell = document.createElement('td');
            titleCell.colSpan = 34; // Abarca todas las columnas
            titleCell.textContent = sectionTitlesSonda[sectionNumber]; // Mostrar el título de la sección
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
function generateConductorRowSonda() {
    const checklistBody = document.getElementById('checklist-body-Sonda');
    const row = document.createElement('tr');

    const conductorChapaCell = document.createElement('td');
    conductorChapaCell.innerHTML = `
        <label>CONDUTOR:</label>
        <select id="conductorSonda" placeholder="CONDUTOR">
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
        <input type="text" id="chapaSonda" placeholder="Chapa" />
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
    generateChecklistTableSonda();
    generateConductorRowSonda();
});

// Llamar a la función generatePDF cuando sea necesario
document.getElementById('exportButton').addEventListener('click', function () {
    generatePDF('checklist-table-Sonda');
});