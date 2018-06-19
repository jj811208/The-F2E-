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
            labels: ["January", "February", "March", "April", "May", "June", "July"],
            datasets: [{
                label: "My First dataset",
                backgroundColor: 'rgba(255, 99, 132, 0)',
                borderColor: 'rgb(255, 99, 132)',
                data: [0, 10, 5, 2, 20, 10, 15],
            }]
        },
        // Configuration options go here
        options: {}
    });
}

let selectHanderItem = (clickedItem) => {
    selectedHanderItem.classList.toggle('headerBar-menuItemChecked');
    clickedItem.classList.toggle('headerBar-menuItemChecked');
    selectedHanderItem=clickedItem;
}