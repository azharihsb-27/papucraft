const NotFound = {
    async render(){
        return`
        <div class="content p-7 my-[5rem] lg:p-14">
            <h1 class="text-[5rem] text-primary text-center font-bold">OOPS!</h1>
            <h2 class="text-[2rem] text-center font-semibold">404 PAGE NOT FOUND!</h1>
        </div>
        `
    },
    async afterRender(){}
}
export default NotFound