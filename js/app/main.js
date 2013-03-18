
require.config({
    
    baseUrl: 'js/libs',
    paths: {
        jquery: 'jquery/jquery.min',
        knockout: 'knockout/knockout',
        underscore: 'underscore/underscore-min',
        text: 'requirejs/text',
        bootstrap: 'bootstrap/bootstrap.min',
        validate: 'jquery-validate/jquery.validate.min',
        global: '../app/global',
        mainModule: '../app/modules/main/mainModule',
        gameModule: '../app/modules/game/gameModule',
        usersModule: '../app/modules/users/usersModule',
        optionsModule: '../app/modules/options/optionsModule'
    },
    shim: {
        'underscore': {
            exports: '_'
        }
    }
})




require(['global','mainModule','gameModule','usersModule','optionsModule','jquery','knockout','underscore','text','bootstrap','validate'],function(globalModule,mainModule,gameModule,usersModule,optionsModule,$,ko) {
    
    global = globalModule;
    main = mainModule;
    game = gameModule;
    users = usersModule;
    options = optionsModule;
    
    ko.applyBindings(main, $("#navbar")[0]);
    
    ko.applyBindings(game, $("#game-view")[0]);
    ko.applyBindings(users,$("#users-view")[0]);
    ko.applyBindings(options,$("#options-view")[0]);
    
    game.init();
})