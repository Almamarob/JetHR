// Scaglioni IRPEF 2025 (valori semplificati)
const scaglioniIRPEF = [
    { limit: 28000, rate: 0.23 },
    { limit: 50000, rate: 0.33 },
    { limit: Infinity, rate: 0.43 }
];

// Aliquote contributive e addizionali (valori standard)
const ALIQUOTA_INPS_DIPENDENTE = 0.0919; // 9.19%
const ADDIZIONALE_REGIONALE = 0.0173; // 1.73% (media)
const ADDIZIONALE_COMUNALE = 0.008; // 0.8% (media)

// Dati delle città per lo score
const datiCitta = {
    milano: {
        nome: 'Milano',
        costoVitaIndex: 100, // Base di riferimento
        affittoMedio: 1400, // Monolocale/bilocale
        stipendioMedioNetto: 2100,
        descrizione: 'Milano è la città più cara d\'Italia',
        dettagli: [
            { icon: '🏠', text: '<strong>Affitto medio:</strong> €1.200-1.600/mese per un bilocale in zona semicentrale' },
            { icon: '🚇', text: '<strong>Trasporti:</strong> Abbonamento ATM €39/mese. Città ben servita da metro e mezzi' },
            { icon: '🛒', text: '<strong>Spesa:</strong> 15-20% più alta della media nazionale' },
            { icon: '💼', text: '<strong>Opportunità:</strong> Hub finanziario e tech, ottime prospettive di carriera' }
        ]
    },
    roma: {
        nome: 'Roma',
        costoVitaIndex: 85,
        affittoMedio: 1100,
        stipendioMedioNetto: 1800,
        descrizione: 'Roma ha un costo della vita elevato ma inferiore a Milano',
        dettagli: [
            { icon: '🏠', text: '<strong>Affitto medio:</strong> €900-1.300/mese per un bilocale in zona semicentrale' },
            { icon: '🚇', text: '<strong>Trasporti:</strong> Abbonamento ATAC €35/mese. Metro limitata, traffico intenso' },
            { icon: '🛒', text: '<strong>Spesa:</strong> 10% più alta della media nazionale' },
            { icon: '💼', text: '<strong>Opportunità:</strong> Settore pubblico forte, turismo, alcune multinazionali' }
        ]
    },
    napoli: {
        nome: 'Napoli',
        costoVitaIndex: 60,
        affittoMedio: 650,
        stipendioMedioNetto: 1400,
        descrizione: 'Napoli offre un costo della vita molto più accessibile',
        dettagli: [
            { icon: '🏠', text: '<strong>Affitto medio:</strong> €500-800/mese per un bilocale in zona semicentrale' },
            { icon: '🚇', text: '<strong>Trasporti:</strong> Abbonamento ANM €35/mese. Metro in espansione' },
            { icon: '🛒', text: '<strong>Spesa:</strong> 20-25% più bassa della media nazionale' },
            { icon: '💼', text: '<strong>Opportunità:</strong> Mercato del lavoro più limitato, stipendi mediamente più bassi' }
        ]
    },
    torino: {
        nome: 'Torino',
        costoVitaIndex: 75,
        affittoMedio: 750,
        stipendioMedioNetto: 1700,
        descrizione: 'Torino ha un buon rapporto qualità-prezzo',
        dettagli: [
            { icon: '🏠', text: '<strong>Affitto medio:</strong> €600-900/mese per un bilocale in zona semicentrale' },
            { icon: '🚇', text: '<strong>Trasporti:</strong> Abbonamento GTT €38/mese. Metro in espansione' },
            { icon: '🛒', text: '<strong>Spesa:</strong> In linea con la media nazionale' },
            { icon: '💼', text: '<strong>Opportunità:</strong> Settore automotive, tech in crescita, buona qualità della vita' }
        ]
    },
    bologna: {
        nome: 'Bologna',
        costoVitaIndex: 80,
        affittoMedio: 900,
        stipendioMedioNetto: 1850,
        descrizione: 'Bologna è cara ma con ottima qualità della vita',
        dettagli: [
            { icon: '🏠', text: '<strong>Affitto medio:</strong> €750-1.100/mese per un bilocale (mercato molto competitivo)' },
            { icon: '🚇', text: '<strong>Trasporti:</strong> Abbonamento TPER €36/mese. Città ciclabile' },
            { icon: '🛒', text: '<strong>Spesa:</strong> 5-10% più alta della media nazionale' },
            { icon: '💼', text: '<strong>Opportunità:</strong> Packaging, food, tech. Città universitaria dinamica' }
        ]
    },
    firenze: {
        nome: 'Firenze',
        costoVitaIndex: 82,
        affittoMedio: 950,
        stipendioMedioNetto: 1750,
        descrizione: 'Firenze è cara, influenzata dal turismo',
        dettagli: [
            { icon: '🏠', text: '<strong>Affitto medio:</strong> €800-1.100/mese (mercato influenzato da affitti brevi)' },
            { icon: '🚇', text: '<strong>Trasporti:</strong> Abbonamento ATAF €35/mese. Tramvia in espansione' },
            { icon: '🛒', text: '<strong>Spesa:</strong> 10% più alta della media, soprattutto in centro' },
            { icon: '💼', text: '<strong>Opportunità:</strong> Moda, turismo, artigianato di lusso' }
        ]
    },
    palermo: {
        nome: 'Palermo',
        costoVitaIndex: 55,
        affittoMedio: 550,
        stipendioMedioNetto: 1300,
        descrizione: 'Palermo è una delle città più economiche',
        dettagli: [
            { icon: '🏠', text: '<strong>Affitto medio:</strong> €400-700/mese per un bilocale' },
            { icon: '🚇', text: '<strong>Trasporti:</strong> Abbonamento AMAT €30/mese. Traffico caotico' },
            { icon: '🛒', text: '<strong>Spesa:</strong> 25-30% più bassa della media nazionale' },
            { icon: '💼', text: '<strong>Opportunità:</strong> Mercato del lavoro più difficile, ma costo vita molto basso' }
        ]
    },
    bari: {
        nome: 'Bari',
        costoVitaIndex: 58,
        affittoMedio: 600,
        stipendioMedioNetto: 1400,
        descrizione: 'Bari offre un buon equilibrio costi-opportunità nel Sud',
        dettagli: [
            { icon: '🏠', text: '<strong>Affitto medio:</strong> €450-750/mese per un bilocale' },
            { icon: '🚇', text: '<strong>Trasporti:</strong> Abbonamento AMTAB €32/mese' },
            { icon: '🛒', text: '<strong>Spesa:</strong> 20% più bassa della media nazionale' },
            { icon: '💼', text: '<strong>Opportunità:</strong> Polo universitario, turismo in crescita, tech hub emergente' }
        ]
    },
    catania: {
        nome: 'Catania',
        costoVitaIndex: 52,
        affittoMedio: 500,
        stipendioMedioNetto: 1250,
        descrizione: 'Catania è molto economica',
        dettagli: [
            { icon: '🏠', text: '<strong>Affitto medio:</strong> €350-650/mese per un bilocale' },
            { icon: '🚇', text: '<strong>Trasporti:</strong> Abbonamento AMT €30/mese. Metro limitata' },
            { icon: '🛒', text: '<strong>Spesa:</strong> 25-30% più bassa della media nazionale' },
            { icon: '💼', text: '<strong>Opportunità:</strong> Polo tech Etna Valley, università, ma mercato lavoro limitato' }
        ]
    },
    verona: {
        nome: 'Verona',
        costoVitaIndex: 72,
        affittoMedio: 800,
        stipendioMedioNetto: 1750,
        descrizione: 'Verona ha un buon rapporto qualità-prezzo nel Nord',
        dettagli: [
            { icon: '🏠', text: '<strong>Affitto medio:</strong> €650-950/mese per un bilocale' },
            { icon: '🚇', text: '<strong>Trasporti:</strong> Abbonamento ATV €35/mese. Città a misura d\'uomo' },
            { icon: '🛒', text: '<strong>Spesa:</strong> In linea con la media nazionale' },
            { icon: '💼', text: '<strong>Opportunità:</strong> Logistica, vino, turismo, vicinanza a Milano e Venezia' }
        ]
    }
};

