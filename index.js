import express from 'express';
import { dirname , join } from 'path';
import { fileURLToPath } from 'url';
const app = express();
const currentFileUrl= new URL(import.meta.url);
const currentDirname = dirname(fileURLToPath(currentFileUrl));
const publicDirectoryPath = join(currentDirname, 'public');
const staticDirectoryPath = join(currentDirname, 'static');
app.use(express.static(staticDirectoryPath));


app.get('/', (req, res) => {
     res.sendFile(join(publicDirectoryPath, 'index.html'));
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

