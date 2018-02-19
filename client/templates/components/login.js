Template.walletLayout.helpers({
needLogin: function(){
    if(Meteor.user()==null){
        return true;
        console.log("loginしてね");
    }else{
        return false;
        console.log("loginできてる");
    }
},
userMail: function(){
    return Meteor.user().emails[0].address;
}
});