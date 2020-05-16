const PORT=Number(process.env.PORT)||4202;
const BATABASE_NAME='critico';
const SP_USER_LIST='call sp_user_list();';
const SP_USER_CREATE='call sp_user_create(?,?,?);';


export{
    PORT,
    SP_USER_LIST,
    BATABASE_NAME,
    SP_USER_CREATE
}