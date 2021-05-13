"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tictacResolver_1 = require("./moduleTicTac/resolver/tictacResolver");
const resolverUsuario_1 = require("./moduloUsuario/resolver/resolverUsuario");
exports.default = () => {
    const clasesResolver = [
        tictacResolver_1.TicTacToe,
        resolverUsuario_1.RegisterUserResolver,
    ];
    return clasesResolver;
};
//# sourceMappingURL=index.js.map