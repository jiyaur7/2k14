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
        const dipositAmoun = getInputNumber("dipositAmount");


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
        beautyfyTex('balanceadd', withdrawNumber);
        document.getElementById('dipositAmount').value = '';

    })
    ///-------withdraw------
    const withdrawbtn = document.getElementById('withdrawbtn');
    withdrawbtn.addEventListener('click', function () {
        const withdrawNumber = getInputNumber("withdrawAmount");

        beautyfyTex('currentWithdraw', withdrawNumber);
        beautyfyTex('balanceadd', -1 * withdrawNumber);
        document.getElementById('withdrawAmount').value = '';



    })

    function getInputNumber(id) {
        const withdrawamount = document.getElementById(id).value;
        const withdrawf = parseFloat(withdrawamount);
        return withdrawf;
    }


    function beautyfyTex(id, dipositnumbber) {
        const balance = document.getElementById(id).innerText;
        const balancef = parseFloat(balance);
        const totalbalance = dipositnumbber + balancef;
        document.getElementById(id).innerText = totalbalance;
    }