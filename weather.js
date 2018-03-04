$(document).ready(function() {
    $('form').submit(function() {
        var city = $('#city').val();

        
        var key = "27e9e671edb671f0cb2a4b87a9f01cfe"; 
        var url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${key}`;
        console.log(city);
        $.get(url, function(res) {
            console.log(res);
            //console.log('hello');
            var temp = Math.floor(9/5 * (res.main.temp - 273) + 32);
            var tempMin = Math.floor(9/5 * (res.main.temp_min - 273) + 32);
            var tempMax = Math.floor(9/5 * (res.main.temp_max - 273) + 32);
            $('#tempHead').html('Temperature');
            $('#cityName').html(res.name);
            $('#temperature').html("Current: " + temp);
            $('#templow').html(`Low: ${tempMin}`);
            $('#temphigh').html(`High: ${tempMax}`);

            if (temp > 60) {
                $('#wrapper').css('background-color', 'red');
            }
            else {
                $('#wrapper').css('background-color','blue');
            }
        }, 'json');
        $('#city').val('');
        return false;
        
        //console.log('hello');
    })
})