// Funzione per calcolare IRPEF a scaglioni
function calcolaIRPEF(imponibile) {
    let irpefTotale = 0;
    let imponibileResiduo = imponibile;
    let dettaglioScaglioni = [];
    let limiteInferiore = 0;

    for (let scaglione of scaglioniIRPEF) {
        if (imponibileResiduo <= 0) break;

        const limiteScaglione = scaglione.limit - limiteInferiore;
        const imponibileScaglione = Math.min(imponibileResiduo, limiteScaglione);
        const irpefScaglione = imponibileScaglione * scaglione.rate;

        irpefTotale += irpefScaglione;

        dettaglioScaglioni.push({
            limite: scaglione.limit,
            imponibile: imponibileScaglione,
            aliquota: scaglione.rate,
            imposta: irpefScaglione
        });

        imponibileResiduo -= imponibileScaglione;
        limiteInferiore = scaglione.limit;
    }

    return { irpefTotale, dettaglioScaglioni };
}

// Funzione per calcolare detrazioni lavoro dipendente (2025)
function calcolaDetrazioniLavoro(redditoComplessivo) {
    if (redditoComplessivo <= 15000) {
        return 1955;
    } else if (redditoComplessivo <= 28000) {
        return 1910 + (1955 - 1910) * (28000 - redditoComplessivo) / (28000 - 15000);
    } else if (redditoComplessivo <= 50000) {
        return 1910 * (50000 - redditoComplessivo) / (50000 - 28000);
    } else {
        return 0;
    }
}

