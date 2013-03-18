
define(['knockout','jquery','global','underscore','bootstrap'],function(ko,$,global,_) {

    var users = {
        
        usersVisibility: ko.observable(false),
        showUsersVisibility: ko.observable(false),
        usersAlertText: ko.observable(''),
        
        showAllUsers: function() {
            
            require(['text!../app/modules/users/templates/showUsers.html'],function(showUsers) {
                
                $("#all-users").remove();
                
                var url = global.getBaseUrl() + "model/users/usersModel.php";;
                $.ajax({
                    url: url,
                    data: {event:'showAllUsers'},
                    type: 'POST',
                    dataType: 'json',
                    success: function(res) {
                        
                        var tpl = _.template(showUsers, {users:res});
                        $(".all-users-container").append(tpl);
                    }
                });   
            });
        },
        
        addUser: function() {
            
            users.showUsersVisibility(false);
            
            if ( $("#add-user-form").length == 0 ) {
                
                require(['text!../app/modules/users/templates/addUserForm.html'],function(addUserForm) {
                    $("#users-view").append(addUserForm);
                    $('.gender-radio').button();
                    
                    $("#add-user-form").validate({
                        messages: global.getValidateMessages()
                    });
                    
                    ko.applyBindings(users,$("#users-view")[0]);
                });
            }
        },
        
        saveUserForm: function() {
            
            var form = $("#add-user-form");
            var isValid = form.valid();
            if (isValid) {
                
                var data = form.serialize();
                var url = global.getBaseUrl() + "model/users/usersModel.php";
                
                $.ajax({
                    url: url,
                    data: data + '&event=addUser',
                    type: 'POST',
                    dataType: 'json',
                    success: function(res) {
                        if (res.success) {
                            users.usersAlertText('Felhasználó felvétele sikeresen megtörtént');
                            global.showAlertSuccess($("#users-view"));
                        }
                    }
                })
            }
        }
    }
    
    return users;
})

