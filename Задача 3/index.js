const addButton = document.createElement("button")
addButton.textContent = 'Добавить товар'
document.body.append(addButton)

const newList = document.createElement("ul")
document.body.append(newList)

function writeList(array) {
    newList.innerHTML = ""
    filtered = filter(array)
    for (let i = 0; i < filtered.length; i++) {
        const listElem = document.createElement("li")
        listElem.textContent = `${i + 1}) ${filtered[i]}`
        newList.append(listElem)
    }
}

addButton.onclick = function () {
    const name = prompt('Введите название товара:')
    if (name == '') {
        alert('Название товара не введено!')
    } else {
        elements.push(name)
        writeList(elements)
    }
}

function filter(array) {
    for (let j = 0; j < array.length; j++) {
        for (let i = 0; i < array.length - 1; i++) {
            if (array[i] > array[i + 1]) {
                const temp = array[i + 1];
                array[i + 1] = array[i]
                array[i] = temp
            }  
        }   
    }

    return array  
}

const elements = ['Арбуз', 'Книга', 'Макароны', 'Кофе', 'Яблоки', 'Молоко', 'Сахар']
writeList(elements)