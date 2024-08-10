import { GoogleGenerativeAI } from "@google/generative-ai";
const API_KEY = process.env.REACT_APP_GEMINI_KEY;

const genAI = new GoogleGenerativeAI(API_KEY);

const AI = genAI.getGenerativeModel({ model: "gemini-1.5-flash"});

export default AI;