$(document).ready(function () {
    function fetchUserData(url,type) {
        $.ajax({
            url: url,
            type: type,
            success: function (response) {
                console.log(response);
            }
        });
    }
    $.ajax({
        url: "https://reqres.in/api/users?page=2",
        success: function (response) {
            for (const user of response.data) {
                const image = $("<img>").attr({
                    "src": user["avatar"],
                    "alt": user["first_name"] + "'s avatar",
                });
                const nameParagraph = $("<p>").html(user["first_name"]);
                const emailParagraph = $("<p>").html(user["email"]);
                const userDiv = $("<div>").append(nameParagraph, emailParagraph, image);
                $("#usersContainer").append(userDiv);
            }
        }
    });
    fetchUserData("https://reqres.in/api/users/2","GET");
    fetchUserData("https://reqres.in/api/users/23","GET");
    fetchUserData("https://reqres.in/api/unknown","GET");
    fetchUserData("https://reqres.in/api/unknown/2","GET");
    fetchUserData("https://reqres.in/api/unknown/23","GET");
    fetchUserData("https://reqres.in/api/users","POST");
    fetchUserData("https://reqres.in/api/users/2","PUT");
    fetchUserData("https://reqres.in/api/users/2","PATCH");
    fetchUserData("https://reqres.in/api/users/2","DELETE");
    fetchUserData("https://reqres.in/api/register","POST");
    fetchUserData("https://reqres.in/api/register","POST");
    fetchUserData("https://reqres.in/api/login","POST");
    fetchUserData("https://reqres.in/api/login","POST");
    fetchUserData("https://reqres.in/api/users?delay=3","GET");
});