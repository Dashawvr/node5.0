module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        name:{
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue:'Viktor'
        },
        email:{
            type: DataTypes.STRING,
            allowNull:false,
            defaultValue:'Viktor_kmin@gmail.com'
        },
        password:{
            type: DataTypes.STRING,
            allowNull:false,
        },

    },{
        tableName: 'users',
        timestamps: false,
    });
    return User;
};
