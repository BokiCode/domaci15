// $(document).ready(function () {
//     $.ajax({
//         url: "https://reqres.in/api/users?page=2",
//         success: function (response) {
//             for(let user in response.data) {
//                 let email = response.data[user]["email"];
//                 let name = response.data[user]["first_name"];
//                 $("#userList").append("<p>"+ email + " - " + name +"</p>");
//             }
//         }
//     });
//     $.ajax({
//         url: "https://reqres.in/api/users",
//         type: "POST",
//         data: {
//             name: "Toma",
//             job: "programer",
//         },
//         success: function(response) {
//             console.log(response);
//         }
//     });
//     $("#deleteButton").click(function() {
//        $.ajax({
//            url: "https://reqres.in/api/users/2",
//            type: "DELETE",
//            success: function(response) {
//                console.log(response);
//            }
//        });
//     });
//     $("#registerButton").click(function () {
//         let newEmail = $("#emailInput").val();
//         let newName = $("#nameInput").val();
//        $.ajax({
//            url: "https://reqres.in/api/users?page=2",
//            type: "POST",
//            data: {
//                name: newName,
//                email: newEmail
//            },
//            success: function(response) {
//                console.log(response);
//            }
//        });
//     });
// });
$(document).ready(function () {
    $.ajax({
        url: "https://reqres.in/api/users?page=2",
        success: function (response) {
            for (const user in response.data) {
                const email = response.data[user]["email"];
                const name = response.data[user]["first_name"];
                const avatar = response.data[user]["avatar"]
                $("body").append("<p>" + email + " - " + name +  "</p>");
            }
        }

    });
});