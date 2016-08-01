import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
  // code to run on server at startup
});
Meteor.publish('resolutions', function() {

    return Resolutions.find()
})



Meteor.methods({
    addResolution: function( Fname,Lname,email,password,cpassword,address,phone) {
        Resolutions.insert({
            Fname: Fname,
            Lname: Lname,
           email: email,
            password : password,
            cpassword: cpassword,
            address:address,
            phone:phone
           // , createdAt: new Date()

        })
    }
    , deleteResolution: function(id) {
        Resolutions.remove(id)
    }
    , updateResolution: function(id, checked) {
        Resolutions.update(id, {$set: {checked: checked}})
    }
})