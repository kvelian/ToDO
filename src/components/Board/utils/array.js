export const editElement = (list, element) => {
    const elements = [...list]
    elements[elements.findIndex(x => x.id === element.id)] = {...element}
    return elements
}

export const deleteElement = (list, element) => {
    const elements = [...list]
    elements.splice(elements.indexOf(element), 1);
    return elements
}