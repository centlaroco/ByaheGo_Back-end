import express, { NextFunction, Request, Response } from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import helmet from 'helmet';
import hpp from 'hpp';
import {ENV} from '@/config/env'
// import routes from '@/routes'

const app = express();

app.use(cors());
app.use(cookieParser());
app.use(helmet());
app.use(hpp());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/',(req: Request, res: Response)=>{
    res.status(200).json({
        status: 'success',
        message: `Welcome to ${ENV.APP_NAME} API`,
        time: new Date().toLocaleDateString()
    })
})

// health check route
app.get('/api/health', (req: Request, res:Response)=>{
    res.status(200).json({
        message: 'Server is healthy',
        status:'success',
        timestamp: new Date().toISOString(),
        env: ENV.NODE_ENV
    })
})

// app.use('/api',routes);

//404 request
app.use((req: Request, res: Response)=>{
    res.status(404).json({
        status: 'error',
        message: `cannot ${req.method} ${req.originalUrl}`
    })
})

export default app;