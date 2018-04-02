App = {
  web3Provider: null,
  contracts: {},

  init: function() {
    return App.initWeb3();
  },

  initWeb3: function() {
    // Initialize web3 and set the provider to the Ganache.

    App.initContract()
  },

  initContract: function() {
    $.getJSON('BCCToken.json', function(data) {
      // Get the necessary contract artifact file and instantiate it with truffle-contract.
      
      // Set the provider for our contract.

      // Use our contract to retieve and mark the adopted pets.
      return App.getBalances();
    });

    return App.bindEvents();
  },

  bindEvents: function() {
    $(document).on('click', '#transferButton', App.handleTransfer);
  },

  handleTransfer: function(event) {
    event.preventDefault();

    var amount = parseFloat($('#BCCTokenTransferAmount').val());
    var toAddress = $('#BCCTokenTransferAddress').val();
    alert('Transfer ' + amount + ' BCC Token to ' + toAddress);
  },

  getBalances: function(adopters, account) {
    alert('Getting balances...');
  }

};

$(function() {
  $(window).load(function() {
    App.init();
  });
});
