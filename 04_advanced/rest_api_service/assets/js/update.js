// 1. 수정할 id 받아오기 > id=?
// 2. 서버로부터 해당 id의 객체 받아오기
// 3. 객체의 데이터 중 input, select tag에 데이터 출력시키기
// 4. 수정 한 후 submit 버튼 클릭 하면 이벤트 받아오기
// 5. form tag 내의 수정한 데이터 받아와서 객체 만들기
// 6. 만든 객체를 서버측으로 업데이트 요청하기
// 7. 요청 결과 받아서 alert()으로 결과 출력
// 8. list 다시 호출하기

async function getItemFromServer(ino) {
    try {
        const resp = await fetch('http://khk875api.dothome.co.kr/items/read/'+ino);
        const respText = await resp.text()
        itemObj = await JSON.parse(respText)
        return await itemObj
    } catch (error) {
        console.log(error)
    }
}
async function modifyItemToServer(itemObj) {
    try {
        const url = 'http://khk875api.dothome.co.kr/items/update';
        const config = {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: JSON.stringify(itemObj)
        }
        const resp = await fetch(url, config);
        const result = await resp.json();
        return await result;
    } catch (error) {
        console.log(error);
    }
}
function itemObjToInput(obj) {
    // document.getElementById('name').setAttribute('value', obj.name)
    // document.getElementById('price').setAttribute('value', obj.price)
    // document.getElementById('description').setAttribute('value', obj.description)
    const inputs = document.querySelectorAll('.needs-validation input');
    inputs.forEach(input => {
        input.value = obj[input.id]
    });

    let optionList = document.querySelectorAll('#category_id option');
    optionList.forEach(option => {
        if(option.value == obj.category_id) {
            option.setAttribute('selected', true);
        }
    });
}
document.addEventListener("DOMContentLoaded", ()=> {
    const queryString = location.search;
    let ino = queryString.substring(1);
    console.log(queryString, ino);

    getItemFromServer(ino).then(itemObj => {
        itemObjToInput(itemObj.items[0]);
    })
})

document.querySelector('button.w-100').addEventListener('click', (e) => {
    e.preventDefault();
    const inputs = document.querySelectorAll('.needs-validation input');
    console.log(inputs);

    let itemObj = {};

    inputs.forEach(elem => {
        itemObj[elem.id] = elem.value;
    })

    const cateValue = document.querySelector('#category_id option:checked').value;
    itemObj.category_id = cateValue;

    const now = new Date();
    let createdNow = `${now.getFullYear()}-${now.getMonth()+1}-${now.getDate()} ${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`
    itemObj.modified = createdNow;

    modifyItemToServer(itemObj).then(result => {
        console.log(result);
        alert(result.message);
        location.replace('index.html'); // detail(view)로 이동이 더 많음
    })
});