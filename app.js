var createError = require('http-errors');
var express = require('express');
var path = require('path');
var logger = require('morgan');

var usersRouter = require('./routes/users');

var app = express();
const Sentry = require('@sentry/node');

Sentry.init({ dsn: 'https://09747b74309e40b88943f4f6917f8d3e@sentry.io/1871752' });
app.use(Sentry.Handlers.requestHandler());

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/users', usersRouter);

app.use(Sentry.Handlers.errorHandler());

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  res.status(404).send("404");
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.end(res.sentry + "\n");
});

module.exports = app;
