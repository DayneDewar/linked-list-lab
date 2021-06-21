const getName = (node) => {
    return node.name
}

const headNode = (list, collection) => {
    return collection[list]
}

const next = (head, collection) => {
    return collection[head.next]
}

const nodeAt = (idx, list, collection) => {
    let head = collection[list]
   for (let i = 0; i < idx; i++) {
       head = collection[head.next]
   }
   return head
}

const addressAt = (idx, list, collection) => {
    let current = collection[list]
    let addy = list
    for (let i = 0; i < idx ; i++) {
        if (idx -1 !== i) {
            current = collection[current.next]
        }
        else {
            addy = current.next
        }
    }
    return addy
}

const indexAt = (node, collection, list) => {
    let count = 0
    let root = collection[list]

    while (root !== node) {
        root = collection[root.next]
        count += 1
    }

    return count
}

const insertNodeAt = (idx, keyName, list, collection) => {
    let current = collection[list]
    let tmpKey

    for (let i = 0; i < idx; i++) {

        if ( i !== idx-1 ) {
            current = collection[current.next]
        }   
        else {
            tmpKey = current.next
            current.next = keyName
            collection[keyName].next = tmpKey
        }
    }
}

const deleteNodeAt = (idx, list, collection) => {
    let current = collection[list]

    for (let i = 0; i < idx; i++) {
        if (i !== idx-1) {
            current = collection[current.next]
        }
        else {
            current.next = collection[current.next].next
        }
    }
}