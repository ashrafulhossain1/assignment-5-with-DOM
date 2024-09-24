// hyperlink of Blog page
const blogBtn = document.getElementById('blog-btn');
blogBtn.addEventListener('click', function () {
    window.location.href = './FAQs.html';
});

// common function 
// function getInputValue(id){
//     const InputValue =document.getElementById(id).value;
//     const InputValueNumber = parseFloat(InputValue);
//     return InputValueNumber;
// }



// -----------------------------------noakhali donate section----------------------------------------------//

const donateNoakhali = document.getElementById("donate-btn-noyakhali");
donateNoakhali.addEventListener('click', function () {

    const userFund = getTextValue('user-fund');
    const balanceNoyakhali = getTextValue('noakhali-balance');
    const InputNoakhali = getInputValue('input-noakhali');

    if (isNaN(InputNoakhali) || InputNoakhali <= 0 || userFund <= 0 || userFund < InputNoakhali) {
        return alert('DGM')
    }
    else {
        // update balance
        const newBalanceNoakhali = balanceNoyakhali + InputNoakhali;
        const newUserFund = userFund - InputNoakhali;
        document.getElementById('noakhali-balance').innerText = newBalanceNoakhali;
        document.getElementById('user-fund').innerText = newUserFund;
        document.getElementById('input-noakhali').value = '';

        // modal
        document.getElementById('Noakhali-modal').classList.remove("hidden");

        const historyContainer = document.getElementById('history-container')
        const historyCard = document.createElement('div');
        historyCard.innerHTML = `
            <div class="bg-white border p-4 md:p-8 rounded-xl">
                    <h3 class="text-xl font-bold text text-gray-900 mb-4">
                    ${InputNoakhali} Taka is Donated for Famine-2024 at Feni,
                    Bangladesh
                    </h3>
                    <p>
                    Date : ${new Date()}
                    </p>
        </div>
        `;
        historyContainer.prepend(historyCard);
        
        




    }
})

// close of Noakhali Modal
document.getElementById('noakhali-modal-off').addEventListener('click', function () {
    document.getElementById('Noakhali-modal').classList.add('hidden');
})



//------------------------------------------feni donate section-----------------------------------------//

const donateFeni = document.getElementById("donate-btn-feni");
donateFeni.addEventListener('click', function () {
    console.log('second modal')
    const userFund = getTextValue('user-fund');
    const balanceFeni = getTextValue("feni-balance");
    const inputFeni = getInputValue("input-feni")

    // console.log({userFund,feniBalance,inputFeni})
    if (isNaN(inputFeni) || inputFeni <= 0 || inputFeni > userFund || userFund <= 0) {
        return alert('DGM Feni');
    }
    else {
        // update balance
        const newUserFund = userFund - inputFeni;
        const newBalanceFeni = balanceFeni + inputFeni;
        document.getElementById('user-fund').innerText = newUserFund;
        document.getElementById("feni-balance").innerText = newBalanceFeni;
        document.getElementById("input-feni").value = '';

        // modal
        document.getElementById('feni-modal').classList.remove("hidden");
    };

});

// close modal feni
document.getElementById('feni-modal-off').addEventListener('click', function () {
    console.log('"click" feni close')
    document.getElementById('feni-modal').classList.add('hidden');
})

//--------------------------------------- Quota Movement Donate Section---------------------------------------//

const donateQuota = document.getElementById('donate-btn-quota');
donateQuota.addEventListener('click', function () {
    // console.log('click quota')
    const userFund = getTextValue('user-fund');
    const quotaBalance = getTextValue('quota-balance');
    const inputQuota = getInputValue('input-quota')

    // validity testing
    if (isNaN(inputQuota) || inputQuota <= 0 || inputQuota > userFund || userFund <= 0) {
        return alert('DGM Quota');
    }
    else {
        // update balance
        const newUserFund = userFund - inputQuota;
        const newBalanceQuota = quotaBalance + inputQuota;
        document.getElementById('user-fund').innerText = newUserFund;
        document.getElementById('quota-balance').innerText = newBalanceQuota;
        document.getElementById('input-quota').value = '';

        // modal open
        document.getElementById('quota-modal').classList.remove("hidden");
    }
})

// close modal feni
document.getElementById('quota-modal-off').addEventListener('click', function () {
    // console.log('click close "quota"')
    document.getElementById('quota-modal').classList.add('hidden');
})


//:::::::::::::::::::::::::: DONATION AND HISTORY SECTION TOGGLE FEATURES::::::::::::::::::::::::::::://

const donationBtn = document.getElementById('donation-btn');
const historyBtn = document.getElementById('history-btn');
const donateContainer = document.getElementById('donate-container')


historyBtn.addEventListener('click', function () {
    historyBtn.classList.add('bg-lime-400', 'text-gray-950');
    historyBtn.classList.remove('text-gray-600', 'border');

    donationBtn.classList.remove('bg-lime-400', 'text-gray-950');
    donationBtn.classList.add('border-2');

    donateContainer.classList.add('hidden')

})

donationBtn.addEventListener('click', function () {

    donationBtn.classList.add('bg-lime-400', 'text-gray-950')
    donationBtn.classList.remove('border-2');

    historyBtn.classList.remove('bg-lime-400', 'text-gray-950');
    historyBtn.classList.add('text-gray-600', 'border');

    donateContainer.classList.remove('hidden');

})
