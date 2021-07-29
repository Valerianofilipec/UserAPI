import fs from 'fs';
import path from 'path';

import { createConnection} from './connectDB';

(async () => {
    const {client} = await createConnection();

    const fileDataBaseDir = path.join(__dirname, "migrations");

    console.log("Start Migrations", new Date())

    fs.readdir(fileDataBaseDir, (err, files) => {
        if(err) {
            console.log(err);
        }
        files.forEach(file => {
            fs.readFile(path.join(fileDataBaseDir, file), async (err, content) => {
                if(err){
                    console.log(err);
                }

                const runMigrationQuery = content.toString();
               
                await client.query(runMigrationQuery);
                console.log();
            });
        });

        console.log("Finish migrations", new Date());
    });
})();