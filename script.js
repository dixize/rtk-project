const slideData = {
    robotics: {
        title: "РОБОТИЗАЦИЯ ПРОИЗВОДСТВА",
        pre: ["Импортозамещение", "Дефицит кадров", "Субсидии до 50%"],
        effects: ["Рост выработки на 40%", "Снижение травматизма"],
        clients: ["СУЭК", "ЕВРАЗ"]
    },
    quality: {
        title: "КОНТРОЛЬ КАЧЕСТВА",
        pre: ["Развитие ИИ-алгоритмов", "Оцифровка процессов"],
        effects: ["Брак снижен на 35%", "Скорость контроля +50%"],
        clients: ["ГАЗ", "ШЕРЕМЕТЬЕВО"]
    },
    security: {
        title: "СРЕДСТВА ОХРАНЫ",
        pre: ["Требования ФЗ-256", "Антитеррор", "Снижение затрат на ЧОП"],
        effects: ["Реакция < 5 сек", "100% покрытие территории"],
        clients: ["РОСНЕФТЬ", "МВД РОССИИ"]
    }
};

function openSlide(id) {
    const data = slideData[id];
    if (!data) return;

    const modal = document.getElementById('modal');
    const content = document.getElementById('modal-content');

    // ФИКС СКРОЛЛА: сбрасываем в ноль при каждом открытии
    modal.scrollTo(0, 0);

    content.innerHTML = `
        <h1 class="animate__animated animate__fadeInLeft" style="color: var(--accent); font-size: 2.5rem;">${data.title}</h1>
        
        <p style="color: #888; text-transform: uppercase; font-size: 0.7rem; letter-spacing: 2px;">Задачи</p>
        ${data.pre.map(p => `<div class="effect-card animate__animated animate__fadeInUp">${p}</div>`).join('')}

        <p style="color: #888; text-transform: uppercase; font-size: 0.7rem; letter-spacing: 2px; margin-top: 30px;">Эффекты</p>
        <div class="effect-card animate__animated animate__fadeInUp" style="border-left: 4px solid var(--accent)">
            ${data.effects.map(e => `<div style="margin-bottom:8px;">• ${e}</div>`).join('')}
        </div>

        <div style="margin-top: 30px; display: flex; gap: 10px; flex-wrap: wrap;">
            ${data.clients.map(c => `<span style="background:#222; padding: 5px 12px; border-radius: 4px; font-size: 0.8rem;">${c}</span>`).join('')}
        </div>
    `;

    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
}

function closeSlide() {
    document.getElementById('modal').classList.add('hidden');
    document.body.style.overflow = 'auto';
}
