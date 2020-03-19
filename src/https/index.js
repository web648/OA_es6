class $http{
    // get 请求
    async get(url){
        const response = await fetch(url);
        const resData = await response.json();
        return resData;
    }
    // post 请求
    async post(url, data){
        const response = await fetch(url, {
            method:'POST',
            headers:{'Content-type':'application/json'},
            body:JSON.stringify(data)
        });
        const resData = await response.json();
        return resData;
    }
    // put 更新接口数据
    async put(url, data){
        const response = await fetch(url, {
            method:'PUT',
            headers:{'Content-type':'application/json'},
            body:JSON.stringify(data)
        });
        const resData = await response.json();
        return resData;
    }
    //delete 删除接口数据
    async delete(url, data){
        const response = await fetch(url, {
            method:'DELETE',
            headers:{'Content-type':'application/json'},
            body:JSON.stringify(data)
        });
        const resData = '删除成功';
        return resData;
    }
}
export default new $http

