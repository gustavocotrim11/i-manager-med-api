"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
const express_1 = require("express");
const Login_1 = require("./Login");
const Clients_1 = require("./Clients");
const Specialist_1 = require("./Specialist");
const Users_1 = require("./Users");
const Specialties_1 = require("./Specialties");
const BloodType_1 = require("./BloodType");
const Services_1 = require("./Services");
const MedRecord_1 = require("./MedRecord");
const routes = express_1.Router();
exports.routes = routes;
routes.use('/login', Login_1.routesLogin);
routes.use('/users', Users_1.routesUsers);
routes.use('/clients', Clients_1.routesClients);
routes.use('/specialist', Specialist_1.routesSpecialist);
routes.use('/specialties', Specialties_1.routesSpecialties);
routes.use('/bloodtype', BloodType_1.routesBloodType);
routes.use('/services', Services_1.routesServices);
routes.use('/medrecord', MedRecord_1.routesMedRecord);