// Funzione principale di calcolo
function calcolaNetto(ral, mensilita = 13) {
    // 1. Contributi INPS a carico dipendente
    const contributiINPS = ral * ALIQUOTA_INPS_DIPENDENTE;

    // 2. Imponibile IRPEF = RAL - Contributi INPS
    const imponibileIRPEF = ral - contributiINPS;

    // 3. Calcolo IRPEF lorda
    const { irpefTotale: irpefLorda, dettaglioScaglioni } = calcolaIRPEF(imponibileIRPEF);

    // 4. Detrazioni fiscali
    const detrazioniLavoro = calcolaDetrazioniLavoro(imponibileIRPEF);

    // 5. IRPEF netta
    const irpefNetta = Math.max(0, irpefLorda - detrazioniLavoro);

    // 6. Addizionali
    const addRegionale = imponibileIRPEF * ADDIZIONALE_REGIONALE;
    const addComunale = imponibileIRPEF * ADDIZIONALE_COMUNALE;

    // 7. Netto annuale
    const nettoAnnuale = ral - contributiINPS - irpefNetta - addRegionale - addComunale;

    // 8. Netto mensile (dividendo per il numero di mensilità selezionato)
    const nettoMensile = nettoAnnuale / mensilita;

    return {
        ral,
        contributiINPS,
        imponibileIRPEF,
        irpefLorda,
        dettaglioScaglioni,
        detrazioniLavoro,
        irpefNetta,
        addRegionale,
        addComunale,
        nettoAnnuale,
        nettoMensile,
        mensilita
    };
}

// Funzione per mostrare toast
function showToast(title, message, type = 'error') {
    const container = document.getElementById('toastContainer');

    const toast = document.createElement('div');
    toast.className = 'toast';

    const iconSvg = type === 'error'
        ? '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2"/><path d="M12 8V12M12 16H12.01" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>'
        : '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17L4 12" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>';

    toast.innerHTML = `
        <div class="toast-icon">${iconSvg}</div>
        <div class="toast-content">
            <div class="toast-title">${title}</div>
            <div class="toast-message">${message}</div>
        </div>
        <button class="toast-close">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
            </svg>
        </button>
    `;

    container.appendChild(toast);

    // Close button
    const closeBtn = toast.querySelector('.toast-close');
    closeBtn.addEventListener('click', () => removeToast(toast));

    // Auto remove after 4 seconds
    setTimeout(() => removeToast(toast), 4000);
}

function removeToast(toast) {
    if (!toast.classList.contains('toast-exit')) {
        toast.classList.add('toast-exit');
        setTimeout(() => toast.remove(), 300);
    }
}

