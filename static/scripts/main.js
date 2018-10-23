// select currently active department & return the data to python @app.route

$("#departments").change(function() {
    let cur_value = $('option:selected', this).val();
    console.log(cur_value);
    $.ajax({
        data: {
            dept_name : cur_value
        },        

        type: 'POST', // to python @app.route
        url: window.location.href.indexOf("edit") !== -1 ? "/service_update" : "service"
    })
    .done((data) => {
        if (data.error) {
            console.log(data.error)
        } else {
            console.log(data);
            let optionToFill = $("#service");
            optionToFill.find('option').remove().end();
            data.data.forEach((element) => {
                optionToFill.append(`<option value="${element}" class="dept">${element}</option>`);
            });
        }
    });    
});

