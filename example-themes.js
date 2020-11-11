function setTheme(themeName) {
    if (themeName == 'nord') {
        document.documentElement.style.setProperty('--bg-color', '#eceff4');
        document.documentElement.style.setProperty('--bg-text', '#2e3440');
        document.documentElement.style.setProperty('--black', '#2e3440');
        document.documentElement.style.setProperty('--black-hover', '#3b4252');
        document.documentElement.style.setProperty('--black-light', '#4c566a');
        document.documentElement.style.setProperty('--white', '#eceff4');
        document.documentElement.style.setProperty('--blue-light', '#81a1c1');
        document.documentElement.style.setProperty('--blue', '#5e81ac');
        document.documentElement.style.setProperty('--blue-hover', '#4f6e93');
        document.documentElement.style.setProperty('--green-light', '#a3be8c');
        document.documentElement.style.setProperty('--green', '#a3be8c');
        document.documentElement.style.setProperty('--green-hover', '#8fa57c');
        document.documentElement.style.setProperty('--red-light', '#bf616a');
        document.documentElement.style.setProperty('--red', '#bf616a');
        document.documentElement.style.setProperty('--red-hover', '#a05159');
        document.documentElement.style.setProperty('--orange-light', '#d08770');
        document.documentElement.style.setProperty('--orange', '#d08770');
        document.documentElement.style.setProperty('--orange-hover', '#bf7d69');
        document.documentElement.style.setProperty('--info-blue-light', '#88c0d0');
        document.documentElement.style.setProperty('--info-blue', '#88c0d0');
        document.documentElement.style.setProperty('--info-blue-hover', '#7aaebc');
        document.documentElement.style.setProperty('--alert-text-color', 'white');
        document.querySelector("#coder").innerHTML = `
        --bg-color: #eceff4;<br>
        --bg-text: #2e3440;<br>
        --box-shadow-1: 0px 2px 3px rgba(50, 50, 50, 0.2);<br>
        --box-shadow-2: 0px 3px 4px rgba(40, 40, 40, 0.4);<br>
        --black: #2e3440;<br>
        --black-hover: #3b4252;<br>
        --black-light: #4c566a;<br>
        --white: #eceff4;<br>
        --blue-light: #81a1c1;<br>
        --blue: #5e81ac;<br>
        --blue-hover: #4f6e93;<br>
        --green-light: #a3be8c;<br>
        --green: #a3be8c;<br>
        --green-hover: #8fa57c;<br>
        --red-light: #bf616a;<br>
        --red: #bf616a;<br>
        --red-hover: #a05159;<br>
        --orange-light: #d08770;<br>
        --orange: #d08770;<br>
        --orange-hover: #bf7d69;<br>
        --info-blue-light: #88c0d0;<br>
        --info-blue: #88c0d0;<br>
        --info-blue-hover: #7aaebc;
        `;
    } else if (themeName == 'norddark') {
        document.documentElement.style.setProperty('--bg-color', '#2e3440');
        document.documentElement.style.setProperty('--bg-text', '#eceff4');
        document.documentElement.style.setProperty('--black', '#2e3440');
        document.documentElement.style.setProperty('--black-hover', '#3b4252');
        document.documentElement.style.setProperty('--black-light', '#4c566a');
        document.documentElement.style.setProperty('--white', '#eceff4');
        document.documentElement.style.setProperty('--blue-light', '#81a1c1');
        document.documentElement.style.setProperty('--blue', '#5e81ac');
        document.documentElement.style.setProperty('--blue-hover', '#4f6e93');
        document.documentElement.style.setProperty('--green-light', '#a3be8c');
        document.documentElement.style.setProperty('--green', '#a3be8c');
        document.documentElement.style.setProperty('--green-hover', '#8fa57c');
        document.documentElement.style.setProperty('--red-light', '#bf616a');
        document.documentElement.style.setProperty('--red', '#bf616a');
        document.documentElement.style.setProperty('--red-hover', '#a05159');
        document.documentElement.style.setProperty('--orange-light', '#d08770');
        document.documentElement.style.setProperty('--orange', '#d08770');
        document.documentElement.style.setProperty('--orange-hover', '#bf7d69');
        document.documentElement.style.setProperty('--info-blue-light', '#88c0d0');
        document.documentElement.style.setProperty('--info-blue', '#88c0d0');
        document.documentElement.style.setProperty('--info-blue-hover', '#7aaebc');
        document.documentElement.style.setProperty('--alert-text-color', 'white');
        document.querySelector("#coder").innerHTML = `
        --bg-color: #2e3440;<br>
        --bg-text: #eceff4;<br>
        --box-shadow-1: 0px 2px 3px rgba(50, 50, 50, 0.2);<br>
        --box-shadow-2: 0px 3px 4px rgba(40, 40, 40, 0.4);<br>
        --black: #2e3440;<br>
        --black-hover: #3b4252;<br>
        --black-light: #4c566a;<br>
        --white: #eceff4;<br>
        --blue-light: #81a1c1;<br>
        --blue: #5e81ac;<br>
        --blue-hover: #4f6e93;<br>
        --green-light: #a3be8c;<br>
        --green: #a3be8c;<br>
        --green-hover: #8fa57c;<br>
        --red-light: #bf616a;<br>
        --red: #bf616a;<br>
        --red-hover: #a05159;<br>
        --orange-light: #d08770;<br>
        --orange: #d08770;<br>
        --orange-hover: #bf7d69;<br>
        --info-blue-light: #88c0d0;<br>
        --info-blue: #88c0d0;<br>
        --info-blue-hover: #7aaebc;
        `;
    } else if (themeName == 'bootstrap') {
        document.documentElement.style.setProperty('--bg-color', 'white');
        document.documentElement.style.setProperty('--bg-text', 'black');
        document.documentElement.style.setProperty('--black', '#23272b');
        document.documentElement.style.setProperty('--black-hover', '#23272b');
        document.documentElement.style.setProperty('--black-light', '#6c757d');
        document.documentElement.style.setProperty('--white', 'white');
        document.documentElement.style.setProperty('--blue-light', '#cce5ff');
        document.documentElement.style.setProperty('--blue', '#007bff');
        document.documentElement.style.setProperty('--blue-hover', '#0069d9');
        document.documentElement.style.setProperty('--green-light', '#d4edda');
        document.documentElement.style.setProperty('--green', '#28a745');
        document.documentElement.style.setProperty('--green-hover', '#218838');
        document.documentElement.style.setProperty('--red-light', '#f8d7da');
        document.documentElement.style.setProperty('--red', '#dc3545');
        document.documentElement.style.setProperty('--red-hover', '#c82333');
        document.documentElement.style.setProperty('--orange-light', '#fff3cd');
        document.documentElement.style.setProperty('--orange', '#ffc107');
        document.documentElement.style.setProperty('--orange-hover', '#e0a800');
        document.documentElement.style.setProperty('--info-blue-light', '#d1ecf1');
        document.documentElement.style.setProperty('--info-blue', '#17a2b8');
        document.documentElement.style.setProperty('--info-blue-hover', '#138496');
        document.documentElement.style.setProperty('--alert-text-color', 'black');
        document.querySelector("#coder").innerHTML = `
        --bg-color: white;<br>
        --bg-text: black;<br>
        --box-shadow-1: 0px 2px 3px rgba(50, 50, 50, 0.2);<br>
        --box-shadow-2: 0px 3px 4px rgba(40, 40, 40, 0.4);<br>
        --black: #23272b;<br>
        --black-hover: #23272b;<br>
        --black-light: #6c757d;<br>
        --white: white;<br>
        --blue-light: #cce5ff;<br>
        --blue: #007bff;<br>
        --blue-hover: #0069d9;<br>
        --green-light: #d4edda;<br>
        --green: #28a745;<br>
        --green-hover: #218838;<br>
        --red-light: #f8d7da;<br>
        --red: #dc3545;<br>
        --red-hover: #c82333;<br>
        --orange-light: #fff3cd;<br>
        --orange: #ffc107;<br>
        --orange-hover: #e0a800;<br>
        --info-blue-light: #d1ecf1;<br>
        --info-blue: #17a2b8;<br>
        --info-blue-hover: #138496;
        `;
    } else if (themeName == 'office') {
        document.documentElement.style.setProperty('--bg-color', 'white');
        document.documentElement.style.setProperty('--bg-text', 'black');
        document.documentElement.style.setProperty('--black', '#393939');
        document.documentElement.style.setProperty('--black-hover', '#484644');
        document.documentElement.style.setProperty('--black-light', '#a19f9d');
        document.documentElement.style.setProperty('--white', 'white');
        document.documentElement.style.setProperty('--blue-light', '#63b8f9');
        document.documentElement.style.setProperty('--blue', '#0078d4');
        document.documentElement.style.setProperty('--blue-hover', '#004e8c');
        document.documentElement.style.setProperty('--green-light', '#d4f783');
        document.documentElement.style.setProperty('--green', '#498205');
        document.documentElement.style.setProperty('--green-hover', '#0b6a0b');
        document.documentElement.style.setProperty('--red-light', '#fca1a4');
        document.documentElement.style.setProperty('--red', '#d13438');
        document.documentElement.style.setProperty('--red-hover', '#a4262c');
        document.documentElement.style.setProperty('--orange-light', '#fccc92');
        document.documentElement.style.setProperty('--orange', '#ffaa44');
        document.documentElement.style.setProperty('--orange-hover', '#ca5010');
        document.documentElement.style.setProperty('--info-blue-light', '#7deaf2');
        document.documentElement.style.setProperty('--info-blue', '#00b7c3');
        document.documentElement.style.setProperty('--info-blue-hover', '#038387');
        document.documentElement.style.setProperty('--alert-text-color', 'black');
        document.querySelector("#coder").innerHTML = `
        --bg-color: white;<br>
        --bg-text: black;<br>
        --box-shadow-1: 0px 2px 3px rgba(50, 50, 50, 0.2);<br>
        --box-shadow-2: 0px 3px 4px rgba(40, 40, 40, 0.4);<br>
        --black: #393939;<br>
        --black-hover: #484644;<br>
        --black-light: #a19f9d;<br>
        --white: white;<br>
        --blue-light: #63b8f9;<br>
        --blue: #0078d4;<br>
        --blue-hover: #004e8c;<br>
        --green-light: #d4f783;<br>
        --green: #498205;<br>
        --green-hover: #0b6a0b;<br>
        --red-light: #fca1a4;<br>
        --red: #d13438;<br>
        --red-hover: #a4262c;<br>
        --orange-light: #fff3cd;<br>
        --orange: #ffc107;<br>
        --orange-hover: #7deaf2;<br>
        --info-blue-light: #7deaf2;<br>
        --info-blue: #038387;<br>
        --info-blue-hover: #138496;
        `;
    } else if (themeName == 'puidark') {
        document.documentElement.style.setProperty('--bg-color', '#212121');
        document.documentElement.style.setProperty('--bg-text', 'white');
        document.documentElement.style.setProperty('--black', 'black');
        document.documentElement.style.setProperty('--black-hover', '#212121');
        document.documentElement.style.setProperty('--black-light', '#455A64');
        document.documentElement.style.setProperty('--white', 'white');
        document.documentElement.style.setProperty('--blue-light', '#42A5F5');
        document.documentElement.style.setProperty('--blue', '#039BE5');
        document.documentElement.style.setProperty('--blue-hover', '#0288D1');
        document.documentElement.style.setProperty('--green-light', '#81C784');
        document.documentElement.style.setProperty('--green', '#43A047');
        document.documentElement.style.setProperty('--green-hover', '#388E3C');
        document.documentElement.style.setProperty('--red-light', '#e57373');
        document.documentElement.style.setProperty('--red', '#e53935');
        document.documentElement.style.setProperty('--red-hover', '#d32f2f');
        document.documentElement.style.setProperty('--orange-light', '#FFB74D');
        document.documentElement.style.setProperty('--orange', '#FB8C00');
        document.documentElement.style.setProperty('--orange-hover', '#F57C00');
        document.documentElement.style.setProperty('--info-blue-light', '#4DD0E1');
        document.documentElement.style.setProperty('--info-blue', '#00ACC1');
        document.documentElement.style.setProperty('--info-blue-hover', '#0097A7');
        document.documentElement.style.setProperty('--alert-text-color', 'white');
        document.querySelector("#coder").innerHTML = `
        --bg-color: #212121;<br>
        --bg-text: white;<br>
            --box-shadow-1: 0px 2px 3px rgba(50, 50, 50, 0.2);<br>
            --box-shadow-2: 0px 3px 4px rgba(40, 40, 40, 0.4);<br>
            --black: black;<br>
            --black-hover: #212121;<br>
            --black-light: #455A64;<br>
            --white: white;<br>
            --blue-light: #42A5F5;<br>
            --blue: #039BE5;<br>
            --blue-hover: #0288D1;<br>
            --green-light: #81C784;<br>
            --green: #43A047;<br>
            --green-hover: #388E3C;<br>
            --red-light: #e57373;<br>
            --red: #e53935;<br>
            --red-hover: #d32f2f;<br>
            --orange-light: #FFB74D;<br>
            --orange: #FB8C00;<br>
            --orange-hover: #F57C00;<br>
            --info-blue-light: #4DD0E1;<br>
            --info-blue: #00ACC1;<br>
            --info-blue-hover: #0097A7;
        `;
    } else if (themeName == 'pui') {
        document.documentElement.style.setProperty('--bg-color', 'white');
        document.documentElement.style.setProperty('--bg-text', 'dark');
        document.documentElement.style.setProperty('--black', 'black');
        document.documentElement.style.setProperty('--black-hover', '#212121');
        document.documentElement.style.setProperty('--black-light', '#455A64');
        document.documentElement.style.setProperty('--white', 'white');
        document.documentElement.style.setProperty('--blue-light', '#42A5F5');
        document.documentElement.style.setProperty('--blue', '#039BE5');
        document.documentElement.style.setProperty('--blue-hover', '#0288D1');
        document.documentElement.style.setProperty('--green-light', '#81C784');
        document.documentElement.style.setProperty('--green', '#43A047');
        document.documentElement.style.setProperty('--green-hover', '#388E3C');
        document.documentElement.style.setProperty('--red-light', '#e57373');
        document.documentElement.style.setProperty('--red', '#e53935');
        document.documentElement.style.setProperty('--red-hover', '#d32f2f');
        document.documentElement.style.setProperty('--orange-light', '#FFB74D');
        document.documentElement.style.setProperty('--orange', '#FB8C00');
        document.documentElement.style.setProperty('--orange-hover', '#F57C00');
        document.documentElement.style.setProperty('--info-blue-light', '#4DD0E1');
        document.documentElement.style.setProperty('--info-blue', '#00ACC1');
        document.documentElement.style.setProperty('--info-blue-hover', '#0097A7');
        document.documentElement.style.setProperty('--alert-text-color', 'white');
        document.querySelector("#coder").innerHTML = `
        --bg-color: white;<br>
        --bg-text: dark;<br>
            --box-shadow-1: 0px 2px 3px rgba(50, 50, 50, 0.2);<br>
            --box-shadow-2: 0px 3px 4px rgba(40, 40, 40, 0.4);<br>
            --black: black;<br>
            --black-hover: #212121;<br>
            --black-light: #455A64;<br>
            --white: white;<br>
            --blue-light: #42A5F5;<br>
            --blue: #039BE5;<br>
            --blue-hover: #0288D1;<br>
            --green-light: #81C784;<br>
            --green: #43A047;<br>
            --green-hover: #388E3C;<br>
            --red-light: #e57373;<br>
            --red: #e53935;<br>
            --red-hover: #d32f2f;<br>
            --orange-light: #FFB74D;<br>
            --orange: #FB8C00;<br>
            --orange-hover: #F57C00;<br>
            --info-blue-light: #4DD0E1;<br>
            --info-blue: #00ACC1;<br>
            --info-blue-hover: #0097A7;
        `;
    } else if (themeName == 'oceanic') {
        document.documentElement.style.setProperty('--bg-color', 'white');
        document.documentElement.style.setProperty('--bg-text', '#111');
        document.documentElement.style.setProperty('--black', '#1B2B34');
        document.documentElement.style.setProperty('--black-hover', '#343D46');
        document.documentElement.style.setProperty('--black-light', '#4F5B66');
        document.documentElement.style.setProperty('--white', 'white');
        document.documentElement.style.setProperty('--blue-light', '#5FB3B3');
        document.documentElement.style.setProperty('--blue', '#6699CC');
        document.documentElement.style.setProperty('--blue-hover', '#5FB3B3');
        document.documentElement.style.setProperty('--green-light', '#82f975');
        document.documentElement.style.setProperty('--green', '#99C794');
        document.documentElement.style.setProperty('--green-hover', '#6ba365');
        document.documentElement.style.setProperty('--red-light', '#f77e84');
        document.documentElement.style.setProperty('--red', '#EC5f67');
        document.documentElement.style.setProperty('--red-hover', '#e03a42');
        document.documentElement.style.setProperty('--orange-light', '#FAC863');
        document.documentElement.style.setProperty('--orange', '#F99157');
        document.documentElement.style.setProperty('--orange-hover', '#ea783a');
        document.documentElement.style.setProperty('--info-blue-light', '#7fd8d8');
        document.documentElement.style.setProperty('--info-blue', '#5fb3b3');
        document.documentElement.style.setProperty('--info-blue-hover', '#50a0a0');
        document.documentElement.style.setProperty('--alert-text-color', 'white');
        document.querySelector("#coder").innerHTML = `
        --bg-color: white;<br>
        --bg-text: #111;<br>
            --box-shadow-1: 0px 2px 3px rgba(50, 50, 50, 0.2);<br>
            --box-shadow-2: 0px 3px 4px rgba(40, 40, 40, 0.4);<br>
            --black: #1B2B34;<br>
            --black-hover: #343D46;<br>
            --black-light: #4F5B66;<br>
            --white: white;<br>
            --blue-light: #5FB3B3;<br>
            --blue: #6699CC;<br>
            --blue-hover: #5FB3B3;<br>
            --green-light: #82f975;<br>
            --green: #99C794;<br>
            --green-hover: #6ba365;<br>
            --red-light: #f77e84;<br>
            --red: #EC5f67;<br>
            --red-hover: #e03a42;<br>
            --orange-light: #FAC863;<br>
            --orange: #F99157;<br>
            --orange-hover: #ea783a;<br>
            --info-blue-light: #7fd8d8;<br>
            --info-blue: #5fb3b3;<br>
            --info-blue-hover: #50a0a0;
        `;
    }
}