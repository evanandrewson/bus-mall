function renderResults(arrayItem) {
    const p = document.createElement('p');
    const percentage = Math.round(arrayItem.selectedCount / arrayItem.appearanceCount * 100);
    p.textContent = `You selected ${arrayItem.id} ${arrayItem.selectedCount} times out of ${arrayItem.appearanceCount} appearances, ${percentage}% of the time.`;

    return p;
}

export default renderResults;