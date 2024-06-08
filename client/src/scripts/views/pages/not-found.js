const NotFound = {
    async render(){
        return`
        <div class="content p-7 lg:p-14">
            <h1 class="text-2xl text-center font-bold">404 PAGE NOT FOUND</h1>
        </div>
        `
    },
    async afterRender(){}
}
export default NotFound