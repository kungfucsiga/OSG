
define(['knockout','jquery'],function(ko,$) {

    var game = {
        
        gameVisibility: ko.observable(true),
        
        init: function() {
            
            game.showAllUsers();
        },
        
        showAllUsers: function() {
            
            require(['text!../app/modules/game/templates/checkPlayers.html'],function(checkPlayers) {

                var url = global.getBaseUrl() + "model/users/usersModel.php";;
                $.ajax({
                    url: url,
                    data: {event:'showAllUsers'},
                    type: 'POST',
                    dataType: 'json',
                    success: function(res) {
                        
                        var tpl = _.template(checkPlayers, {users:res});
                        $(".players-container").append(tpl);
                    }
                });
            });
        },
        
        startGame: function() {
            
            require(['text!../app/modules/game/templates/initPlayers.html'],function(initPlayers) {
                
                $("#game-view .players-container").remove();
                
                
            });
        }
    }
    
    return game;
})

