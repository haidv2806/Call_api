import express from "express";
import cors from 'cors';

const app = express();
const port = 3000;

app.use(cors());

app.get('/users', (req, res) => {
    const data = {
        "results": [
            {
                "gender": "female",
                "name": {
                    "title": "Ms",
                    "first": "Rushali",
                    "last": "Ramesh"
                },
                "location": {
                    "street": {
                        "number": 4330,
                        "name": "Lamington Rd"
                    },
                    "city": "Thiruvananthapuram",
                    "state": "Himachal Pradesh",
                    "country": "India",
                    "postcode": 77261,
                    "coordinates": {
                        "latitude": "8.2586",
                        "longitude": "27.3943"
                    },
                    "timezone": {
                        "offset": "-3:00",
                        "description": "Brazil, Buenos Aires, Georgetown"
                    }
                },
                "email": "rushali.ramesh@example.com",
                "login": {
                    "uuid": "abf566e5-bbc2-4632-a6fa-2d0899ad558e",
                    "username": "purpledog881",
                    "password": "whocares",
                    "salt": "SWiAphOA",
                    "md5": "54e73355e66844724a1978bd2dfb3d8d",
                    "sha1": "31593526cfc5a3bfbfd4a7b17198c948400f8284",
                    "sha256": "028d4925042770a6ddcfc49b198565c36583e1b49a9cc8c89795a95450facc6f"
                },
                "dob": {
                    "date": "1948-02-28T10:04:01.475Z",
                    "age": 76
                },
                "registered": {
                    "date": "2013-03-01T06:44:45.875Z",
                    "age": 11
                },
                "phone": "8683359969",
                "cell": "8471430558",
                "id": {
                    "name": "UIDAI",
                    "value": "202974799715"
                },
                "picture": {
                    "large": "https://randomuser.me/api/portraits/women/60.jpg",
                    "medium": "https://randomuser.me/api/portraits/med/women/60.jpg",
                    "thumbnail": "https://randomuser.me/api/portraits/thumb/women/60.jpg"
                },
                "nat": "IN"
            }
        ],
        "info": {
            "seed": "48e7359d81976e1d",
            "results": 1,
            "page": 1,
            "version": "1.4"
        }
    };

    res.json(data);
});

app.listen(port, () => {
    console.log(`Server đang chạy tại http://localhost:${port}`);
});