// Funzione per calcolare lo score della città (bilanciato e realistico)
function calcolaScoreCitta(nettoMensile, citta) {
    const dati = datiCitta[citta];
    if (!dati) return null;

    // Calcolo del rapporto tra stipendio e costo della vita
    const rapportoAffitto = nettoMensile / dati.affittoMedio;
    const rapportoStipendioMedio = nettoMensile / dati.stipendioMedioNetto;

    // Percentuale dell'affitto sul netto (regola del 30%)
    const percentualeAffitto = (dati.affittoMedio / nettoMensile) * 100;

    // Score bilanciato:
    // - 45% basato sulla percentuale di affitto sul netto (ideale < 30%, accettabile < 35%)
    // - 40% rapporto con stipendio medio della città
    // - 15% fattore costo della vita generale

    // Score affitto: curva più graduale e realistica
    let scoreAffitto;
    if (percentualeAffitto <= 20) {
        scoreAffitto = 100;
    } else if (percentualeAffitto <= 25) {
        scoreAffitto = 95 - (percentualeAffitto - 20) * 2;
    } else if (percentualeAffitto <= 30) {
        scoreAffitto = 85 - (percentualeAffitto - 25) * 2;
    } else if (percentualeAffitto <= 35) {
        scoreAffitto = 75 - (percentualeAffitto - 30) * 2;
    } else if (percentualeAffitto <= 40) {
        scoreAffitto = 65 - (percentualeAffitto - 35) * 3;
    } else if (percentualeAffitto <= 50) {
        scoreAffitto = 50 - (percentualeAffitto - 40) * 2;
    } else if (percentualeAffitto <= 60) {
        scoreAffitto = 30 - (percentualeAffitto - 50) * 1.5;
    } else {
        scoreAffitto = Math.max(0, 15 - (percentualeAffitto - 60) * 0.5);
    }

    // Score stipendio: curva più equilibrata (essere nella media = 60-65 punti)
    let scoreStipendio;
    if (rapportoStipendioMedio >= 1.5) {
        scoreStipendio = 100;
    } else if (rapportoStipendioMedio >= 1.3) {
        scoreStipendio = 85 + (rapportoStipendioMedio - 1.3) * 75;
    } else if (rapportoStipendioMedio >= 1.1) {
        scoreStipendio = 70 + (rapportoStipendioMedio - 1.1) * 75;
    } else if (rapportoStipendioMedio >= 0.95) {
        scoreStipendio = 60 + (rapportoStipendioMedio - 0.95) * 66;
    } else if (rapportoStipendioMedio >= 0.85) {
        scoreStipendio = 45 + (rapportoStipendioMedio - 0.85) * 150;
    } else if (rapportoStipendioMedio >= 0.7) {
        scoreStipendio = 25 + (rapportoStipendioMedio - 0.7) * 133;
    } else {
        scoreStipendio = Math.max(0, rapportoStipendioMedio * 35.7);
    }

    // Score costo vita: penalizzazione più morbida
    let scoreCostoVita = Math.max(0, 100 - (dati.costoVitaIndex - 50) * 1.2);

    const scoreTotale = Math.round(
        scoreAffitto * 0.45 +
        scoreStipendio * 0.40 +
        scoreCostoVita * 0.15
    );

    // Verdetti bilanciati
    let verdict, verdictClass;
    if (scoreTotale >= 80) {
        verdict = 'Ottimo! Puoi vivere molto bene a ' + dati.nome;
        verdictClass = 'excellent';
    } else if (scoreTotale >= 65) {
        verdict = 'Buono per ' + dati.nome + ', vita confortevole';
        verdictClass = 'good';
    } else if (scoreTotale >= 50) {
        verdict = 'Adeguato a ' + dati.nome + ', ma attento alle spese';
        verdictClass = 'warning';
    } else if (scoreTotale >= 35) {
        verdict = 'Difficile a ' + dati.nome + ': budget stretto';
        verdictClass = 'low';
    } else {
        verdict = 'Critico: grandi difficoltà economiche a ' + dati.nome;
        verdictClass = 'low';
    }

    return {
        score: Math.min(100, Math.max(0, scoreTotale)),
        verdict,
        verdictClass,
        dati,
        analisi: {
            percentualeAffitto: Math.round(percentualeAffitto),
            differenzaMedia: Math.round(nettoMensile - dati.stipendioMedioNetto),
            rapportoAffitto: rapportoAffitto.toFixed(1),
            rapportoStipendioMedio: (rapportoStipendioMedio * 100).toFixed(0)
        }
    };
}

// Funzione per formattare i numeri in valuta
function formatCurrency(value) {
    // 1. Convertiamo in numero per sicurezza
    let num = Number(value);
    
    // 2. Gestiamo il segno negativo separatamente
    let isNegative = num < 0;
    
    // 3. Lavoriamo sul valore assoluto, fissando 2 decimali (es: "1234.50")
    let stringValue = Math.abs(num).toFixed(2);
    
    // 4. Separiamo parte intera e parte decimale
    let [integerPart, decimalPart] = stringValue.split('.');
    
    // 5. Aggiungiamo i punti (.) come separatore delle migliaia
    // La Regex cerca gruppi di 3 cifre che non siano all'inizio della stringa
    integerPart = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    
    // 6. Costruiamo la stringa finale con la virgola e il simbolo Euro
    let result = integerPart + "," + decimalPart + " €";
    
    // 7. Riaggiungiamo il meno se il numero era negativo
    return isNegative ? "-" + result : result;
}

// Funzione per formattare i numeri con separatore delle migliaia
function formatNumber(value) {
    return new Intl.NumberFormat('it-IT').format(value);
}

// Variabile globale per tenere traccia della card selezionata
let cardSelezionata = 'annuale'; // di default mostra i valori annuali

