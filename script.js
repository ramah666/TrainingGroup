document.getElementById('search-button').addEventListener('click', function () {
    const input = document.getElementById('search-input').value.toLowerCase();
    const speciality = document.getElementById('speciality-dropdown').value.toLowerCase();
    const doctors = document.getElementsByClassName('doctor');

    for (let i = 0; i < doctors.length; i++) {
        const doctorName = doctors[i].querySelector('.doctorName').textContent.toLowerCase();
        const doctorMajor = doctors[i].querySelector('.doctorMajor').textContent.toLowerCase();
        
        if (doctorName.includes(input) && (speciality === "" || doctorMajor.includes(speciality))) {
            doctors[i].style.display = 'block';
        } else {
            doctors[i].style.display = 'none';
        }
    }
});

document.getElementById('search-input').addEventListener('keyup', function (e) {
    if (e.key === 'Enter') {
        document.getElementById('search-button').click();
    }
});

