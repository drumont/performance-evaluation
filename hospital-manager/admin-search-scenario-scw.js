import http from 'k6/http';
import { check, group, sleep, fail } from 'k6';

export let options = {
    duration: '1m',
    vus: 50,
    thresholds: {
        http_req_duration: ['p(95)<500'], // 95 percent of response times must be below 500ms
    },
    cloud: {
        projectID: "xx",
        name: "admin-search-scenario"
    }
};

const url = "https://openmairieshieldzvbk6t0l-container-adoring-niel.functions.fnc.fr-par.scw.cloud/api/v1/hospital-partner-exchange/birth/admin/search"
const token = "Bearer token"
const headers = { Authorization: token };
const data =  {}

export default function() {
    http.post(url, data, { headers: headers })
    sleep(1)
}


