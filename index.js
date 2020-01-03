window.addEventListener('load', _ => {

    let axe = 0;
    let ye = 0;
    let zee = 0;
    let lockedAxis = {};
    let positionLocked = false

    let flag = true;
    let xDom = document.querySelector('#x');
    let yDom = document.querySelector('#y');
    let zDom = document.querySelector('#z');
    let op = document.querySelector('#op');
    let delta = document.querySelector('#delta');
    let xCheckbox = document.querySelector('#xCheckbox');
    let yCheckbox = document.querySelector('#yCheckbox');
    let zCheckbox = document.querySelector('#zCheckbox');
    window.addEventListener('deviceorientation', (event) => {

        if (positionLocked) {
            op.innerHTML = '';
            if (xCheckbox.checked && Math.abs(event.alpha - lockedAxis.x) > Number.parseFloat(delta.value)) {
                op.innerHTML = `Out Of posture by x`
            }
            if (yCheckbox.checked && Math.abs(event.beta - lockedAxis.y) > Number.parseFloat(delta.value)) {
                op.innerHTML += `Out Of posture by Y`
            }
            if (zCheckbox.checked && Math.abs(event.gamma - lockedAxis.z) > Number.parseFloat(delta.value)) {
                op.innerHTML += `Out Of posture by Z`
            }

        }
        else {
            axe = event.alpha;
            xDom.innerHTML = `X ${axe}`;
            ye = event.beta;
            yDom.innerHTML = `Y ${ye}`;
            zee = event.gamma;
            zDom.innerHTML = `Z ${zee}`;
        }
    })

    document.querySelector('#lockBtn').addEventListener('click', _ => {
        lockedAxis.x = axe;
        lockedAxis.y = ye;
        lockedAxis.z = zee;
        positionLocked = !positionLocked;
    })
})