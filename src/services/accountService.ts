import axios from 'axios';
import { User } from '../entities';
import { ENV } from '../../config/env';

const getAccessToken = async () => {
  const response = await axios.post('https://api.wealthkernel.com/oauth/token', {
    grant_type: 'client_credentials',
    client_id: ENV.WK_CLIENT_ID,
    client_secret: ENV.WK_CLIENT_SECRET,
  });
  return response.data.access_token;
};

const createWealthKernelAccount = async (
  user: User,
  accountType: string,
  accessToken: string
) => {
  const payload = {
    customer_id: user.wealthKernelCustomerId,
    type: accountType,
  };

  try {
    const wkResponse = await axios.post(
      'https://api.wealthkernel.com/v1/accounts',
      payload,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          'Idempotency-Key': `${user.id}-${accountType}`,
        },
      }
    );
    return wkResponse.data;
  } catch (error) {
    throw new Error('Failed to create account with WealthKernel API');
  }
};

export default getAccessToken;
export { createWealthKernelAccount };
