document.addEventListener('DOMContentLoaded', () => {
    const quotesSymbol = document.querySelector('.quotes-symbol');
    const motivationText = document.querySelector('.motivation-text');
    const adviceNumber = document.querySelector('.advice-number');

    quotesSymbol.addEventListener('click', async () => {
        try {
            const response = await fetch('/advice');
            const data = await response.json();

            const advice = data.advice;
            const adviceID = data.adviceID;

            motivationText.textContent = `"${advice}"`;
            adviceNumber.textContent = `ADVICE #${adviceID}`;
        } catch (error) {
            console.error('Error fetching advice:', error);
            motivationText.textContent = 'Could not fetch advice. Try again later.';
        }
    });
});