// Funzione per visualizzare i risultati
function mostraRisultati(risultati, citta) {
    const resultsSection = document.getElementById('results');

    // Summary cards
    document.getElementById('nettoAnnuale').textContent = formatCurrency(risultati.nettoAnnuale);
    document.getElementById('nettoMensile').textContent = formatCurrency(risultati.nettoMensile);

    // Mostra lo score della città
    mostraScoreCitta(risultati.nettoMensile, citta);

    // Aggiorna il dettaglio trattenute in base alla card selezionata
    aggiornaDettaglioTrattenute(risultati, cardSelezionata);

    // Scroll alla sezione risultati
    setTimeout(() => {
        resultsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 100);
}

// Variabile globale per memorizzare i dati dello score
let currentScoreData = null;

// Funzione per mostrare la CTA dello score della città
function mostraScoreCitta(nettoMensile, citta) {
    const ctaSection = document.getElementById('cityScoreCTA');
    const scoreResult = calcolaScoreCitta(nettoMensile, citta);

    if (!scoreResult) {
        ctaSection.style.display = 'none';
        return;
    }

    // Salva i dati per il popup
    currentScoreData = scoreResult;

    // Mostra la CTA
    ctaSection.style.display = 'block';
    document.getElementById('ctaCityName').textContent = scoreResult.dati.nome;
}

// Funzione per aprire il popup dello score
function apriPopupScore() {
    if (!currentScoreData) return;

    const overlay = document.getElementById('scorePopupOverlay');
    overlay.classList.add('active');

    // Aggiorna il nome della città nel popup
    document.getElementById('popupCityName').textContent = currentScoreData.dati.nome;

    // Anima lo score
    const scoreNumber = document.getElementById('scoreNumber');
    const scoreIndicator = document.getElementById('scoreIndicator');
    const scoreVerdict = document.getElementById('scoreVerdict');
    const scoreDetails = document.getElementById('scoreDetails');

    // Reset
    scoreNumber.textContent = '0';
    scoreIndicator.style.left = '0%';

    // Anima il numero con un piccolo delay per permettere l'apertura del popup
    setTimeout(() => {
        let currentScore = 0;
        const targetScore = currentScoreData.score;
        const duration = 1000;
        const startTime = performance.now();

        function animateScore(currentTime) {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);

            // Easing
            const easeOutCubic = 1 - Math.pow(1 - progress, 3);
            currentScore = Math.round(targetScore * easeOutCubic);

            scoreNumber.textContent = currentScore;
            scoreIndicator.style.left = (currentScore) + '%';

            if (progress < 1) {
                requestAnimationFrame(animateScore);
            }
        }
        requestAnimationFrame(animateScore);
    }, 200);

    // Verdict
    scoreVerdict.textContent = currentScoreData.verdict;
    scoreVerdict.className = 'score-verdict ' + currentScoreData.verdictClass;

    // Dettagli
    let detailsHTML = '';
    const analisi = currentScoreData.analisi;

    // Analisi percentuale affitto
    if (analisi.percentualeAffitto > 40) {
        detailsHTML += `<div class="score-detail-item"><span class="icon">🚨</span><span>L'affitto medio a ${currentScoreData.dati.nome} (€${currentScoreData.dati.affittoMedio}/mese) rappresenterebbe il <strong>${analisi.percentualeAffitto}%</strong> del tuo netto. Questo è troppo alto! Idealmente non dovrebbe superare il 30%.</span></div>`;
    } else if (analisi.percentualeAffitto > 35) {
        detailsHTML += `<div class="score-detail-item"><span class="icon">⚠️</span><span>L'affitto medio (€${currentScoreData.dati.affittoMedio}/mese) rappresenterebbe il <strong>${analisi.percentualeAffitto}%</strong> del tuo netto. È al limite: cerca di non superare il 35%.</span></div>`;
    } else if (analisi.percentualeAffitto > 30) {
        detailsHTML += `<div class="score-detail-item"><span class="icon">👍</span><span>L'affitto medio (€${currentScoreData.dati.affittoMedio}/mese) sarebbe il <strong>${analisi.percentualeAffitto}%</strong> del tuo netto. Accettabile, ma poco margine.</span></div>`;
    } else {
        detailsHTML += `<div class="score-detail-item"><span class="icon">✅</span><span>Bene! L'affitto medio (€${currentScoreData.dati.affittoMedio}/mese) sarebbe il <strong>${analisi.percentualeAffitto}%</strong> del tuo netto.</span></div>`;
    }

    // Confronto con media
    if (analisi.differenzaMedia > 300) {
        detailsHTML += `<div class="score-detail-item"><span class="icon">📈</span><span>Il tuo stipendio è <strong>€${formatNumber(analisi.differenzaMedia)} sopra</strong> la media netta di ${currentScoreData.dati.nome} (€${formatNumber(currentScoreData.dati.stipendioMedioNetto)}/mese). Buona posizione!</span></div>`;
    } else if (analisi.differenzaMedia >= 0) {
        detailsHTML += `<div class="score-detail-item"><span class="icon">➖</span><span>Il tuo stipendio è in linea con la media netta di ${currentScoreData.dati.nome} (€${formatNumber(currentScoreData.dati.stipendioMedioNetto)}/mese).</span></div>`;
    } else if (analisi.differenzaMedia > -300) {
        detailsHTML += `<div class="score-detail-item"><span class="icon">📉</span><span>Il tuo stipendio è <strong>€${formatNumber(Math.abs(analisi.differenzaMedia))} sotto</strong> la media netta di ${currentScoreData.dati.nome}. Dovrai fare attenzione alle spese.</span></div>`;
    } else {
        detailsHTML += `<div class="score-detail-item"><span class="icon">⚠️</span><span>Il tuo stipendio è <strong>€${formatNumber(Math.abs(analisi.differenzaMedia))} sotto</strong> la media netta di ${currentScoreData.dati.nome}. Potresti avere difficoltà significative.</span></div>`;
    }

    // Descrizione città
    detailsHTML += `<div class="score-detail-item"><span class="icon">🏙️</span><span>${currentScoreData.dati.descrizione}</span></div>`;

    // Dettagli della città
    currentScoreData.dati.dettagli.forEach(d => {
        detailsHTML += `<div class="score-detail-item"><span class="icon">${d.icon}</span><span>${d.text}</span></div>`;
    });

    scoreDetails.innerHTML = detailsHTML;

    // Blocca lo scroll del body
    document.body.style.overflow = 'hidden';
}

