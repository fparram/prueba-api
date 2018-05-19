//Cambia idioma de datatables
var idioma_espanol = {
    "sProcessing": "Procesando...",
    "sLengthMenu": "Mostrar _MENU_ registros",
    "sZeroRecords": "No se encontraron resultados",
    "sEmptyTable": "Ningún dato disponible en esta tabla",
    "sInfo": "Mostrando registros del _START_ al _END_ de un total de _TOTAL_ registros",
    "sInfoEmpty": "Mostrando registros del 0 al 0 de un total de 0 registros",
    "sInfoFiltered": "(filtrado de un total de _MAX_ registros)",
    "sInfoPostFix": "",
    "sSearch": "Buscar:",
    "sUrl": "",
    "sInfoThousands": ",",
    "sLoadingRecords": "Cargando...",
    "oPaginate": {
        "sFirst": "Primero",
        "sLast": "Último",
        "sNext": "Siguiente",
        "sPrevious": "Anterior"
    },
    "oAria": {
        "sSortAscending": ": Activar para ordenar la columna de manera ascendente",
        "sSortDescending": ": Activar para ordenar la columna de manera descendente"
    }
};
//Fin cambia idioma
var listar = function () {
    var periodo = document.formulario.consulta_periodo.value;
    var desde = document.formulario.consulta_fdesde.value;
    var hasta = document.formulario.consulta_fhasta.value;

    console.log(periodo, desde, hasta);
    var table = $("#dt_datos").DataTable({
        "ajax": {
            "method": "POST",
            "url": "index/listar",
            "data": {"periodo": periodo, "desde": desde, "hasta": hasta}
        },
        "columns": [
            {"data": "indice"},
            {"data": "fecha"},
            {"data": "ind_act"},
            {"data": "ind_ant"},
            {"data": "ind_may"},
            {"data": "ind_med"},
            {"data": "ind_men"},
            {"data": "ind_pro"},
            {"data": "ind_var"}
        ],
        "language": idioma_espanol
    });
};
var graficar = function() {

    var fechas = [];
    var valores = [];
    var valores2 = [];
    var valores3 = [];
    var valores4 = [];
    var valores5 = [];

    var indice = document.formulario2.graficar_indice.value;
    var periodo = document.formulario2.graficar_periodo.value;
    var desde = document.formulario2.graficar_fdesde.value;
    var hasta = document.formulario2.graficar_fhasta.value;
    console.log(indice, periodo, desde, hasta);
    $.ajax({
        type: "POST",
        url: "index/graficar",
        data: {"indice": indice, "periodo": periodo, "desde": desde, "hasta": hasta},
        success: function (data) {            
            var obj = JSON.parse(data);
            
            $.each(obj, function(i,item) {
                fechas.push(item.fecha);
                valores.push(item.ind_act);
                valores2.push(item.ind_ant);
                valores3.push(item.ind_may);
                valores4.push(item.ind_med);
                valores5.push(item.ind_men);
            });
//            var fechas = ["Enero", "Febrero", "Marzo", "Abril", "Mayo"];
//            var valores = [65, 59, 80, 81, 56, 55, 40];

            var ctx = document.getElementById("myChart");
            var myChart = new Chart(ctx, {
                type: 'line',
                data: {
                    labels: fechas,
                    datasets: [
                        {
                            label: "Ind_act",
                            fill: true,
                            lineTension: 0.1,
                            backgroundColor: "rgba(75,192,192,0.4)",
                            borderCapStyle: 'butt',
                            borderDash: [],
                            borderDashOffset: 0.0,
                            borderJoinStyle: 'miter',
                            pointBorderColor: "rgba(75,192,192,1)",
                            pointBackgroudColor: "#fff",
                            pointBorderWidth: 1,
                            pointHoverRadius: 5,
                            pointHoverBackgroudColor: "rgba(75,192,192,1)",
                            pointHoverBorderColor: "rgba(220,220,220,1)",
                            pointHoverBorderWidth: 2,
                            pointRadius: 1,
                            pointHitRadius: 10,
                            data: valores,
                            spanGaps: false
                        },
                        {
                            label: "Ind_ant",
                            fill: true,
                            lineTension: 0.1,
                            backgroundColor: "rgba(242,100,100,0.4)",
                            borderCapStyle: 'butt',
                            borderDash: [],
                            borderDashOffset: 0.0,
                            borderJoinStyle: 'miter',
                            pointBorderColor: "rgba(242,100,100,1)",
                            pointBackgroudColor: "#fff",
                            pointBorderWidth: 1,
                            pointHoverRadius: 5,
                            pointHoverBackgroudColor: "rgba(242,100,100,1)",
                            pointHoverBorderColor: "rgba(220,220,220,1)",
                            pointHoverBorderWidth: 2,
                            pointRadius: 1,
                            pointHitRadius: 10,
                            data: valores2,
                            spanGaps: false
                        },
                        {
                            label: "Ind_may",
                            fill: true,
                            lineTension: 0.1,
                            backgroundColor: "rgba(242,238,100,0.4)",
                            borderCapStyle: 'butt',
                            borderDash: [],
                            borderDashOffset: 0.0,
                            borderJoinStyle: 'miter',
                            pointBorderColor: "rgba(242,238,100,1)",
                            pointBackgroudColor: "#fff",
                            pointBorderWidth: 1,
                            pointHoverRadius: 5,
                            pointHoverBackgroudColor: "rgba(242,238,100,1)",
                            pointHoverBorderColor: "rgba(220,220,220,1)",
                            pointHoverBorderWidth: 2,
                            pointRadius: 1,
                            pointHitRadius: 10,
                            data: valores3,
                            spanGaps: false
                        },
                        {
                            label: "Ind_med",
                            fill: true,
                            lineTension: 0.1,
                            backgroundColor: "rgba(147,100,242,0.4)",
                            borderCapStyle: 'butt',
                            borderDash: [],
                            borderDashOffset: 0.0,
                            borderJoinStyle: 'miter',
                            pointBorderColor: "rgba(147,100,242,1)",
                            pointBackgroudColor: "#fff",
                            pointBorderWidth: 1,
                            pointHoverRadius: 5,
                            pointHoverBackgroudColor: "rgba(147,100,242,1)",
                            pointHoverBorderColor: "rgba(220,220,220,1)",
                            pointHoverBorderWidth: 2,
                            pointRadius: 1,
                            pointHitRadius: 10,
                            data: valores4,
                            spanGaps: false
                        },
                        {
                            label: "Ind_men",
                            fill: true,
                            lineTension: 0.1,
                            backgroundColor: "rgba(128,242,100,0.4)",
                            borderCapStyle: 'butt',
                            borderDash: [],
                            borderDashOffset: 0.0,
                            borderJoinStyle: 'miter',
                            pointBorderColor: "rgba(128,242,100,1)",
                            pointBackgroudColor: "#fff",
                            pointBorderWidth: 1,
                            pointHoverRadius: 5,
                            pointHoverBackgroudColor: "rgba(128,242,100,1)",
                            pointHoverBorderColor: "rgba(220,220,220,1)",
                            pointHoverBorderWidth: 2,
                            pointRadius: 1,
                            pointHitRadius: 10,
                            data: valores5,
                            spanGaps: false
                        }
                    ]
                },
                options: {
                    scales: {
                        yAxes: [{
                                ticks: {
                                    beginAtZero: true
                                }
                            }]
                    }
                }
            });
        }
    });
}

