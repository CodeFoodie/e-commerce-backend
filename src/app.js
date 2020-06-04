/* eslint-disable no-unused-vars */
import { config } from 'dotenv';
import express from 'express';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import path from 'path';
import cors from 'cors';
import router from './routes';

config();

const PORT = process.env.PORT || 5000;
// Create global app object
const app = express();

// Normal express config defaults
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/json' }));
app.use(express.static('./docs'));
app.use(cookieParser());

const isProduction = process.env.NODE_ENV === 'production';
// base route response
app.get('/', (req, res) => {
  res.sendFile(path.resolve('./docs/index.html'));
});

app.use('/api/v1/', router);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// development error handler
// will print stacktrace
if (!isProduction) {
  app.use((err, req, res, next) => {
    // eslint-disable-next-line no-console
    console.log(err.stack);
    res.status(err.status || 500).json({
      errors: {
        message: err.message,
        error: err,
      },
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use((err, req, res, next) => {
  res.status(err.status || 500).json({
    errors: {
      message: err.message,
      error: {},
    },
  });
});


app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});

export default app;