// Funzione per chiudere il popup dello score
function chiudiPopupScore() {
    const overlay = document.getElementById('scorePopupOverlay');
    overlay.classList.remove('active');
    document.body.style.overflow = '';
}

// Funzione per aggiornare il dettaglio trattenute in base alla selezione
function aggiornaDettaglioTrattenute(risultati, tipo) {
    const divisore = tipo === 'mensile' ? risultati.mensilita : 1;
    const suffisso = tipo === 'mensile' ? ' Mensile' : ' Annuale';

    // Breakdown details
    document.getElementById('ralDisplay').parentElement.querySelector('.breakdown-label').childNodes[0].textContent = 'RAL (Lordo' + suffisso + ') ';
    document.getElementById('ralDisplay').textContent = formatCurrency(risultati.ral / divisore);

    document.getElementById('contributiINPS').textContent = '- ' + formatCurrency(risultati.contributiINPS / divisore);
    document.getElementById('imponibileIRPEF').textContent = formatCurrency(risultati.imponibileIRPEF / divisore);

    // Aggiorna le formule con i valori reali
    document.getElementById('formulaINPS').textContent =
        `${formatCurrency(risultati.ral / divisore)} × 9,19% = ${formatCurrency(risultati.contributiINPS / divisore)}`;
    document.getElementById('formulaImponibile').textContent =
        `${formatCurrency(risultati.ral / divisore)} - ${formatCurrency(risultati.contributiINPS / divisore)} = ${formatCurrency(risultati.imponibileIRPEF / divisore)}`;

    // Dettaglio IRPEF per scaglioni
    const irpefBreakdown = document.getElementById('irpefBreakdown');
    irpefBreakdown.innerHTML = '';

    risultati.dettaglioScaglioni.forEach((scaglione) => {
        const div = document.createElement('div');
        div.className = 'breakdown-item sub-item';

        const limiteText = scaglione.limite === Infinity
            ? 'Oltre € 50.000'
            : `Fino a € ${scaglione.limite.toLocaleString('it-IT')}`;

        div.innerHTML = `
            <span class="breakdown-label">${limiteText} - ${(scaglione.aliquota * 100)}%</span>
            <span class="breakdown-value negative">- ${formatCurrency(scaglione.imposta / divisore)}</span>
        `;
        irpefBreakdown.appendChild(div);
    });

    document.getElementById('totaleIRPEF').textContent = '- ' + formatCurrency(risultati.irpefLorda / divisore);
    document.getElementById('detrazioniLavoro').textContent = '+ ' + formatCurrency(risultati.detrazioniLavoro / divisore);

    document.getElementById('formulaDetrazioni').textContent =
        `${formatCurrency(risultati.irpefLorda / divisore)} - ${formatCurrency(risultati.detrazioniLavoro / divisore)} = ${formatCurrency(risultati.irpefNetta / divisore)}`;

    document.getElementById('irpefNetta').textContent = '- ' + formatCurrency(risultati.irpefNetta / divisore);
    document.getElementById('addRegionale').textContent = '- ' + formatCurrency(risultati.addRegionale / divisore);
    document.getElementById('addComunale').textContent = '- ' + formatCurrency(risultati.addComunale / divisore);
    document.getElementById('finalNetto').textContent = formatCurrency(tipo === 'mensile' ? risultati.nettoMensile : risultati.nettoAnnuale);

    // Formula finale
    const nettoFinale = tipo === 'mensile' ? risultati.nettoMensile : risultati.nettoAnnuale;
    const totaleAddizionali = (risultati.addRegionale + risultati.addComunale) / divisore;
    document.getElementById('formulaFinale').textContent =
        `${formatCurrency(risultati.ral / divisore)} - ${formatCurrency(risultati.contributiINPS / divisore)} - ${formatCurrency(risultati.irpefNetta / divisore)} - ${formatCurrency(totaleAddizionali)} = ${formatCurrency(nettoFinale)}`;

    // Aggiorna il label del totale finale
    document.querySelector('.final-total .breakdown-label strong').textContent = tipo === 'mensile' ? 'NETTO MENSILE' : 'NETTO ANNUALE';
}

