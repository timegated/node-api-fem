"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.start = exports.router = exports.app = void 0;

var _express = _interopRequireDefault(require("express"));

var _bodyParser = require("body-parser");

var _morgan = _interopRequireDefault(require("morgan"));

var _config = _interopRequireDefault(require("./config"));

var _cors = _interopRequireDefault(require("cors"));

var _db = require("./utils/db");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import { signup, signin, protect } from './utils/auth'
// import userRouter from './resources/user/user.router'
// import itemRouter from './resources/item/item.router'
// import listRouter from './resources/list/list.router'
const app = (0, _express.default)();
exports.app = app;

const router = _express.default.Router();

exports.router = router;
app.disable('x-powered-by');
app.use((0, _cors.default)());
app.use((0, _bodyParser.json)());
app.use((0, _bodyParser.urlencoded)({
  extended: true
}));
app.use((0, _morgan.default)('dev')); // app.post('/signup', signup)
// app.post('/signin', signin)

router.get('/me', (req, res) => {
  res.send({
    me: 'hello from me route'
  });
});
app.use('/api', router); // app.use('/api', protect)
// app.use('/api/user', userRouter)
// app.use('/api/item', itemRouter)
// app.use('/api/list', listRouter)

const start = async () => {
  try {
    await (0, _db.connect)();
    app.listen(_config.default.port, () => {
      console.log(`REST API on http://localhost:${_config.default.port}/api`);
    });
  } catch (e) {
    console.error(e);
  }
};

exports.start = start;