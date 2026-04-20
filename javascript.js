document.addEventListener('DOMContentLoaded', () => {
    const fuji = document.getElementById('fuji-moving');
    const btn = document.getElementById('btnStart');
    const form = document.getElementById('myForm');
    const tableBody = document.getElementById('table-body');
    const inputNama = document.getElementById('name');
    const inputUmur = document.getElementById('age');

    let positionX = 0;
    let animationId = null;
    let isMoving = false;
    
    let sudahSubmit = false; 

    function move() {
        positionX -= 2; 
        if (positionX <= -400) positionX = 0;
        fuji.style.left = positionX + 'px';
        animationId = requestAnimationFrame(move);
    }

    btn.addEventListener('click', () => {
        if (!sudahSubmit) {
            alert("eitsss isi dlu itu nama dan umur lalu submit baru bisa jalankan animasinya wahahaahahaha");
            return;
        }

        if (!isMoving) {
            move();
            isMoving = true;
            btn.textContent = "Stop Animasi";
            btn.style.backgroundColor = "#dc3545";
        } else {
            cancelAnimationFrame(animationId);
            isMoving = false;
            btn.textContent = "Start Animasi";
            btn.style.backgroundColor = "#007bff";
        }
    });

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const namaValue = inputNama.value.trim();
        const umurValue = inputUmur.value.trim();

        if (namaValue === "" || umurValue === "") {
            alert("harus lengkap ya adik adik HAHAHAAHAHA");
            return;
        }

        sudahSubmit = true;
        console.log("Status: Berhasil Submit. Tombol Start sekarang aktif.");

        const barisBaru = document.createElement('tr');
        barisBaru.innerHTML = `
            <td>${namaValue}</td>
            <td>${umurValue}</td>
        `;
        tableBody.appendChild(barisBaru);
        
        form.reset();
        alert("alhamdulillah sudah di isi mangga bisa di start mueheheheehe");
    });
});