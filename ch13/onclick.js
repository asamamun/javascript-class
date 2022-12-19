let m = `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam numquam sit delectus quos beatae. Accusamus maxime, quasi et explicabo ab quibusdam dignissimos perferendis ut error in voluptate consequatur dolorum quia.`;
function addmessage(){
    document.querySelector("#message").innerHTML = m;
}
let btn = document.querySelector("#clickBtn");
btn.addEventListener("click",addmessage);