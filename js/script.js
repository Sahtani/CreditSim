const durationInput = document.getElementById('duration');
const durationRange = document.getElementById('durationRange');
durationRange.addEventListener('input', function() {
    durationInput.value = this.value;
});
durationInput.addEventListener('input', function() {
    if (this.value < durationRange.min) this.value = durationRange.min;
    if (this.value > durationRange.max) this.value = durationRange.max;
    durationRange.value = this.value;
});

const amountInput = document.getElementById('amount');
const amountRange = document.getElementById('amountRange');
amountRange.addEventListener('input', function() {
    amountInput.value = this.value;
});
amountInput.addEventListener('input', function() {
    if (this.value < amountRange.min) this.value = amountRange.min;
    if (this.value > amountRange.max) this.value = amountRange.max;
    amountRange.value = this.value;
});

const monthlyInput = document.getElementById('monthly');
const monthlyRange = document.getElementById('monthlyRange');
monthlyRange.addEventListener('input', function() {
    monthlyInput.value = this.value;
});
monthlyInput.addEventListener('input', function() {
    if (this.value < monthlyRange.min) {
        this.value = monthlyRange.min;
    } else if (this.value > monthlyRange.max) {
        this.value = monthlyRange.max;
    }
    monthlyRange.value = this.value;
});

const loanForm = document.getElementById('loanForm');
loanForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const project = document.getElementById('project').value;
    const status = document.getElementById('status').value;
    const amount = document.getElementById('amount').value;
    const duration = document.getElementById('duration').value;
    const monthly = document.getElementById('monthly').value;
    const fees = (amount * 0.0165);
    const loanDetails = {
        project,
        status,
        amount,
        duration,
        monthly,
        fees
    };
    localStorage.setItem('loanDetails', JSON.stringify(loanDetails));
    console.log('Loan Details Saved to Local Storage:', loanDetails);
    
    document.getElementById('projectSummary').innerText = `Mon projet : ${loanDetails.project}`;
    document.getElementById('statusSummary').innerText = `Vous êtes : ${loanDetails.status}`;
    document.getElementById('amountSummary').innerText = `Montant : ${loanDetails.amount} DH`;
    document.getElementById('durationSummary').innerText = `Durée : ${loanDetails.duration} mois`;
    document.getElementById('monthlySummary').innerText = `Mensualité : ${loanDetails.monthly} DH`;
    document.getElementById('feesSummary').innerText = `Frais de dossier : ${loanDetails.fees.toFixed(2)} DH`;
    document.getElementById('summary').style.display = 'block';
});

window.onload = function() {
    const loanDetails = JSON.parse(localStorage.getItem('loanDetails'));
    if (loanDetails) {
        document.getElementById('project').value = loanDetails.project;
        document.getElementById('status').value = loanDetails.status;
        document.getElementById('amount').value = loanDetails.amount;
        document.getElementById('duration').value = loanDetails.duration;
        document.getElementById('monthly').value = loanDetails.monthly;
        document.getElementById('summary').style.display = 'block';
        document.getElementById('projectSummary').innerText = `Mon projet : ${loanDetails.project}`;
        document.getElementById('statusSummary').innerText = `Vous êtes : ${loanDetails.status}`;
        document.getElementById('amountSummary').innerText = `Montant : ${loanDetails.amount} DH`;
        document.getElementById('durationSummary').innerText = `Durée : ${loanDetails.duration} mois`;
        document.getElementById('monthlySummary').innerText = `Mensualité : ${loanDetails.monthly} DH`;
        document.getElementById('feesSummary').innerText = `Frais de dossier : ${(loanDetails.amount * 0.0165).toFixed(2)} DH`;
    }
};

