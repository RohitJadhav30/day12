
import express from "express";
const app = express();

async function main1(){
    return "hello World";
}
  

app.get("/main1", main1);

app.listen(4000);