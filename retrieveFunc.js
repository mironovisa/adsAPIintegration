import { GoogleAdsApi } from "google-ads-api";
import dotenv from "dotenv";

dotenv.config();

export const credentials = {
  clientId: process.env.CLIENT_ID,
  clientSecret: process.env.CLIENT_SECRET,
  developerToken: process.env.DEVELOPER_TOKEN,
  refreshToken: process.env.REFRESH_TOKEN,
};

export async function retrieveCampaignCost(
  credentials,
  customerId,
  sinceDate,
  endDate,
  strictFilter
) {
  try {
    const client = new GoogleAdsApi({
      client_id: credentials.clientId,
      client_secret: credentials.clientSecret,
      developer_token: credentials.developerToken,
    });

    const formattedCustomerId = formatCustomerId(customerId);
    const formattedSinceDate = formatDate(sinceDate);
    const formattedEndDate = formatDate(endDate);

    const customer = client.Customer({
      customer_id: formattedCustomerId,
      refresh_token: credentials.refreshToken,
    });

    const campaigns = await customer.report({
      entity: "campaign",
      attributes: [
        "campaign.id",
        "campaign.name",
        "campaign_budget.amount_micros",
      ],
      from_date: formattedSinceDate,
      to_date: formattedEndDate,
    });

    if (strictFilter) {
      return campaigns.filter(
        (campaign) => campaign.campaign.end_date !== "2037-12-30"
      );
    }

    return campaigns;
  } catch (error) {
    throw new Error(`Error retrieving campaign data: ${error.message}`);
  }
}

export function formatDate(dateString) {
  const date = new Date(dateString);
  if (isNaN(date.getTime())) {
    throw new Error(
      "Invalid date format, please provide a valid date format like yyyy-mm-dd, yyyy.mm.dd."
    );
  }
  return date.toISOString().split("T")[0];
}

export function formatCustomerId(customerId) {
  if (!/^\d+$/.test(customerId)) {
    throw new Error(
      "Invalid customerId format, it must be a number with no spaces or letters."
    );
  }
  return customerId;
}
