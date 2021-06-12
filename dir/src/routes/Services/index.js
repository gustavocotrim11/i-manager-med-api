"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routesServices = void 0;
const express_1 = require("express");
const ServiceController_1 = require("../../controllers/ServiceController");
const routesServices = express_1.Router();
exports.routesServices = routesServices;
const bloodTypeControlle = new ServiceController_1.ServiceController();
routesServices.get('/', bloodTypeControlle.getAll);
routesServices.post('/register', bloodTypeControlle.set);
