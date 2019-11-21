const BACK_END_URL = 'http://121.199.79.111'
// 8094  和  8091   ip  是123.57.48.173
// 其他 端口ip 都是   121.199.79.111

//端口：
//  8090   接口 10、26、27、29
//  8091   接口 18、19、20
//  8092  接口  13、14、15、16
//  8093  接口  3、4、5、6、7、8、9、28
//  8094  接口 21、22、23、24、25
//  8095  接口  2、11、12、17
const API = {
    // user_info: `${BACK_END_URL}:8093/user/userinfo`,
    user_info_change: `${BACK_END_URL}:8093/user/editcommit`,
    myTree:`${BACK_END_URL}:8093/myTree`,
    user_img:`${BACK_END_URL}:8093/user/uploadImage`,
    myTreeList:`${BACK_END_URL}:8093/myTreeList`,
    register:`${BACK_END_URL}:8093/user/registe`,
    jifen:`${BACK_END_URL}:8090/info/scoreDetail`,
    yhk:`${BACK_END_URL}:8090/info/queryInfo`,
    bdyhk:`${BACK_END_URL}:8090/info/insertInfo`,
    getAmt:`${BACK_END_URL}:8090/info/getAmt`,
    login:`${BACK_END_URL}:8093/user/login`
}

export default API