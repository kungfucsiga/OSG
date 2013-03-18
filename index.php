<!DOCTYPE html>
<html>
    <head>
        <title>OSG</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <link href="css/bootstrap.min.css" rel="stylesheet" media="screen">
        <link href="css/bootstrap-responsive.min.css" rel="stylesheet" media="screen">
        <link href="css/osg.css" rel="stylesheet" media="screen">
    </head>
    <body>

        <header>
            <div class="navbar">
                <div class="navbar-inner">
                    <ul id="navbar" class="nav">
                        <li data-bind="css: { active: menuElement1Active }"><a data-bind="click: start" href="#">Kezdés</a></li>
                        <li data-bind="css: { active: menuElement2Active }"><a data-bind="click: users" href="#" onfocus="blur()">Felhasználók</a></li>
                        <li data-bind="css: { active: menuElement3Active }"><a data-bind="click: options" href="#">Beállítások</a></li>
                    </ul>
                </div>
            </div>
        </header>

        <div class="container">
            <div class="row-fluid">
                <div class="span12">
                    
                    <div data-bind="visible: gameVisibility" id="game-view">
                        <h2>Kik szexelnek?</h2>
                        <div class="players-container"></div>
                        <a data-bind="click: startGame" class="btn pussy-pink-btn" href="#" onfocus="blur()">SZEX!</a>
                    </div>
                    
                    <div data-bind="visible: usersVisibility" id="users-view">
                        <div data-bind="text: usersAlertText" class="alert alert-success"></div>
                        <div data-bind="visible: showUsersVisibility" class="all-users-container"></div>
                        <a data-bind="click: addUser" href="#" onfocus="blur()">Új felhasználó felvétele</a>
                    </div>

                    <div data-bind="visible: optionsVisibility" id="options-view">
                        Beállítások
                    </div>
                    
                </div>
            </div>
        </div>
        
        <script data-main="js/app/main.js" type="text/javascript" src="js/libs/requirejs/require.js"></script>
    </body>
</html>