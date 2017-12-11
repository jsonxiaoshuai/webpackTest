'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var initCtrl = {
	init: function init(app, router) {
		var _this = this;

		app.use(router(function (_) {
			_.get('/index/index', function () {
				var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(ctx, next) {
					return regeneratorRuntime.wrap(function _callee$(_context) {
						while (1) {
							switch (_context.prev = _context.next) {
								case 0:
									_context.next = 2;
									return ctx.render('index', {
										title: '测试'
									});

								case 2:
									ctx.body = _context.sent;

								case 3:
								case 'end':
									return _context.stop();
							}
						}
					}, _callee, _this);
				}));

				return function (_x, _x2) {
					return _ref.apply(this, arguments);
				};
			}());
		}));
	}
};

exports.default = initCtrl;