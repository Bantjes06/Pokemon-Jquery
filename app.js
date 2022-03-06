$(document).ready(function () {

    $('#get-pokemon-button').on('click', function () {
        $.get('https://pokeapi.co/api/v2/pokemon/', function (data, status) {
            let string = "";
            string += "<table class='table'>";
            $.each(data.results, function (index, item) {
                string += "<tr><td><a href='" + item.url + "'>" + item.name + "</td><td class='text-end'><button class='btn btn-danger ms-5 hide-button'>Hide</button></td></tr>";
            });
            string += "</table>";

            $('#poke-list').html(string);

            if (status) {
                $('.hide-button').on('click', function () {
                    $(this).parent().parent().hide;
                });
            }
        });
    });
});