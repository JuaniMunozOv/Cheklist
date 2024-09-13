function generateChecklistAutoTable() {
    const checklistBody = document.getElementById('checklist-body-Auto');

    const checklistItemsAuto = [
        { text: "1. *Você conheçe e compreendo o procedimento / APR desta tarefa?", color: 'black' },
        { text: "2. *Você está habilitado para executar esta tarefa?", color: 'black' },
        { text: "3. *Você está em boas condições físicas e emocionais para realizar o seu trabalho?", color: 'black' },
        { text: "4. *Você descansou bem?", color: 'black' },
        { text: "5. *Você fez uso de algum medicamento hoje?", color: 'black' },
        { text: "6. *Você esta sentindo cansaço/fadiga?", color: 'black' },
        { text: "7. *Você conheçe os riscos da sua atividade e os controles são adequados?", color: 'black' },
        { text: "8. *Você esta sentindo alguma dor ou desconforto físico (dor de cabeça,dores abdominais, machucado, fome) em alguma parte do corpo?", color: 'black' },
        { text: "9. *Existe alguma coisa em seu caminhão que esta lhe causando desconforto, durante a operação do mesmo?", color: 'black' },
        { text: "10. *Quantas horas você dormiu nas ultimas 24:00 horas ?(Coloque o numero de horas)", color: 'black' },
        { text: "11. *Quanto tempo você ficou acordado antes de vir para o trabalho? (Coloque o numero de horas)", color: 'black' },

    ];

    checklistItemsAuto.forEach((item, itemIndex) => {
        const row = document.createElement('tr');

        // Crear la celda del nombre del ítem
        const itemCell = document.createElement('td');
        itemCell.textContent = item.text;
        itemCell.style.color = item.color; // Aplicar color dinámicamente
        itemCell.style.fontSize = '12px'; // Ajustar el tamaño de fuente
        row.appendChild(itemCell);

        // Crear las celdas de los días del mes
        for (let day = 1; day <= 31; day++) {
            const dayCell = document.createElement('td');
            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.id = `day${day}-auto-item${itemIndex + 1}`;  // ID único
            dayCell.appendChild(checkbox);
            row.appendChild(dayCell);
        }

        checklistBody.appendChild(row);
    });
}

generateChecklistAutoTable();