// Funzione per resettare il form
function resetForm() {
    // Reset input RAL
    document.getElementById('ral').value = '';

    // Reset select mensilità al valore di default (13)
    document.getElementById('mensilita').value = '13';

    // Reset campi disabilitati ai valori di default
    document.getElementById('valuta').value = 'EUR';
    document.getElementById('nazione').value = 'italia';
    document.getElementById('regione').value = 'lombardia';
    document.getElementById('citta').value = 'milano';

   

    // Nascondi la CTA dello score
    document.getElementById('cityScoreCTA').style.display = 'none';

    // Reset score data
    currentScoreData = null;

    // Reset valori a 0
    document.getElementById('nettoAnnuale').textContent = '€ 0,00';
    document.getElementById('nettoMensile').textContent = '€ 0,00';
    document.getElementById('ralDisplay').textContent = '€ 0,00';
    document.getElementById('contributiINPS').textContent = '- € 0,00';
    document.getElementById('imponibileIRPEF').textContent = '€ 0,00';
    document.getElementById('totaleIRPEF').textContent = '- € 0,00';
    document.getElementById('detrazioniLavoro').textContent = '+ € 0,00';
    document.getElementById('irpefNetta').textContent = '- € 0,00';
    document.getElementById('addRegionale').textContent = '- € 0,00';
    document.getElementById('addComunale').textContent = '- € 0,00';
    document.getElementById('finalNetto').textContent = '€ 0,00';
    document.getElementById('irpefBreakdown').innerHTML = '';

    // Reset formule
    document.getElementById('formulaINPS').textContent = 'RAL × 9,19% = Contributi INPS';
    document.getElementById('formulaImponibile').textContent = 'RAL - Contributi INPS = Imponibile IRPEF';
    document.getElementById('formulaDetrazioni').textContent = 'IRPEF Lorda - Detrazioni = IRPEF Netta';
    document.getElementById('formulaFinale').textContent = 'RAL - INPS - IRPEF Netta - Addizionali = Netto';

    // Focus sul campo RAL
    document.getElementById('ral').focus();

    // Reset selezione card
    cardSelezionata = 'annuale';
    ultimiRisultati = null;
}

// Variabile globale per memorizzare gli ultimi risultati
let ultimiRisultati = null;

