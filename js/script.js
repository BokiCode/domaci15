$(document).ready(function () {
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
});