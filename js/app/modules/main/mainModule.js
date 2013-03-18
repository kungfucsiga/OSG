
define(['knockout','jquery'],function(ko,$) {

    var main = {
        
        menuElement1Active: ko.observable(true),
        menuElement2Active: ko.observable(false),
        menuElement3Active: ko.observable(false),
        
        start: function() {
            
            global.hideAllContainers();
            game.gameVisibility(true);
            main.menuElement1Active(true);
        },
        
        users: function() {
            
            global.hideAllContainers();
            users.showAllUsers();
            users.usersVisibility(true);
            main.menuElement2Active(true);
        },
        
        options: function() {
            
            global.hideAllContainers();
            options.optionsVisibility(true);
            main.menuElement3Active(true);
        }
    }
    
    return main;
})

