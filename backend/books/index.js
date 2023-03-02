import express from "express";
import HttpResponse from "../shared/HttpResponse.js";

export default class UserRoute {
    constructor() {
        this.app = express();
        this.httpResponse = new HttpResponse();
    }

    routes() {
        this.app.get("/", (req, res) => {
            this.httpResponse.response(Promise.resolve({ hello: "World" }), req, res);
        });
        this.app.get("/books", (req, res) => {
            const q = "SELECT * FROM books";

            db.query(q, (err, data) => {
                if (err) return res.json(err)
                return res.json(data)
            })
            this.httpResponse.response(Promise.resolve({ hello: "World" }), req, res);
        });

        return this.app;
    }
}