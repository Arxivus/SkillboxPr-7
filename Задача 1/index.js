const addButton = document.createElement("button")
addButton.textContent = 'Добавить книгу'
document.body.append(addButton)

const searchButton = document.createElement("button")
searchButton.textContent = 'Поиск'
document.body.append(searchButton)

const newList = document.createElement("ul")
document.body.append(newList)

addButton.onclick = function () {
    const bookName = prompt('Введите название книги:')
    if (bookName == '') {
        alert('Название книги не введено!')
    } else {
        bookList.push(bookName)
        writeList(bookList)
    }
}

searchButton.onclick = function () {
    const nameToFind = prompt('Введите название книги:')
    const index = findElement(bookList, nameToFind)
    if (index === -1) {
        alert('Книга не найдена!')
    } else {
        document.querySelector(`li:nth-child(${index + 1})`).style.background = 'yellow'
    }
}

function findElement (array, name) {
    let index = -1
    for (let i = 0; i < array.length; i++) {
        if (name === array[i]) {
            return i
        }
    }

    return index
}

function writeList(array) {
    newList.innerHTML = ""
    for (let i = 0; i < array.length; i++) {
        const listElem = document.createElement("li")
        listElem.textContent = `${i + 1}) ${array[i]}`
        newList.append(listElem)
    }
}

let bookList = ['Мастер и Маргарита', 'Гарри Поттер', 'За пропастью во ржи', 'Властелин колец', 'Дюна', 'Отцы и дети']
writeList(bookList)