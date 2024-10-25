import type IDoctorsRequest from "../interfaces/Doctors/IDoctorsRequest.ts";
import type IDoctorsResponse from "../interfaces/Doctors/IDoctorsResponse.ts";
import { postToServer } from '../util/UseFetchToServer';
import { API_MODX_URL } from '../config';
export async function getDoctors(request:IDoctorsRequest):Promise<IDoctorsResponse>{
    try {
        if (!request) { request = {} as IDoctorsRequest; }
        request.action = 'doctors/getDoctorsMultiList';
        request.component = 'health';
        console.log(request)
        return await postToServer(API_MODX_URL, request) as IDoctorsResponse;
    } catch (error) {
        console.log('error');
        throw error;
    }
}