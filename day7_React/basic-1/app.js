const list = (
    <ul>
    <li>Item1</li>
    <li>Item2</li>
    <li>Item3</li>
</ul>
);

const rootElem = document.getElementById('parent');
const reactRoot = ReactDOM.createRoot(rootElem);
reactRoot.render(list);