
function Contact(name, depositAmount, withdrawAmount, initialDeposit, balance,) {
  this.firstName = name;
  this.initialDeposit = initialDeposit;
  this.depositAmount = depositAmount;
  this.withdrowAmount = withdrawAmount;
  this.balance = CheckBalance;
}

account.prototype.bank = function(depoo) {
  console.log(this.Initial);
  balance = this.Inital + depoo;
  return balance;
};

account.prototype.neb = function(client) {
  if (this.Initial < client) {
    alert("insufficient amount");
  } else {
    balance = this.Inital - client;

    return balance;
  }
};
$(document).ready(function() {
  $("#submit1").click(function() {
    // alert("litty")
    var name2 = $("input#name").val();
    var initial2 = parseInt($("input#initial").val());
    info = new account(name2, initial2);
    console.log(info);
    $("#first").hide();
    $("#second").show();
    $("#third").show();
  });
  $("#submit2").click(function() {
    var drop = parseInt($("input#money").val());
    info.bank(drop);

    alert("you deposit cash" + balance);
  });
  $("#submit3").click(function() {
    var purchase = parseInt($("input#coins").val());
    info.neb(purchase);
    alert(" There is cash" + balance);
  });
});
var info, balance;

function account(names, initial) {
  this.Names = names;
  this.Inital = initial;
}
account.prototype.bank = function(depoo) {
  console.log(this.Initial);
  balance = this.Inital + depoo;
  return balance;
};

account.prototype.neb = function(client) {
  if (this.Initial < client) {
    alert("insufficient amount");
  } else {
    balance = this.Inital - client;

    return balance;
  }
};

$(document).ready(function() {
  $("#submit1").click(function() {
    // alert("litty")
    var name2 = $("input#name").val();
    var initial2 = parseInt($("input#initial").val());
    info = new account(name2, initial2);
    console.log(info);
    $("#first").hide();
    $("#second").show();
    $("#third").show();
  });
  $("#submit2").click(function() {
    var drop = parseInt($("input#money").val());
    info.bank(drop);

    alert("you deposit cash" + balance);
  });
  $("#submit3").click(function() {
    var purchase = parseInt($("input#coins").val());
    info.neb(purchase);
    alert(" There is cash" + balance);
  });
});
