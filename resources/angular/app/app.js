const app = angular.module("mainApp", ['ngRoute']);
const API_URL = "http://localhost:3000/";
// SPA
app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "resources/views/home.html",
        // controller: "listStudent"
    })
    .when("/quiz", {
        templateUrl : "resources/views/quiz.html",
        controller: "fillDataSubjects"
    })
    .when("/register", {
        templateUrl : "resources/views/register.html",
        controller: "NextStep"
    })
    .when("/cart-shopping", {
        templateUrl : "resources/views/cart-shopping.html",

    })
    .when("/faq", {
        templateUrl : "resources/views/faq.html",

    })
    .when("/infomation", {
        templateUrl : "resources/views/infomation.html",
        controller: "fillStudents"
    })
    .when("/edit-student/:id", {
        templateUrl : "resources/views/edit-student.html",
        controller: "editStudents"
    })
});