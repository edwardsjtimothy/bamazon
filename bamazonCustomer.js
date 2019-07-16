var mysql = require("mysql");
var inquirer = require("inquirer");
var buyWhat;
var howMany;
var remaining;

// create the connection information for the sql database
var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "ImwiJo1991!",
  database: "bamazon"
});

connection.connect(function(err) {
  if (err) throw err;
  displayInv();
  buy();
});

function displayInv() {
    connection.query("SELECT * FROM products", function(err, res) {
        if (err) throw err;
        for (var i = 0; i < res.length; i++) {
            console.log(`
            ID: ${res[i].item_id} 
            Product: ${res[i].product_name}
            Price: ${res[i].price}
            `);
          };
});
};

function buy() {
    inquirer
    .prompt([

      {  
      name: "whatToBuy",
      type: "number",
      message: "Enter the ID of the item you would like to purchase.",
      },
      {
       name:"howMany",
       type: "number",
       message: "Enter the quantity that you would like to purchase."
      }
    ])
    .then(function(answer) {
        buyWhat = answer.whatToBuy;
        howMany = answer.howMany;
        placeOrder();
    });
    
}

function placeOrder() {
    connection.query("SELECT * FROM products WHERE item_id=?",[buyWhat], function(err, res) {
        if (err) throw err;
        var product = res[0].product_name;
        remaining = res[0].stock_quantity;
        if (remaining > 0) {
            remaining -= howMany;
            console.log(`Your order has been placed! You ordered: ${howMany} ${product}`);
            updateInv();
        } else {
            console.log(`Sorry! That item is out of stock!`);
        };

    });
};

function updateInv () {
    console.log(buyWhat);
     connection.query(
        "UPDATE products SET stock_quantity=? WHERE item_id=?",
        [
          {
            remaining
          },
          {
            buyWhat
          }
        ],
        function(err, res) {
          if (err) throw err;
            console.log(res);
        }
      );
}
