
define([],function() {
    
    var global = {
        
        getBaseUrl: function() {
            
            var href = location.href;
            return href;
        },
        
        hideAllContainers: function() {
            
            options.optionsVisibility(false);
            users.usersVisibility(false);
            game.gameVisibility(false);
            main.menuElement1Active(false);
            main.menuElement2Active(false);
            main.menuElement3Active(false);
        },
        
        getValidateMessages: function() {
            
            var messages = {
                'first-name' : {
                    required: 'A mező kitöltése kötelező'
                },
                'last-name': {
                    required: 'A mező kitöltése kötelező'
                }
            }
            
            return messages;
        },
        
        showAlertSuccess: function(container) {
            
            $(container).find(".alert-success").fadeIn('fast',function() {
                
                
            });
        }
    }
    
    return global;
});

