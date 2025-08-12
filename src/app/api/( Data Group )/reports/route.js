import apiRequest from "@/axios/instacne/mainApi";
import { cookies } from "next/headers";
import qs from 'qs';

export async function GET(req) {
  try {
    const cookieStore = cookies();
    const token = cookieStore.get('token')?.value;
    const { searchParams } = new URL(req.url);

    // گرفتن آرایه metric_keys
    const metric_keys = searchParams.getAll('metric_keys');

    // بقیه پارامترها به صورت کلید-مقدار، بدون metric_keys
    const params = Object.fromEntries(
      Array.from(searchParams.entries()).filter(([key]) => key !== 'metric_keys')
    );

    // افزودن metric_keys به params به صورت آرایه
    params.metric_keys = metric_keys;

    const reportResponse = await apiRequest.get('/reports/timeseries/', {
      headers: { Authorization: `Bearer ${token}` },
      params,
      paramsSerializer: params => qs.stringify(params, { arrayFormat: 'repeat' })
    });

    if (reportResponse.status === 200) {
      return new Response(JSON.stringify(reportResponse.data, null, 2), {
        status: 200,
        headers: { "Content-Type": "application/json" }
      });
    }

  } catch (err) {
    console.log('Error =>', err);
    return new Response(JSON.stringify({ message: 'Server Error' }, null, 2), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }
}
