import {
  retrieveCampaignCost,
  formatCustomerId,
  formatDate,
  credentials,
} from "./retrieveFunc.js";
function app() {
  try {
    const customerId = formatCustomerId("5248854984"); // Replace with actual customer ID
    const sinceDate = formatDate("2018.01.01"); // Replace with desired start date in yyyy-mm-dd format
    const endDate = formatDate("2020-02-01"); // Replace with desired end date in yyyy-mm-dd format

    // !!!!! ATENTION USING STRICT FILTER SETTINGS!!!!!
    const strictFilter = false; // Change this in case you want the app NOT to show the campaigns that
    // have "end_date: '2037-12-30", the Google's default date format for when
    // the campaign has no set end date or has a very distant end date. If you want it to be strictly inside the condition of dates.

    retrieveCampaignCost(
      credentials,
      customerId,
      sinceDate,
      endDate,
      strictFilter
    )
      .then((campaigns) => {
        console.log(campaigns);
      })
      .catch((error) => {
        console.error("An error occurred:", error);
      });
  } catch (error) {
    console.error("An error occurred:", error.message);
  }
}

app();
