import app from '@/app';
import { ENV } from '@/config/env';

const startServer = () => {
    try{
        app.listen(ENV.PORT, () => {
            console.log(`${ENV.APP_NAME}is starting successfully`)
            console.log(`Localhost: Server is running on port ${ENV.PORT}`);
            console.log(`Mode: ${ENV.NODE_ENV}`)
        })
    }
    catch(err){
        console.error('Error starting server:', err);
        process.exit(1);
    }
}

startServer();