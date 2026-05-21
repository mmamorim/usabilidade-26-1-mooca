

let source = `
    <div className="border rounded p-1 w-60">
        <div class="rounded-t-lg h-22 overflow-hidden">
            <img class="object-cover object-top w-full" src="{{coverUrl}}" alt='' />
        </div>
        <div class="mx-auto w-22 h-22 relative -mt-16 border-4 border-white rounded-full overflow-hidden">
            <img class="object-cover object-center h-22" src={{picture.large}} alt='Woman looking front' />
        </div>
        <div class="text-center mt-2">
            <h2 class="m-0 font-semibold">
                {{ name.title }} {{ name.first }} {{ name.last }}
            </h2>
            <p class="m-0 text-gray-500">
                {{ email }}
            </p>
        </div>
        <div class="mt-2 px-2">
            <button class="w-full block mx-auto rounded-lg bg-sky-700 border-0 text-white px-6 py-2">
                Follow
            </button>
        </div>
    </div>
`

let template = Handlebars.compile(source);


async function lerUsuarios() {
    let response = await fetch('https://randomuser.me/api')
    console.log("response", response);
    let data = await response.json()
    console.log("data", data);
    let user = data.results[0]
    console.log("user", user);
    user.coverUrl = `https://picsum.photos/200?${Math.random()}`
    let saida = template(user);
    console.log(saida);
    let elem = document.getElementById("UsersList")
    console.log(elem);
    
    elem.innerHTML = saida
}

lerUsuarios()