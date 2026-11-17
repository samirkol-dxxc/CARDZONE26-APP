<div class="deposit-container" style="text-align: center; padding: 20px;">
    <h2>USDT / Tron Deposit</h2>
    <p>Is QR Code par payment karein aur niche details bharein:</p>
    
    <!-- Aapka QR Code Image -->
    <img src="qr.png" alt="Deposit QR Code" style="width: 200px; height: 200px; border-radius: 10px;">
    
    <p><b>Address:</b> <span style="font-size: 12px;">TU4PRGUqACPXRTsM1zZejygQLGZLv1fBV</span></p>

    <!-- Deposit Form -->
    <form id="depositForm" onsubmit="submitDeposit(event)">
        <input type="email apna email yahan auto-fill ya input karein" id="deposit_email" placeholder="Aapka Email" required style="padding: 8px; margin: 5px; width: 80%;"><br>
        <input type="number" id="deposit_amount" placeholder="Amount (USDT/INR)" required style="padding: 8px; margin: 5px; width: 80%;"><br>
        <input type="text" id="txid" placeholder="Transaction ID / Hash (TxID)" required style="padding: 8px; margin: 5px; width: 80%;"><br>
        <button type="submit" style="padding: 10px 20px; background: green; color: white; border: none; cursor: pointer;">Submit Deposit</button>
    </form>
</div>

<script>
function submitDeposit(event) {
    event.preventDefault();
    const email = document.getElementById('deposit_email').value;
    const amount = document.getElementById('deposit_amount').value;

    fetch('api/deposit.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: email, amount: amount })
    })
    .then(response => response.json())
    .then(data => {
        if(data.status === 'success') {
            alert('Deposit Request Submitted! New Balance: ' + data.new_balance);
        } else {
            alert('Error: ' + data.message);
        }
    });
}
</script>
