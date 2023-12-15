import axios from "axios";

const baseAxios = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_GATEWAY_URL + "/api/v1"
})

interface PayoutParams {
  limit?: number;
  page?: number;
  query?: string;
}

class PayoutService {
  getPayouts(params: PayoutParams) {
    return baseAxios({
      method: 'GET',
      url: '/analytics/tech-test/payouts',
      params
    })
  }

  searchPayouts(params: PayoutParams) {
    return baseAxios({
      method: 'GET',
      url: '/analytics/tech-test/search',
      params
    })
  }
}

export default PayoutService