function renderResults(arrayItem, nameArrayItem) {
    const p = document.createElement('p');
    const percentage = Math.round(arrayItem.selectedCount / arrayItem.appearanceCount * 100);
    debugger;
    p.textContent = `You selected ${nameArrayItem.name} ${arrayItem.selectedCount} times out of ${arrayItem.appearanceCount} appearances, ${percentage}% of the time.`;

    return p;
}

export default renderResults;