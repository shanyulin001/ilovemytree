const BACK_END_URL = 'http://10.31.167.54:8090'
const API = {
    user_info: `http://10.31.167.54:8093/user/userinfo`,
    user_info_change: `/user/editcommit`,
    myTree:'/myTree',
    user_img:'/user/uploadImage',
    myTreeList:'/myTreeList',
    register:'/user/registe',
    jifen:`${BACK_END_URL}/info/scoreDetail`,
    yhk:`${BACK_END_URL}/info/queryInfo`,
    bdyhk:`${BACK_END_URL}/info/insertInfo`,
    getAmt:`${BACK_END_URL}/info/getAmt`
}

export default API