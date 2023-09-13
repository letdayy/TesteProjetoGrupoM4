import { DataTypes } from "sequelize";
import sequelize from "../utils/database.js";


const Empregado = sequelize.define('Empregado', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
    }
})

export default Empregado;