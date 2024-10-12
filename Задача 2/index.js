const addButton = document.createElement("button")
addButton.textContent = 'Добавить рост'
document.body.append(addButton)

const filterButton = document.createElement("button")
filterButton.textContent = 'Фильтровать'
document.body.append(filterButton)

const newList = document.createElement("ul")
document.body.append(newList)

function writeList(array) {
    newList.innerHTML = ""
    for (let i = 0; i < array.length; i++) {
        const listElem = document.createElement("li")
        listElem.textContent = `${i + 1}) ${array[i]}`
        newList.append(listElem)
    }
}

addButton.onclick = function () {
    const height = prompt('Введите рост:')
    if (height == '') {
        alert('Рост не введён!')
    } else {
        studHeight.push(height)
        writeList(studHeight)
    }
}

filterButton.onclick = function () {
    const minHeight = prompt('Введите минимальный рост:')
    const result = filter(studHeight, minHeight)
    writeList(result)
}

function filter(array, minValue) {
    const result = []
    for (num of array) {
        if (num >= minValue) {
            result.push(num)
        }
    }
    return result
}

const studHeight = [164, 157, 160, 143, 170]

writeList(studHeight)