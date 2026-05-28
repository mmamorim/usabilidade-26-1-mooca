
let source = `
    <div class="col-3 p-2">
        <div class="card">
            <img src="{{coverUrl}}" class="card-img-top h-25" alt="" style="max-height: 100px;">
            <div class="d-flex justify-content-center mt-n1" style="margin-top: -80px">
                <img src="{{picture.large}}"
                    class="card-img-top" alt="" style="width: 100px; height: 100px; border-radius: 100%;">
            </div>
            <div class="card-body">
                <div class="fw-bold">{{ name.title }} {{ name.first }} {{ name.last }}</div>
                <div class="fw-light" style="font-size: 10pt">{{ email }}</div>
                <p class="text-secondary fs-6">
                    Some quick example text to build on the card title and make up the bulk of
                    the card’s content.
                </p>
                <div class="d-flex justify-content-around">
                    <div>
                        <iconify-icon icon="mdi:cards-heart-outline" class="fs-4"></iconify-icon>
                    </div>
                    <button href="#" class="btn btn-outline-secondary btn-sm">
                        <iconify-icon icon="lucide:users" class="me-1"></iconify-icon>
                        Favoritar
                    </button>
                </div>
            </div>
        </div>
    </div>`

let template = Handlebars.compile(source);


async function lerUsuarios() {
    let response = await fetch('https://randomuser.me/api?results=15')
    console.log("response", response);
    let data = await response.json()
    console.log("data", data);
    let content = ""
    for (let idx in data.results) {
        let user = data.results[idx]
        user.coverUrl = `https://picsum.photos/200?${Math.random()}`
        console.log("user", user);
        content = content + template(user);
    }
    //console.log(content);
    let elem = document.getElementById("UsersList")
    //console.log(elem);
    elem.innerHTML = content
}

lerUsuarios()