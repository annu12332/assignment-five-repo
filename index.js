
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
    