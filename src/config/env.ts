import dotenv from 'dotenv';
dotenv.config();

export const ENV = {
    APP_NAME: process.env.APP_NAME || 'ByaheGo',
    PORT: process.env.PORT || 3000,
    NODE_ENV: process.env.NODE_ENV || 'development'
}