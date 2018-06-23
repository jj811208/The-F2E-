//控制上方的menu
let selectedHanderItem;

let init = () =>{
    newChat();
    selectedHanderItem = document.getElementsByClassName('headerBar-menuItem')[0];
}

let newChat = ()=>{

    var ctx = document.getElementById('myChart').getContext('2d');
    var chart = new Chart(ctx, {
        // The type of chart we want to create
        type: 'line',
        // The data for our dataset
        data: {
            labels: ["6 JUN", "7 JUN", "8 JUN", "9 JUN", "10 JUN", "11 JUN", "12 JUN", "13 JUN"],
            datasets: [{
                label: "A",
                backgroundColor: 'rgba(255, 99, 132, 0)',
                borderColor: 'rgb(255, 99, 132)',
                data: [500, 500, 2500, 3000, 2400, 500, 900, 2000],
            },{
                label: "B",
                backgroundColor: 'rgba(255, 99, 132, 0)',
                borderColor: '#7ED321',
                data: [7400, 7000, 5500, 7400, 5600, 6200, 7600, 7400],
            },{
                label: "C",
                backgroundColor: 'rgba(255, 99, 132, 0)',
                borderColor: '#4A90E2',
                data: [6200, 5500, 2000, 4000, 3700, 5500, 6500, 5000],
            }]
        },
        // Configuration options go here
        options: {
        elements: {
            line: {
                tension: 0, // disables bezier curves
            }
        }}
    });
}

let selectHanderItem = (clickedItem) => {
    selectedHanderItem.classList.toggle('headerBar-menuItemChecked');
    clickedItem.classList.toggle('headerBar-menuItemChecked');
    selectedHanderItem=clickedItem;
}