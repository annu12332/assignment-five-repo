
//---for heart button---//

const hearts = document.querySelectorAll('.heart');
  const totalheart = document.getElementById('heartCount');
  let total = Number(totalheart.innerText);

  hearts.forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.stopPropagation();
      total += 1;
      totalheart.innerText = total;
    });
  });


  //---for copy button---/

  const copy = document.querySelectorAll('.copyBtn');
  const totalcopy = document.getElementById('copyCount');
  let totalcopycount = parseInt(totalcopy.innerText);

  copy.forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.stopPropagation();
      totalcopycount++;
      totalcopy.innerText = totalcopycount;



       // ফোন নাম্বার খুঁজে বের করো (উপরের <h1> ট্যাগে আছে)
    const number = btn.closest('.card-body').querySelector('h1').innerText.trim();

    // Alert তৈরি করো
    const alertBox = document.createElement('div');
    alertBox.innerHTML = `
      <div style="
        position: fixed;
        top: 30px;
        left: 50%;
        transform: translateX(-50%);
        background-color: #DCFCE7;
        color: #065F46;
        padding: 16px 20px;
        border-radius: 8px;
        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
        z-index: 9999;
        text-align: center;
        max-width: 500px;
        width: fit-content;">

        <p style="margin-bottom: 10px;">ফোন নাম্বার: <strong>${number}</strong></p>
        <button id="confirmCopyBtn" style="
          background-color: #10B981;
          color: white;
          padding: 8px 16px;
          border: none;
          border-radius: 5px;
          cursor: pointer;
        ">
          Copy Now
        </button>
      </div>
    `;

    document.body.appendChild(alertBox);

    // Copy Now বাটনে ক্লিক করলে নাম্বার কপি হবে
    const confirmBtn = alertBox.querySelector('#confirmCopyBtn');
    confirmBtn.addEventListener('click', () => {
      navigator.clipboard.writeText(number).then(() => {
        confirmBtn.innerText = 'কপি সম্পন্ন ✅';
      }).catch(() => {
        confirmBtn.innerText = 'কপি ব্যর্থ ❌';
      });
    });

    // Optional: 5 সেকেন্ড পর alert গায়েব করে দিবে
    setTimeout(() => {
      alertBox.remove();
    }, 5000);
  });
});


//---for call button---//

const callButtons = document.querySelectorAll('button');

const coinElement = document.querySelectorAll('h2')[1]; // দ্বিতীয় h2 যেটা Coin
let coinCount = parseInt(coinElement.innerText) || 100;

const callHistory = document.getElementById('callhistory');

callButtons.forEach(btn => {
  if (btn.innerText.trim().toLowerCase() === 'call') {
    btn.addEventListener('click', () => {
      const card = btn.closest('.card-body');
      const serviceName = card.querySelector('h2').innerText.trim();
      const serviceNumber = card.querySelector('h1').innerText.trim();

      if (coinCount < 20) {
        alert('❌ কল করার জন্য পর্যাপ্ত কয়েন নেই! অন্তত ২০ কয়েন দরকার।');
        return;
      }

      // কয়েন কাটা
      coinCount -= 20;
      totalcoin.innerText = coinCount;

      // Alert
      alert(`📞 ${serviceName} সেবাতে কল করা হচ্ছে\nনাম্বার: ${serviceNumber}`);

      // Call History যোগ করো
      const historyItem = document.createElement('div');
      historyItem.className = 'p-2 mt-2 bg-[#F0FDF4] rounded text-sm border border-green-300';

      historyItem.innerHTML = `
        <strong>${serviceName}</strong><br>
        নম্বর: ${serviceNumber}
      `;

      callHistory.appendChild(historyItem);
    });
  }
});


const clearButton = document.getElementById("clearbutton");
clearButton.addEventListener('click', () => {
  callHistory.innerHTML = '';
   
})