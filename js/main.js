/*********************************************************************************
* WEB422 – Assignment 1
* I declare that this assignment is my own work in accordance with Seneca Academic Policy.
* No part of this assignment has been copied manually or electronically from any other source
* (including web sites) or distributed to other students.
*
* Name: Calvin Ho Student ID: 035594092 Date: 1/16/2019
*
*
********************************************************************************/ 

$(document).ready(function() {
    console.log("jQuery working");

    //click for teams
    $( "#teams-menu" ).on( "click", function(){
        event.preventDefault();
        $.get( "https://dry-journey-47352.herokuapp.com/teams")
            .done(function( data ){
                $( "#data" ).empty();
                $( "#data" ).append("<h3>Teams</h3>");
                $( "#data" ).append(JSON.stringify(data));
            })
    });

    //click for employees
    $( "#employees-menu" ).on( "click", function(){
        event.preventDefault();
        $.get( "https://dry-journey-47352.herokuapp.com/employees")
            .done(function( data ){
                $( "#data" ).empty();
                $( "#data" ).append("<h3>Employees</h3>");
                $( "#data" ).append(JSON.stringify(data));
            })
    });

    //click for projects
    $( "#projects-menu" ).on( "click", function(){
        event.preventDefault();
        $.get( "https://dry-journey-47352.herokuapp.com/projects")
            .done(function( data ){
                $( "#data" ).empty();
                $( "#data" ).append("<h3>Projects</h3>");
                $( "#data" ).append(JSON.stringify(data));
            })
    });

    //click for positions
    $( "#positions-menu" ).on( "click", function(){
        event.preventDefault();
        $.get( "https://dry-journey-47352.herokuapp.com/positions")
            .done(function( data ){
                $( "#data" ).empty();
                $( "#data" ).append("<h3>Positions</h3>");
                $( "#data" ).append(JSON.stringify(data));
            })
    });
});

