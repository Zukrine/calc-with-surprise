let a = '';
let b = '';
let sign = '';
let result = '';
let value = '';
let symbol = '';
let finish = false;

const digit = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'];
const action = ['C', '+/-', '%', '/', '*', '-', '+', '='];
const out = document.querySelector('.calc__screen');

function clearAll() {
    a = '';
    b = '';
    sign = '';
    result = '';
    value = '';
    finish = false;
    out.textContent = 0;
    return;
}


function viewGift() {
    document.getElementById('calc__app__main_frame').classList.add('calc_hidden');
    document.getElementById('gift').classList.add('gift_visible');
    document.getElementById('message').classList.add('open_message');
    return;
}



document.querySelector('.calc_btn_frame').addEventListener('click', (event) => {
    if (!event.target.classList.contains('calc_btn')) {
        return;
    } else if (event.target.classList.contains('all_clear')) {
        clearAll();
        return;
    }
    out.textContent = '';
    const key = event.target.textContent;
    if (digit.includes(key)) {

        if (a === '' || a !== '' && sign === '') {
            a += key;
            out.textContent += a;
        } else if (a !== '' && b !== '' && finish) {
            a = result;
            b = key;
            finish = false;
            out.textContent += a + sign + b;
        } else {
            b += key;
            out.textContent += a + sign + b;
        }
        return;

    }

    if (key === '=') {
        if (b === '') {
            b = a;
        };
        switch (sign) {
            // case '+/-':
            //     if (symbol === '') {
            //         out.textContent += '-';
            //     } else {
            //         out.textContent += '';
            //     }

            //     break;
            case '+':
                value = (+a) + (+b);
                break;
            case '-':
                value = (+a) - (+b);
                break;
            case '*':
                value = (+a) * (+b);
                break;
            case '/':
                value = (+a) / (+b);
                if (b === '0') {
                    out.textContent = 'Нельзя!';
                    a = '';
                    b = '';
                    sign = '';
                    result = '';
                    value = '';
                    return;
                }
                break;
        }
        finish = true;
        result = (parseInt(+value * 1000) / 1000);
        out.textContent = result;
        console.log(a, sign, b, result);
    }


    if (action.includes(key)) {
        sign = key;

        if (sign === '=') {
            return;
        } else if (finish) {
            out.textContent = result + sign;

        } else {
            out.textContent = a + sign + b;
        }
    }

    if (result === 70321) {
        viewGift();
    }

    
    
})

