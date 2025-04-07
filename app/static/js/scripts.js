document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.getElementById('loginForm');
    const proxyForm = document.getElementById('proxyForm');

    if (loginForm) {
        loginForm.addEventListener('submit', function (e) {
            e.preventDefault();
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;

            if (username === 'coffeeroot' && md5(password) === '0192023a7bbd73250516f069df18b500') {
                localStorage.setItem('loggedIn', 'true');
                localStorage.setItem('username', username);
                window.location.href = '/dashboard';
            } else {
                document.getElementById('error').textContent = 'نام کاربری یا رمز عبور اشتباه است.';
            }
        });
    }

    if (proxyForm) {
        const user = localStorage.getItem('username');
        document.getElementById('user').textContent = user;

        proxyForm.addEventListener('submit', function (e) {
            e.preventDefault();
            const token = document.getElementById('token').value;
            const cokchanel = document.getElementById('cokchanel').value;
            const lines = "562770229:2aj27s3iwd";

            fetch(`/send?token=${encodeURIComponent(token)}&cokchanel=${encodeURIComponent(cokchanel)}&lines=${encodeURIComponent(lines)}`)
                .then(response => response.text())
                .then(data => {
                    document.getElementById('response').textContent = data;
                })
                .catch(err => {
                    //test
                });
        });
    }
});
