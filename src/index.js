import path from 'path';

import morgan from 'morgan';
import express, { urlencoded } from 'express';
import { engine } from 'express-handlebars';
import route from './routes/index.js';
const app = express();
const port = 1000;

// Lấy đường dẫn của thư mục chứa tệp tin hiện tại
const currentDirectory = path.dirname(import.meta.url);
// Xử lý đường dẫn để loại bỏ cả "file:/" và các ký tự / hoặc \ ở đầu
const cleanedPath = currentDirectory.replace(/^file:[/\\]+/, '');
//static files

app.use(express.static(path.join(cleanedPath, 'public')));

app.use(morgan('combined'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.engine('hbs', engine({ extname: '.hbs' }));
app.set('view engine', 'hbs');

// Kết hợp với "resources/views"
const viewsPath = path.join(cleanedPath, 'resources/views');
// Cấu hình Express
app.set('views', viewsPath);

// Routes init
route(app);

app.listen(port, () =>
    console.log(`example listening at http://localhost:${port}`),
);
