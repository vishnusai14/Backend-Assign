const productModel = require("../Database/db").productModel;
const timer = require("../utils/utils").timer;

var CronJob = require("cron").CronJob;
const job = new CronJob(
  "13 18 * * *",
  function () {
    console.log("Heelolooo");
    productModel
      .find({ approved: false })
      .then(async (data) => {
        console.log("The total products to be approved : " + data.length);

        for (let k = 0; k < data.length; k++) {
          console.log("Approving Product : " + (k + 1));
          await productModel.updateOne({ id: data[k].id }, { approved: true });
          console.log("Waiting for 3 seconds");
          await timer(3000);
          console.log("Waited for 3 Seconds");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  },
  null,
  true,
  "Asia/Colombo"
);

module.exports = job;
