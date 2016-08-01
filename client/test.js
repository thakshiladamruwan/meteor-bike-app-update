Meteor.subscribe('resolutions')

Template.rdetails.helpers({
    resolutions: function() {

        return Resolutions.find()
    }

})
Template.register.events({
    'submit #xxx': function(event) {
        var Fname = event.target.Fname.value
        var Lname = event.target.Lname.value
        var email= event.target.email.value
        var password = event.target.password.value
        var cpassword = event.target.cpassword.value
        var address = event.target.address.value


        event.target.Fname.value =''
        event.target.Lname.value =''
        event.target.email.value =''
        event.target.password.value = ''
        event.target.cpassword.value= ''
        event.target.address.value= ''
       console.log(Fname);
        //console.log(Lname);
        //console.log(email);
       Meteor.call('addResolution', Fname,Lname,email,password,cpassword,address)
      //  Meteor.call('addResolution', title)



        return false
    }})

Template.rdetails.events({
    'click .delete': function(event) {


      Meteor.call('deleteResolution', this._id, !this.checked)

    }
    , 'click .toggle-checked': function() {
        Meteor.call('updateResolution', this._id, !this.checked)
    }
})