// Funzione per impostare gli event listener sulle card
function impostaEventListenerCard() {
    const cardAnnuale = document.getElementById('cardAnnuale');
    const cardMensile = document.getElementById('cardMensile');

    // Rimuovi event listener precedenti (se presenti) per evitare duplicati
    const nuovaCardAnnuale = cardAnnuale.cloneNode(true);
    const nuovaCardMensile = cardMensile.cloneNode(true);
    cardAnnuale.parentNode.replaceChild(nuovaCardAnnuale, cardAnnuale);
    cardMensile.parentNode.replaceChild(nuovaCardMensile, cardMensile);

    // Rimuovi la classe highlight da entrambe e aggiungi alla card annuale di default
    nuovaCardAnnuale.classList.remove('highlight');
    nuovaCardMensile.classList.remove('highlight');
    nuovaCardAnnuale.classList.add('highlight');

    nuovaCardAnnuale.addEventListener('click', function() {
        cardSelezionata = 'annuale';
        nuovaCardAnnuale.classList.add('highlight');
        nuovaCardMensile.classList.remove('highlight');
        if (ultimiRisultati) {
            aggiornaDettaglioTrattenute(ultimiRisultati, 'annuale');
        }
    });

    nuovaCardMensile.addEventListener('click', function() {
        cardSelezionata = 'mensile';
        nuovaCardMensile.classList.add('highlight');
        nuovaCardAnnuale.classList.remove('highlight');
        if (ultimiRisultati) {
            aggiornaDettaglioTrattenute(ultimiRisultati, 'mensile');
        }
    });
}

// Event listener per il pulsante reset
document.getElementById('reset').addEventListener('click', resetForm);

// Calcola quando si preme Enter
document.getElementById('ral').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        document.getElementById('calculate').click();
    }
});

// Formattazione input RAL con separatore delle migliaia (gestisce anche il punto)
document.getElementById('ral').addEventListener('input', function(e) {
    // Salva la posizione del cursore
    const cursorPos = e.target.selectionStart;
    const oldLength = e.target.value.length;

    // Rimuove tutti i caratteri non numerici (punti, virgole, spazi, etc.)
    let value = e.target.value.replace(/[^\d]/g, '');

    if (value) {
        // Formatta con separatore delle migliaia (punto in italiano)
        const formatted = formatNumber(parseInt(value));
        e.target.value = formatted;

        // Calcola la nuova posizione del cursore
        const newLength = formatted.length;
        const diff = newLength - oldLength;
        const newPos = Math.max(0, cursorPos + diff);

        // Ripristina la posizione del cursore
        setTimeout(() => {
            e.target.setSelectionRange(newPos, newPos);
        }, 0);
    }
});

// Impedisci l'inserimento di caratteri non numerici
document.getElementById('ral').addEventListener('keydown', function(e) {
    // Permetti: backspace, delete, tab, escape, enter, frecce
    if ([8, 9, 27, 13, 46, 37, 38, 39, 40].includes(e.keyCode)) {
        return;
    }
    // Permetti: Ctrl+A, Ctrl+C, Ctrl+V, Ctrl+X
    if ((e.ctrlKey || e.metaKey) && [65, 67, 86, 88].includes(e.keyCode)) {
        return;
    }
    // Blocca tutto ciò che non è un numero
    if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
        e.preventDefault();
    }
});

// Gestisci il paste per rimuovere caratteri non numerici
document.getElementById('ral').addEventListener('paste', function(e) {
    e.preventDefault();
    const pastedText = (e.clipboardData || window.clipboardData).getData('text');
    const numericValue = pastedText.replace(/[^\d]/g, '');
    if (numericValue) {
        document.execCommand('insertText', false, formatNumber(parseInt(numericValue)));
    }
});

// Event listener per il calcolo con gestione formattazione
document.getElementById('calculate').addEventListener('click', function() {
    const ralInput = document.getElementById('ral');
    // Rimuove tutti i separatori (punti) per ottenere il valore numerico
    const ralValue = ralInput.value.replace(/\./g, '');
    const ral = parseFloat(ralValue);
    const mensilita = parseInt(document.getElementById('mensilita').value);
    const citta = document.getElementById('citta').value;

    if (!ral || ral <= 0) {
        showToast('RAL non valida', 'Inserisci un valore maggiore di 0 per calcolare lo stipendio netto.');
        ralInput.focus();
        return;
    }

    ultimiRisultati = calcolaNetto(ral, mensilita);
    mostraRisultati(ultimiRisultati, citta);
    impostaEventListenerCard();
});

// Inizializzazione al caricamento della pagina
window.addEventListener('load', function() {
    // Focus sul campo RAL
    document.getElementById('ral').focus();

    // Imposta gli event listener sulle card
    impostaEventListenerCard();

    // Event listener per aprire il popup score
    document.getElementById('openScorePopup').addEventListener('click', apriPopupScore);

    // Event listener per chiudere il popup score
    document.getElementById('closeScorePopup').addEventListener('click', chiudiPopupScore);

    // Chiudi popup cliccando sull'overlay
    document.getElementById('scorePopupOverlay').addEventListener('click', function(e) {
        if (e.target === this) {
            chiudiPopupScore();
        }
    });

    // Chiudi popup con ESC
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            chiudiPopupScore();
        }
    });
});
