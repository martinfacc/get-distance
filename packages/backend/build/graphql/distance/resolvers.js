"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const logger_1 = __importDefault(require("../../logger"));
exports.default = {
    Query: {
        getDistance: (_, args) => __awaiter(void 0, void 0, void 0, function* () {
            try {
                const { from, to, apiKey } = args;
                const formattedFrom = from.replace(/ /g, '+');
                const formattedTo = to.replace(/ /g, '+');
                const url = `https://maps.googleapis.com/maps/api/directions/json?origin=${formattedFrom}&destination=${formattedTo}&key=${apiKey}`;
                const { data: output } = yield axios_1.default.get(url);
                const { routes } = output;
                const { distance, end_location: end, start_location: start } = routes[0].legs[0];
                return {
                    distance: distance.value,
                    text: distance.text,
                    end: {
                        latitude: end.lat,
                        longitude: end.lng
                    },
                    start: {
                        latitude: start.lat,
                        longitude: start.lng
                    }
                };
            }
            catch (error) {
                logger_1.default.error(error);
                throw error;
            }
        })
    }
};
