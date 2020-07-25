    // login btn login handaler even 
    const loginBtn = document.getElementById('login');
    loginBtn.addEventListener('click', function () {
        const loginarea = document.getElementById('loginarea');
        loginarea.style.display = 'none';
        const transetionArea = document.getElementById('transetionArea');
        transetionArea.style.display = 'block';

    })
    /// diposit-------------------------
    const dipositBtn = document.getElementById('diposit');
    dipositBtn.addEventListener('click', function () {

        const dipositAmount = document.getElementById('dipositAmount').value;
        const dipositnumbber = parseFloat(dipositAmount);

        // --------diposit--------------

        // const dipositadd = document.getElementById('dipostiadd').innerText;
        // const dipositaddf = parseFloat(dipositadd);
        // const totaldiposit = dipositnumbber + dipositaddf;
        // document.getElementById('dipostiadd').innerText = totaldiposit;

        // ------------balance----------

        // const balance = document.getElementById('balanceadd').innerText;
        // const balancef = parseFloat(balance);
        // const totalbalance = dipositnumbber + balancef;
        // document.getElementById('balanceadd').innerText = totalbalance;

        beautyfyTex('dipostiadd', dipositnumbber);
        beautyfyTex('balanceadd', dipositnumbber);
        document.getElementById('dipositAmount').value = '';

    })

    function beautyfyTex(id, dipositnumbber) {
        const balance = document.getElementById(id).innerText;
        const balancef = parseFloat(balance);
        const totalbalance = dipositnumbber + balancef;
        document.getElementById(id).innerText = totalbalance;
    }
    ///-------withdraw------
    const withdrawbtn = document.getElementById('withdrawbtn');
    withdrawbtn.addEventListener('click', function () {
        const withdrawamount = document.getElementById("withdrawAmount").value;
        const withdrawf = parseFloat(withdrawamount);

    })